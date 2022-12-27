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
	// Assigns each variable (e.g. colorMap) to load (useLoader) a texture (TextureLoader) that corresponds to a specific image.
	const [colorMap, normMap, specMap, cloudMap] = useLoader(TextureLoader, [
		EarthDayMap,
		EarthNormMap,
		EarthSpecMap,
		EarthCloudMap
	]);

	// Because cloudRef and globeRef use useRef, the app won't re-render everytime its value is changed.
	const cloudRef = useRef();
	const globeRef = useRef();

	// useFrame runs the function every frame to allow for smooth animations.
	// clock is an object from THREE that keeps track of time.
	useFrame(({clock}) => {
		const elapsedTime = clock.getElapsedTime(); // elapsedTime is the time the clock elapses.
		// Rotates cloudRef and globeRef along the y-axis (left to right).
		globeRef.current.rotation.y = elapsedTime / 7;
		cloudRef.current.rotation.y = elapsedTime / 5;
	});

	return (
		// Used fragment tag because HTML tags do not work inside the Canvas object.
		<>
			{/* pointLight object projects a light from a specific position (x, y, and z-axis) */}
			<pointLight color='#f6f3ea' position={[35, 0, 80]} intensity={1.2} />
			{/* Creates a specific number (count) of stars a certain radius away from the object at a certain depth that blinks at a specific factor, and they do not fade completely */}
			<Stars radius={300} depth={1} count={20000} factor={7} saturation={0} />
			{/* mesh holds an object at a specific position where ref is its animation */}
			<mesh position={[2, 2, 0]} ref={cloudRef}>
				{/* sphereGeometry creates a sphere where args is its radius, width, and height */}
				<sphereGeometry args={[1.015, 32, 32]} />
				{/* meshPhongMaterial is used to simulate shiny objects where map is the object's texture, and THREE.DoubleSide mimics the map on the interior of the sphere */}
				<meshPhongMaterial
					map={cloudMap}
					opacity={0.4}
					// eslint-disable-next-line react/jsx-boolean-value
					transparent={true}
					side={THREE.DoubleSide}
				/>
			</mesh>

			<mesh position={[2, 2, 0]} ref={globeRef}>
				<sphereGeometry args={[1, 32, 32]} />
				{/* specularMap is a map that affects interaction with light */}
				<meshPhongMaterial specularMap={specMap} />
				{/* meshStandardMaterial is used to simulate realistic objects where normalMap is a map with texture, metalness is how reflective it is, and roughness is how not smooth it is */}
				<meshStandardMaterial
					map={colorMap}
					normalMap={normMap}
					metalness={0.4}
					roughness={0.7}
				/>
				{/* OrbitControls allows the user to interact with the object */}
				<OrbitControls zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
			</mesh>
		</>
	);
}

export default Globe;
