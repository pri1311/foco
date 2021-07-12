import Button from "./button";

const setPomodoro = () => {
	const handleChange = () => {};

	return (
		<div className="form-container">
			<form>
				<div className="input-wrapper">
					<input
						className="input"
						name="duration"
						onChange={handleChange}
					></input>
					<input
						className="input"
						name="shortBreak"
						onChange={handleChange}
					></input>
					<input
						className="input"
						name="longBreak"
						onChange={handleChange}
					></input>
				</div>
				<Button title="Set Timer" />
			</form>
		</div>
	);
};

export default setPomodoro;
