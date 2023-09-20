import React, { useRef, useEffect, useState } from "react";
import { CashOutToken } from "./CashOutToken";
import { PlaceBetToken } from "./PlaceBetToken";
import { AutoCashOutToken } from "./AutoCashOutToken";
import { WagerToken } from "./WagerToken";

import "./devlink/global.css";

export function Footer() {
	const [wagerAmount, setWagerAmount] = useState(51.0); // Default value
	const [cashOutTokens, setCashOutTokens] = useState([]);

	const handleInputChange = (formattedValue) => {
		setWagerAmount(formattedValue);
	};

	const handlePlaceBetClick = () => {
		setCashOutTokens((prevTokens) => [...prevTokens, wagerAmount]);
	};

	return (
		<div className="footer">
			<div className="cashoutrowflex">
				{cashOutTokens.map((profit, index) => (
					<CashOutToken profit={profit} key={index} />
				))}
			</div>
			<div className="placebetrowflex">
				<AutoCashOutToken />
				<PlaceBetToken
					wagerAmount={wagerAmount}
					onClick={handlePlaceBetClick}
				/>
				<WagerToken
					wagerAmount={wagerAmount}
					onWagerChange={handleInputChange}
				/>
			</div>
		</div>
	);
}
