const User = require("../models/User");
exports.deleteUser= async (req, res) => {
	await newFunction(req, res);
}
console.log("aman2")
async function newFunction(req, res) {
	console.log("aman")
	debugger;
	try {
		const id = req.params.id;
		const userDelete = await User.findByIdAndDelete({ _id: id });
		res.json(
			{
				success: true,
				data: userDelete
			}
		);
	} catch (error) {
		res.status(500).json(
			{
				success: false,
				error: error
			}
		);
	}
}
