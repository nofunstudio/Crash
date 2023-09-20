import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Footer } from "./Footer";
import { ScoreHeader } from "./ScoreHeader";
import { Scene } from "./Scene";

function App() {
	const [isTimerRunning, setIsTimerRunning] = useState(true);
	const videoRef = useRef(null);
	useEffect(() => {
		const videoElement = videoRef.current;
		// play lightning animation when timer is stopped
		if (!isTimerRunning && videoElement) {
			videoElement.play().then(() => {
				videoElement.style.opacity = 1;
				console.log("Video started playing");
				setTimeout(() => {
					setIsTimerRunning(true);
					videoElement.style.opacity = 0.0;
				}, 3000);
			});
		}
	}, [isTimerRunning]);

	return (
		<Suspense fallback={null}>
			<ScoreHeader isTimerRunning={isTimerRunning} />
			<Footer />
			<Canvas shadows>
				<Scene setIsTimerRunning={setIsTimerRunning} />
			</Canvas>
			<video
				className="videoOverlay"
				ref={videoRef}
				autoPlay={false} // Set to false initially
				muted={true} // Recommended to avoid browser restrictions
				loop={false} // Loop video
			>
				<source src="/smoke.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</Suspense>
	);
}

export default App;
