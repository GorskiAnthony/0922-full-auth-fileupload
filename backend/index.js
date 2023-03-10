require("dotenv").config();

const app = require("./src/app");
const PORT = process.env.PORT || 5500;

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Server is running on port ${PORT}`);
	}
});
