import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { stopPomodoro } from "../redux/actions";
import { Howl } from "howler";

export default function Countdown(props) {
	console.log(props.duration);
	const dispatch = useDispatch();
	const timerStore = useSelector((state) => state);

	var soundPlay = (src) => {
		console.log("playing sound");
		const sound = new Howl({
			src,
			html5: true,
		});
		sound.play();
	};

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
			size={200}
			trailColor="#151932"
			onComplete={() => {
				soundPlay(
					"https://github.com/pri1311/foco/blob/master/src/assets/audio/Notification.mp3?raw=true",
				);
				setTimeout(() => {
					dispatch(stopPomodoro());
				}, 2000);
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
