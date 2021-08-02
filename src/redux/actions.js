import constants from "./constants";

export const setTimerStore = (timer) => {
	return {
		type: constants.SET_TIMER,
		payload: timer,
	};
};

export const startPomodoro = () => {
	return {
		type: constants.START_POMODORO,
	};
};

export const stopPomodoro = () => {
	return {
		type: constants.STOP_TIMER,
	};
};

export const pausePomodoro = () => {
	return {
		type: constants.PAUSE_POMODORO,
	};
};

export const resumePomodoro = () => {
	return {
		type: constants.RESUME_TIMER,
	};
};

export const startLongBreak = () => {
	return {
		type: constants.START_LONG_BREAK,
	};
};

export const startShortBreak = () => {
	return {
		type: constants.START_SHORT_BREAK,
	};
};
