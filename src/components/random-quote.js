import { useState, useEffect } from "react";

const RandomQuote = () => {
	const [quote, setQuote] = useState(null);

	useEffect(() => {
		const getQuote = async () => {
			const response = await fetch("https://type.fit/api/quotes");

			const data = await response.json();

			const randomIndex = Math.floor(Math.random() * data.length);

			setQuote(data[randomIndex]);
		};

		getQuote();
	}, []);

	const randomQuote =
		quote !== null ? (
			<div>
				<p>{quote.text}</p>
				<small>- {quote.author}</small>
			</div>
		) : (
			<div></div>
		);

	return randomQuote;
};

export default RandomQuote;
