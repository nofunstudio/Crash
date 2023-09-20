import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Ball } from "./Ball";
import { random } from "gsap";
export function Player({ setIsTimerRunning, ...props }) {
	const group = useRef();
	const [currentStep, setCurrentStep] = useState(0);
	const [isCatchPlaying, setIsCatchPlaying] = useState(false);
	const randomNumber = Math.floor(Math.random() * 20000) + 1;

	const animationSequence = [
		{ name: "Running", speed: 1, timeout: randomNumber },
		{ name: "Catch", speed: 1, timeout: 3000 },
		{ name: "Running", speed: 1, timeout: 100000 },
		{ name: "Catch", speed: 1, timeout: 3000 },
	];

	const { nodes, materials, animations } = useGLTF("/playerFB5.glb");
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		const currentAnimation = animationSequence[currentStep];

		if (actions[currentAnimation.name]) {
			actions[currentAnimation.name].timeScale = currentAnimation.speed;
			actions[currentAnimation.name].reset().fadeIn(0.5).play();

			if (currentAnimation.name === "Catch") {
				actions[currentAnimation.name].setLoop(THREE.LoopOnce, 1);
				setIsTimerRunning(false);
				setIsCatchPlaying(true);
				setTimeout(() => {
					setIsCatchPlaying(false);
				}, 3000);
			} else {
				actions[currentAnimation.name].setLoop(THREE.LoopRepeat, Infinity); // Reset to default
			}
		}

		const timeout = setTimeout(() => {
			if (currentStep < animationSequence.length - 1) {
				setCurrentStep(currentStep + 1);
			}
		}, currentAnimation.timeout);

		return () => {
			clearTimeout(timeout);
			if (actions[currentAnimation.name]) {
				actions[currentAnimation.name].fadeOut(0.5);
			}
		};
	}, [currentStep, actions, materials]);

	return (
		<group>
			<Ball isCatchPlaying={isCatchPlaying} />
			<group ref={group} {...props} dispose={null}>
				<group name="Scene">
					<group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.0001}>
						<skinnedMesh
							name="Arms"
							geometry={nodes.Arms.geometry}
							material={materials.American_Football_Uniform___Low_Poly_Default}
							skeleton={nodes.Arms.skeleton}
							castShadow
						/>
						<skinnedMesh
							name="Belt"
							geometry={nodes.Belt.geometry}
							material={materials.wire_006134006}
							skeleton={nodes.Belt.skeleton}
						/>
						<skinnedMesh
							name="Helmet"
							geometry={nodes.Helmet.geometry}
							skeleton={nodes.Helmet.skeleton}
							castShadow
						>
							<meshPhysicalMaterial
								color={"black"}
								envMapIntensity={5.0}
								roughness={0.0}
							/>
						</skinnedMesh>
						<group name="Inside_shirt001">
							<skinnedMesh
								name="Inside_shirt001001"
								geometry={nodes.Inside_shirt001001.geometry}
								material={materials.wire_223198086}
								skeleton={nodes.Inside_shirt001001.skeleton}
							/>
							<skinnedMesh
								name="Inside_shirt001001_1"
								geometry={nodes.Inside_shirt001001_1.geometry}
								material={materials.wire_087224198}
								skeleton={nodes.Inside_shirt001001_1.skeleton}
							/>
						</group>
						<skinnedMesh
							name="mannequin"
							geometry={nodes.mannequin.geometry}
							skeleton={nodes.mannequin.skeleton}
							castShadow
						>
							<meshPhysicalMaterial
								color={"black"}
								envMapIntensity={5.0}
								roughness={0.0}
							/>
						</skinnedMesh>
						<skinnedMesh
							name="metal_helmet"
							geometry={nodes.metal_helmet.geometry}
							skeleton={nodes.metal_helmet.skeleton}
						>
							<meshPhysicalMaterial
								color={"white"}
								envMapIntensity={5.0}
								roughness={0.0}
								castShadow
							/>
						</skinnedMesh>
						<group name="Object002">
							<skinnedMesh
								name="Object002001"
								geometry={nodes.Object002001.geometry}
								material={materials["wire_006135006.002"]}
								skeleton={nodes.Object002001.skeleton}
								castShadow
							/>
							<skinnedMesh
								name="Object002001_1"
								geometry={nodes.Object002001_1.geometry}
								material={materials["wire_149149149.002"]}
								skeleton={nodes.Object002001_1.skeleton}
								castShadow
							/>
							<skinnedMesh
								name="Object002001_2"
								geometry={nodes.Object002001_2.geometry}
								material={materials["wire_000000000.002"]}
								skeleton={nodes.Object002001_2.skeleton}
								castShadow
							/>
							<skinnedMesh
								name="Object002001_3"
								geometry={nodes.Object002001_3.geometry}
								material={materials["wire_134006006.002"]}
								skeleton={nodes.Object002001_3.skeleton}
								castShadow
							/>
						</group>
						<skinnedMesh
							name="Pants"
							geometry={nodes.Pants.geometry}
							material={materials["wire_177028149.002"]}
							skeleton={nodes.Pants.skeleton}
							castShadow
						/>
						<skinnedMesh
							name="plastic"
							geometry={nodes.plastic.geometry}
							material={materials.wire_087224198}
							skeleton={nodes.plastic.skeleton}
						/>
						<skinnedMesh
							name="sa"
							geometry={nodes.sa.geometry}
							material={materials["wire_134006006.002"]}
							skeleton={nodes.sa.skeleton}
						/>
						<skinnedMesh
							name="Shirt"
							geometry={nodes.Shirt.geometry}
							material={materials.wire_134110008}
							skeleton={nodes.Shirt.skeleton}
							castShadow
						/>
						<skinnedMesh
							name="Shoes"
							geometry={nodes.Shoes.geometry}
							material={materials.wire_224198087}
							skeleton={nodes.Shoes.skeleton}
							castShadow
						/>
						<skinnedMesh
							name="socks"
							geometry={nodes.socks.geometry}
							material={materials["wire_143224087.002"]}
							skeleton={nodes.socks.skeleton}
							castShadow
						/>
						<skinnedMesh
							name="Sole"
							geometry={nodes.Sole.geometry}
							material={materials.wire_087224198}
							skeleton={nodes.Sole.skeleton}
							castShadow
						/>
						<primitive object={nodes.mixamorigHips} />
					</group>
				</group>
			</group>
		</group>
	);
}
useGLTF.preload("/playerFB.glb");
