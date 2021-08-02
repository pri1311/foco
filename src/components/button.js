import styles from "./countdown-animation.module.css";

const Button = (props) => {
	return (
		<button className={styles[props.activeClass]} onClick={props.callback}>
			{props.title}
		</button>
	);
};

export default Button;
