import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

export function Lines() {
	const itemsRef = useRef([]);

	useFrame((state, delta) => {
		let elapsed = state.clock.getElapsedTime();

		for (let i = 0; i < itemsRef.current.length; i++) {
			let mesh = itemsRef.current[i];
			let z = (i - 7) * 3.5 + ((elapsed * 2.8) % 3.5) * 2;
			let dist = Math.abs(z);
			mesh.position.set(0, 0, -z);
			mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

			let colorScale = 1;
			if (dist > 2) {
				colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
			}
			colorScale *= 0.5;

			if (i % 2 == 1) {
				mesh.material.emissive = new Color(0.2, 1, 0.2).multiplyScalar(
					colorScale
				);
			} else {
				mesh.material.emissive = new Color(0.2, 1, 0.5).multiplyScalar(
					colorScale
				);
			}
		}
	});

	return (
		<>
			{[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
				<mesh
					castShadow
					receiveShadow
					position={[0, 0, 0]}
					key={i}
					ref={(el) => (itemsRef.current[i] = el)}
				>
					<boxGeometry args={[100, 0.05, 0.2]} />
					<meshStandardMaterial emissive={[1, 1, 1]} color={[1, 1, 1]} />
				</mesh>
			))}
		</>
	);
}
