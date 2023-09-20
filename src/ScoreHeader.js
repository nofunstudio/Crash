import { ScoreToken } from "./ScoreToken";
import { Timer } from "./Timer";
export function ScoreHeader({ isTimerRunning }) {
	return (
		<div className="scoreheadercontainer">
			<div className="topscoresheader">
				<Timer isTimerRunning={isTimerRunning} />
				<ScoreToken score={1.5} />
				<ScoreToken score={2.5} />
				<ScoreToken score={1.1} />
				<ScoreToken score={1.5} />
				<ScoreToken score={2.5} />
				<ScoreToken score={1.1} />
				<ScoreToken score={2.5} />
				<ScoreToken score={2.5} />
				<ScoreToken score={2.5} />
			</div>
		</div>
	);
}
