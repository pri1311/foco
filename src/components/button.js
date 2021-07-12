const Button = (props) => {
	return (
		<button className={props.activeClass} onClick={props.callback}>
			{props.title}
		</button>
	);
};

export default Button;
