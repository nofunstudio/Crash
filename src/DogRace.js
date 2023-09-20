import { Model } from "./Robot";
export function DogRace() {
	return (
		<>
			<Model
				url="./doggo.glb"
				position={[0, 0, 0]}
				color={[1, 0, 0]}
				speed={3.5}
				animation="RobotDog@Walk"
			/>

			<Model
				url="./doggo2.glb"
				position={[0.75, 0, 0]}
				color={[0, 1, 0]}
				speed={1.5}
				animation="RobotDog@Walk"
			/>

			<Model
				url="./doggo3.glb"
				position={[-0.75, 0, 0]}
				color={[0, 0, 1]}
				speed={2}
				animation="RobotDog@Walk"
			/>
			<Model
				url="./doggo4.glb"
				position={[1.5, 0, 0]}
				color={[0.5, 0.5, 1]}
				speed={1}
				animation="RobotDog@Walk"
			/>
		</>
	);
}
