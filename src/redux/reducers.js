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
						activeDuration: prevState["duration"],
					};
				case "shortBreak":
					return {
						...prevState,
						active: "duration",
						animate: true,
						activeDuration: prevState["duration"],
					};
				case "duration":
					if ((prevState.streak + 1) % 3 === 0) {
						return {
							...prevState,
							active: "longBreak",
							animate: true,
							streak: prevState.streak + 1,
							activeDuration: prevState["longBreak"],
						};
					}
					if (prevState.streak + 1 === 4) {
						return {
							...prevState,
							streak: 0,
							active: "shortBreak",
							animate: true,
							activeDuration: prevState["shortBreak"],
						};
					}
					return {
						...prevState,
						streak: prevState.streak + 1,
						active: "shortBreak",
						animate: true,
						activeDuration: prevState["shortBreak"],
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
