import constants from "./constants";

const initialState = {
	duration: 25,
	shortBreak: 5,
	longBreak: 15,
	active: "duration",
	animate: false,
	streak: 0,
	activeDuration: 25,
};

const pomodoroReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case constants.SET_TIMER:
			return {
				...prevState,
				duration: action.payload["duration"],
				shortBreak: action.payload["shortBreak"],
				longBreak: action.payload["longBreak"],
			};
		case constants.START_POMODORO:
			return {
				...prevState,
				animate: true,
				active: "duration",
				activeDuration: prevState["duration"],
			};
		case constants.START_LONG_BREAK:
			return {
				...prevState,
				active: "longBreak",
				animate: true,
				activeDuration: prevState["longBreak"],
			};
		case constants.START_SHORT_BREAK:
			return {
				...prevState,
				active: "shortBreak",
				animate: true,
				activeDuration: prevState["shortBreak"],
			};
		case constants.STOP_TIMER:
			switch (prevState.active) {
				case "longBreak":
					return {
						...prevState,
						active: "duration",
						animate: true,
					};
				case "shortBreak":
					return {
						...prevState,
						active: "duration",
						animate: true,
					};
				case "duration":
					var streak = prevState.streak;
					streak += 1;
					if (streak % 3 === 0) {
						return {
							...prevState,
							active: "longBreak",
							animate: false,
						};
					}
					if (streak === 4) streak = 0;
					return {
						...prevState,
						active: "shortBreak",
						animate: true,
					};
				default:
					return {
						...prevState,
					};
			}

		case constants.PAUSE_POMODORO:
			return {
				...prevState,
				animate: false,
			};
		case constants.RESUME_TIMER:
			return {
				...prevState,
				animate: true,
			};
		default:
			return prevState;
	}
};

export default pomodoroReducer;
