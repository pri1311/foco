const router = require("express").Router();
const User = require("../models/user");

router.route("/login").post(async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) res.send("No user found");
		res.send(user);
	} catch (e) {
		res.send(e);
	}
});

router.route("/register").post((req, res) => {
	const { username, email } = req.body;

	const newUser = new User({ username, email });

	newUser
		.save()
		.then(() => res.json("User added!"))
		.catch((err) => res.status(400).json("Err" + err));
});

module.exports = router;
