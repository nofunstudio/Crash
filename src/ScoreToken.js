import React from "react";

export function ScoreToken({ score = 1.0 }) {
	let borderColor;

	if (score > 2) {
		borderColor = "green";
	} else if (score < 1.5) {
		borderColor = "red";
	} else {
		borderColor = "initial"; // Default color or any other color you'd prefer
	}

	const scoreFrameStyle = {
		border: `2px solid ${borderColor}`,
	};

	return (
		<div className="scoreframe" style={scoreFrameStyle}>
			<div className="scoretext">{`x ${score.toFixed(2)}`}</div>
		</div>
	);
}
