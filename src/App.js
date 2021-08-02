import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CountdownAnimation from "./components/countdown-animation";
import RandomQuote from "./components/random-quote";
import SetPomodoro from "./components/set-pomodoro";

function App() {
	const animate = useSelector((state) => state.animate);
	const timer = useSelector((state) => state);

	return (
		<div className="container">
			<h1>Foco</h1>
			<RandomQuote />
			<SetPomodoro />
			<CountdownAnimation
				key={1}
				duration={timer.activeDuration}
				animate={animate}
			></CountdownAnimation>
		</div>
	);
}

export default App;
