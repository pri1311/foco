import RandomQuote from "./components/random-quote";
import SetPomodoro from "./components/set-pomodoro";

function App() {
	return (
		<div className="container">
			<h1>Pomodoro</h1>
			<RandomQuote />
			<SetPomodoro />
		</div>
	);
}

export default App;
