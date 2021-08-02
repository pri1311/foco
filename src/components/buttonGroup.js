import { useDispatch } from "react-redux";

import {
	pausePomodoro,
	startLongBreak,
	startShortBreak,
} from "../redux/actions";

import Button from "./button";
import "./countdown-animation.module.css";

export default function ButtonGroup() {
	const dispatch = useDispatch();

	const handlePauseTimer = (e) => {
		e.preventDefault();
		dispatch(pausePomodoro());
	};

	const handleStartShortBreak = (e) => {
		e.preventDefault();
		dispatch(startShortBreak());
	};

	const handleStartLongBreak = (e) => {
		e.preventDefault();
		dispatch(startLongBreak());
	};

	return (
		<div>
			<Button title="Pause Timer" callback={handlePauseTimer} />
			<Button
				title="Start Short Break"
				callback={handleStartShortBreak}
			/>
			<Button title="Start Long Break" callback={handleStartLongBreak} />
		</div>
	);
}
