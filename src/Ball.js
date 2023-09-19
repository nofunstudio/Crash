import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Ball({ isCatchPlaying, ...props }) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/ball.glb");
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		if (isCatchPlaying == true) {
			//play animation here
			console.log("play");
			actions.FootballAction.play();
		} else {
			actions.FootballAction.stop();
		}
	}, [isCatchPlaying, actions]);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene" scale={0.145} position={[-0.185, -0.27, -0.15]}>
				<mesh
					name="Football"
					castShadow
					receiveShadow
					geometry={nodes.Football.geometry}
					material={materials.Mat}
					position={[6.503, 38.247, 37.487]}
					rotation={[1.078, 0, 0]}
					scale={0.00001}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/ball.glb");
