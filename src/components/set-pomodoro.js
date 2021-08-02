import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./button";
import styles from "./set-pomodoro.module.css";

import { setTimerStore } from "../redux/actions";

const SetPomodoro = (props) => {
	const dispatch = useDispatch();
	const timerStore = useSelector((state) => state);

	const [timer, setTimer] = useState(timerStore);

	const handleChange = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case "duration":
				setTimer({
					...timer,
					duration: parseInt(value),
				});
				break;
			case "shortBreak":
				setTimer({
					...timer,
					shortBreak: parseInt(value),
				});
				break;
			case "longBreak":
				setTimer({
					...timer,
					longBreak: parseInt(value),
				});
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.setShowSetTimer(false);
		dispatch(setTimerStore(timer));
	};

	return (
		<div>
			<form className={styles["form-container"]}>
				<div className={styles["input-wrapper"]}>
					<input
						className={styles.input}
						name="duration"
						onChange={handleChange}
						defaultValue={timer.duration}
					></input>
					<input
						className={styles.input}
						name="shortBreak"
						onChange={handleChange}
						defaultValue={timer.shortBreak}
					></input>
					<input
						className={styles.input}
						name="longBreak"
						onChange={handleChange}
						defaultValue={timer.longBreak}
					></input>
				</div>
				<Button title="Set Timer" callback={handleSubmit} />
			</form>
		</div>
	);
};

export default SetPomodoro;
