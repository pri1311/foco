const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema(
	{
		username: {
			type: String,
			required: true,
			minlength: 5,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model("User", userSchema);

module.exports = User;
