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
	// Globe textures.
	const [colorMap, normMap, specMap, cloudMap] = useLoader(TextureLoader, [
		EarthDayMap,
		EarthNormMap,
		EarthSpecMap,
		EarthCloudMap
	]);

	const cloudRef = useRef();
	const globeRef = useRef();

	// Globe time elapse.
	useFrame(({clock}) => {
		const elapsedTime = clock.getElapsedTime();
		globeRef.current.rotation.y = elapsedTime / 7;
		cloudRef.current.rotation.y = elapsedTime / 5;
	});

	return (
		// Used fragment tag because HTML tags do not work with WebGL
		<>
			{/* Spotlight on the globe */}
			<pointLight color='#f6f3ea' position={[35, 0, 80]} intensity={1.2} />
			{/* Stars background */}
			<Stars radius={300} depth={60} count={20000} factor={7} saturation={0} />
			{/* Cloud layer over globe */}
			<mesh position={[2, 2, 0]} ref={cloudRef}>
				{/* Creates a spehere with a 1.005 radius split into 32 horizontal and vertical segments */}
				<sphereGeometry args={[1.005, 32, 32]} />
				{/* Simulates shiny surfaces */}
				<meshPhongMaterial map={cloudMap} opacity={0.4} side={THREE.DoubleSide} />
			</mesh>
			{/* Globe */}
			<mesh position={[2, 2, 0]} ref={globeRef}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial specularMap={specMap} />
				{/* Simulates realistic surfaces */}
				<meshStandardMaterial
					map={colorMap}
					normalMap={normMap}
					metalness={0.4}
					roughness={0.7}
				/>
				{/* Camera rotation around globe */}
				<OrbitControls zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
			</mesh>
		</>
	);
}

export default Globe;
