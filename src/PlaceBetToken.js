import React, { useState } from "react";

export function PlaceBetToken({ wagerAmount, onClick }) {
	const [isBetPlaced, setIsBetPlaced] = useState(false);

	const handleButtonClick = () => {
		setIsBetPlaced(true);
	};
	const formattedProfit = parseFloat(wagerAmount).toFixed(2);

	return (
		<div className="placebetwrapper" onClick={onClick}>
			<div className="placebetbuttoncenter">
				<div className="placebetbuttontext">
					{isBetPlaced ? "BET PLACED" : "PLACEBET "}
					{!isBetPlaced && (
						<span className="text-span">
							<strong>{formattedProfit}</strong>
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
