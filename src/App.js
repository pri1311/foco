import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./components/button";

import CountdownAnimation from "./components/countdown-animation";
import RandomQuote from "./components/random-quote";
import SetPomodoro from "./components/set-pomodoro";

function App() {
	const animate = useSelector((state) => state.animate);
	const timer = useSelector((state) => state);
	const [showSetTimer, setShowSetTimer] = useState(false);

	return (
		<div className="container">
			<h1>Foco</h1>
			<RandomQuote />
			{showSetTimer && <SetPomodoro setShowSetTimer={setShowSetTimer} />}
			{!showSetTimer && (
				<CountdownAnimation
					key={1}
					duration={timer.activeDuration}
					animate={animate}
				></CountdownAnimation>
			)}
			{!showSetTimer && (
				<Button
					activeClass="primary"
					title="Edit Timer"
					callback={() => {
						setShowSetTimer(true);
					}}
				></Button>
			)}
		</div>
	);
}

export default App;
