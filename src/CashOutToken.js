import React, { useState } from "react";

export function CashOutToken({ profit = 100.9 }) {
	const [isBetClosed, setIsBetClosed] = useState(false);
	const formattedProfit = parseFloat(profit).toFixed(2);

	const handleButtonClick = () => {
		console.log("cash out");
		setIsBetClosed(true);
	};

	return (
		<div className="cashoutwrapper">
			<div className="cashoutbutton">
				<img
					className="iconleftcashout"
					loading="lazy"
					width="auto"
					height="auto"
					alt="__wf_reserved_inherit"
					src="https://uploads-ssl.webflow.com/650860e36a89f83f850ea0b9/6508646410f50c0abebfa17d_Frame%209045.png"
				/>
				<div className="cashoutmultiplytext">{`+${formattedProfit}`}</div>
				<div className="cashoutinnerbutton" onClick={handleButtonClick}>
					<div className="cashoutbuttoninnertext">
						{isBetClosed ? "BET" : "CASH"}
						<br />
						{isBetClosed ? "CLOSED" : "OUT"}
					</div>
				</div>
			</div>
		</div>
	);
}
