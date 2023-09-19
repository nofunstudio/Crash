import React, { useRef, useEffect, useState } from "react";

export function WagerToken({ wagerAmount, onWagerChange }) {
	const [isAutoBetActive, setIsAutoBetActive] = useState(false);
	const inputRef = useRef(null);

	const handleWrapperClick = () => {
		inputRef.current.focus();
	};

	const handleWagerInputChange = (event) => {
		const formattedValue = parseFloat(event.target.value).toFixed(2);
		onWagerChange(formattedValue);
	};

	const toggleAutoBet = (event) => {
		event.stopPropagation();
		setIsAutoBetActive((prevState) => !prevState);
	};

	useEffect(() => {
		if (isAutoBetActive) {
			console.log("Auto bet is active");
		} else {
			console.log("Auto bet is not active");
		}
	}, [isAutoBetActive]);

	return (
		<div className="enterwagerwrapper" onClick={handleWrapperClick}>
			<div className="cashoutbutton">
				<img
					className="iconleftwager"
					loading="lazy"
					width="auto"
					height="auto"
					alt="__wf_reserved_inherit"
					src="https://uploads-ssl.webflow.com/650860e36a89f83f850ea0b9/6508646410f50c0abebfa17d_Frame%209045.png"
				/>
				<div className="textstackautobet">
					<input
						type="text" // Change to text type
						className="autocashtext"
						value={parseFloat(wagerAmount).toFixed(2)} // Format the value
						onChange={handleWagerInputChange} // Updated change handler
						ref={inputRef}
					/>
					<div className="autocashlabel">{"WAGER"}</div>
				</div>
				<img
					className="iconrightautobet"
					loading="lazy"
					width="auto"
					height="auto"
					alt="__wf_reserved_inherit"
					src="https://uploads-ssl.webflow.com/650860e36a89f83f850ea0b9/65086c7059ebc8b20d906430_autoarrows.svg"
					onClick={toggleAutoBet}
				/>
			</div>
		</div>
	);
}
