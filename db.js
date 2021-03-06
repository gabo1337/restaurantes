const { connect } = require("mongoose");

const connectDB = async () => {
	try {
		console.log("Connecting to database... π");
		await connect(process.env.MONGO_URI);
		console.log("Connected to database πΈπ");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;

