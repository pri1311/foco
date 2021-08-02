import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { stopPomodoro } from "../redux/actions";

export default function Countdown(props) {
	console.log(props.duration);
	const dispatch = useDispatch();
	const timerStore = useSelector((state) => state);
	return (
		<CountdownCircleTimer
			isPlaying={timerStore["animate"]}
			duration={props.duration * 60}
			key={props.key}
			colors={[
				["#FE6F6B", 0.33],
				["#FE6F6B", 0.33],
				["#FE6F6B", 0.33],
			]}
			strokeWidth={6}
			size={180}
			trailColor="#151932"
			onComplete={() => {
				dispatch(stopPomodoro());
			}}
		>
			{/* {props.children} */}
			{({ remainingTime }) => {
				return (
					parseInt(remainingTime / 60) + ":" + (remainingTime % 60)
				);
			}}
		</CountdownCircleTimer>
	);
}
