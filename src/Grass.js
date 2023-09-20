import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

export function Grass() {
	// Load the grass textures (height map, color, roughness).
	const [colorTexture, roughnessTexture] = useLoader(TextureLoader, [
		process.env.PUBLIC_URL + "textures/grass-color.jpg", // Update this path
		process.env.PUBLIC_URL + "textures/grass-roughness.jpg", // Update this path
	]);

	useEffect(() => {
		[colorTexture, roughnessTexture].forEach((t) => {
			t.wrapS = RepeatWrapping;
			t.wrapT = RepeatWrapping;
			t.repeat.set(30, 30); // Adjusted repeat value for grass appearance
		});

		colorTexture.encoding = LinearEncoding;
	}, [colorTexture, roughnessTexture]);

	useFrame((state, delta) => {
		let t = -state.clock.getElapsedTime() * 3;
		roughnessTexture.offset.set(0, t % 1);
		colorTexture.offset.set(0, t % 1);
	});

	return (
		<mesh
			rotation-x={-Math.PI * 0.5}
			position={[0, 0.0, 0]}
			castShadow
			receiveShadow
		>
			<planeGeometry args={[60, 60]} />
			<meshPhysicalMaterial
				map={colorTexture}
				roughnessMap={roughnessTexture}
				dithering={true}
				color={[0.015, 0.5, 0.015]} // You can adjust this color if needed
				roughness={1.0}
				clearcoat={0.0} // Add some clearcoat for a slight wet appearance if needed
			/>
		</mesh>
	);
}
