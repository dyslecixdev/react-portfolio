/* eslint-disable react/no-unknown-property */
import {useRef} from 'react';
import {useFrame, useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three';
import {OrbitControls, Stars} from '@react-three/drei';
import * as THREE from 'three';

import EarthCloudMap from '../assets/8k_earth_clouds.jpg';
import EarthDayMap from '../assets/8k_earth_daymap.jpg';
import EarthNormMap from '../assets/8k_earth_normal_map.jpg';
import EarthSpecMap from '../assets/8k_earth_specular_map.jpg';

function Globe() {
	const [colorMap, normMap, specMap, cloudMap] = useLoader(TextureLoader, [
		EarthDayMap,
		EarthNormMap,
		EarthSpecMap,
		EarthCloudMap
	]);

	const cloudRef = useRef();
	const globeRef = useRef();

	useFrame(({clock}) => {
		const elapsedTime = clock.getElapsedTime();
		globeRef.current.rotation.y = elapsedTime / 7;
		cloudRef.current.rotation.y = elapsedTime / 5;
	});

	return (
		// ? Used fragment because HTML tags do not work with WebGL
		<>
			<pointLight color='#f6f3ea' position={[2, 0, 2]} intensity={1.2} />
			<Stars radius={300} depth={60} count={20000} factor={7} saturation={0} />
			<mesh ref={cloudRef}>
				<sphereGeometry args={[1.005, 32, 32]} />
				<meshPhongMaterial map={cloudMap} opacity={0.4} side={THREE.DoubleSide} />
			</mesh>
			<mesh ref={globeRef}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial specularMap={specMap} />
				<meshStandardMaterial
					map={colorMap}
					normalMap={normMap}
					metalness={0.4}
					roughness={0.7}
				/>
				<OrbitControls zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
			</mesh>
		</>
	);
}

export default Globe;
