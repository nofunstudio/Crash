import React, { useState, useEffect } from "react";

export function Timer({ isTimerRunning }) {
	const [milliseconds, setMilliseconds] = useState(1000);
	useEffect(() => {
		let resetTimeout;

		// Check if the timer has stopped
		if (!isTimerRunning) {
			resetTimeout = setTimeout(() => {
				setMilliseconds(1000); // Reset the timer after 2 seconds
			}, 2000);
		}

		// Cleanup: Clear the timeout when component unmounts or re-renders
		return () => clearTimeout(resetTimeout);
	}, [isTimerRunning]);

	useEffect(() => {
		let interval;

		// Define a function to calculate the interval duration
		const calculateIntervalDuration = () => {
			// define any function that decreases as milliseconds increase
			return Math.max(100 - Math.floor(milliseconds / 12), 10);
		};

		if (isTimerRunning) {
			// Set the interval with a dynamically calculated duration
			interval = setInterval(() => {
				setMilliseconds((prevMilliseconds) => prevMilliseconds + 1);
			}, calculateIntervalDuration());
		} else {
			clearInterval(interval);
		}

		// Clean up the interval on component unmount or when isTimerRunning changes
		return () => {
			clearInterval(interval);
		};
	}, [isTimerRunning, milliseconds]); // Added milliseconds as a dependency

	// Convert milliseconds to seconds with two decimal places
	const seconds = (milliseconds / 1000).toFixed(2);

	// Style for the timer
	const timerStyle = {
		position: "fixed",
		top: "0",
		left: "0",
		color: "white",
		fontSize: "62px",
		zIndex: 2,
		marginTop: "30px",
		padding: "90px",
		backgroundColor: "rgba(255, 255, 255, 0.0)", // Semi-transparent white
		fontWeight: "bold",
		fontFamily: "Sans-Serif",
	};

	return (
		<div className="timercontainer">
			<div className="timertext">{"X" + seconds}</div>
			<div className="timersubtitle">{"CURRENT PAYOUT"}</div>
		</div>
	);
}
