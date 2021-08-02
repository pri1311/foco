import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	pausePomodoro,
	resumePomodoro,
	startLongBreak,
	startShortBreak,
	startPomodoro,
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

	const handleResumeTimer = (e) => {
		e.preventDefault();
		dispatch(resumePomodoro());
	};

	const handleStartPomodoro = (e) => {
		e.preventDefault();
		dispatch(startPomodoro());
	};

	const handleStartShortBreak = (e) => {
		e.preventDefault();
		dispatch(startShortBreak());
	};

	const handleStartLongBreak = (e) => {
		e.preventDefault();
		dispatch(startLongBreak());
	};

	function makeid(length) {
		var result = "";
		var characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength),
			);
		}
		return result;
	}

	return (
		<Fragment>
			<div className={styles.buttonWrapper}>
				<Button
					activeClass={
						timerStore.active === "duration" ? "active" : ""
					}
					title="Start Pomodoro"
					callback={handleStartPomodoro}
				/>
				<Button
					activeClass={
						timerStore.active === "shortBreak" ? "active" : ""
					}
					title="Start Short Break"
					callback={handleStartShortBreak}
				/>
				<Button
					activeClass={
						timerStore.active === "longBreak" ? "active" : ""
					}
					title="Start Long Break"
					callback={handleStartLongBreak}
				/>
			</div>
			<div className={styles["countdown-wrapper"]}>
				<Countdown
					key={timerStore}
					duration={timerStore.activeDuration}
					animate={timerStore.animate}
				></Countdown>
			</div>
			<div className={styles.buttonGroup}>
				<Button title="Pause Timer" callback={handlePauseTimer} />
				<Button title="Resume Timer" callback={handleResumeTimer} />
			</div>
		</Fragment>
	);
}

export default CountdownAnimation;
