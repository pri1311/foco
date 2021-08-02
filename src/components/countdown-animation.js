import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	pausePomodoro,
	stopPomodoro,
	startLongBreak,
	startShortBreak,
} from "../redux/actions";

import Countdown from "./countdown";

import Button from "./button";
import styles from "./countdown-animation.module.css";

function CountdownAnimation(props) {
	console.log(props.duration);
	const dispatch = useDispatch();
	const timerStore = useSelector((state) => state);

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
		<Fragment>
			<div className={styles["countdown-wrapper"]}>
				<Countdown
					key={timerStore.activeDuration}
					duration={timerStore.activeDuration}
					animate={timerStore.animate}
				></Countdown>
			</div>
			<div>
				<Button title="Pause Timer" callback={handlePauseTimer} />
				<Button
					title="Start Short Break"
					callback={handleStartShortBreak}
				/>
				<Button
					title="Start Long Break"
					callback={handleStartLongBreak}
				/>
			</div>
		</Fragment>
	);
}

export default CountdownAnimation;
