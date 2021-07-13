import { useState } from "react";

import Button from "./button";
import styles from "./set-pomodoro.module.css";

const SetPomodoro = () => {
	const [timer, setTimer] = useState({
		duration: 25,
		shortBreak: 5,
		longBreak: 15,
		active: "duration",
	});

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

	const handleSubmit = () => {};

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
