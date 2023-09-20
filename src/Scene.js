import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import {
	EffectComposer,
	DepthOfField,
	Bloom,
	ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
	CubeCamera,
	Environment,
	OrbitControls,
	PerspectiveCamera,
	useTexture,
	Clone,
	SpriteAnimator,
} from "@react-three/drei";
import "./style.css";
import { Boxes } from "./Boxes";
import { Ground } from "./Ground";
import { Grass } from "./Grass";
import { FloatingGrid } from "./FloatingGrid";
import { Rings } from "./Rings";
import { Lines } from "./Lines";
import { Model } from "./Robot";
import { Mech } from "./Mech";
import { Player } from "./Player";
import * as THREE from "three";
import { DogRace } from "./DogRace";

export function Scene({ setIsTimerRunning }) {
	const [texture1] = useTexture([
		process.env.PUBLIC_URL + "textures/blend23.jpg",
	]);
	return (
		<>
			<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
			<PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
			<color args={[0, 0, 0]} attach="background" />

			{/* <CubeCamera resolution={256} frames={Infinity}>
				{(texture) => (
					<>
						<Environment map={texture} />
					</>
				)}
			</CubeCamera> */}

			<Environment resolution={2048} background={true}>
				<mesh scale={20} rotation={[0, 0.54, 0]} position={[0, 0, -2]}>
					<sphereGeometry args={[1, 10, 10]} />
					<meshBasicMaterial map={texture1} side={THREE.BackSide} />
				</mesh>
			</Environment>

			<spotLight
				color={[1, 0.25, 0.7]}
				intensity={1.5}
				angle={0.6}
				penumbra={0.5}
				position={[5, 5, 0]}
				castShadow
				shadow-bias={-0.0001}
			/>
			<spotLight
				color={[0.14, 0.5, 1]}
				intensity={2}
				angle={0.6}
				penumbra={0.5}
				position={[-5, 5, 0]}
				castShadow
				shadow-bias={-0.0001}
			/>
			<Grass />
			{/* <Ground /> */}
			{/* <FloatingGrid /> */}
			{/* <Boxes /> */}
			{/* <Rings /> */}
			<Lines />
			<Suspense fallback={null}>
				{/* <Mech setIsTimerRunning={setIsTimerRunning} /> */}
				<Player setIsTimerRunning={setIsTimerRunning} />
				{/* <DogRace /> */}
			</Suspense>

			<EffectComposer>
				<DepthOfField
					focusDistance={0.0035}
					focalLength={0.01}
					bokehScale={3}
					height={480}
				/>
				<Bloom
					blendFunction={BlendFunction.ADD}
					intensity={1.3} // The bloom intensity.
					width={300} // render width
					height={300} // render height
					kernelSize={5} // blur kernel size
					luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
					luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
				/>
			</EffectComposer>
		</>
	);
}
