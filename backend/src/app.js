const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const fileRouter = require("./routes/fileRouter");
const authRouter = require("./routes/authRouter");
const authMiddleware = require("./middleware/authMiddleware");
const { verifyToken } = require("./helpers/jwt");
// ce middleware me permet de récuperer le corp json
app.use(express.json());
app.use(cookieParser());

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

app.use(fileRouter);
app.use("/auth", authRouter);

app.get("/admin", authMiddleware, (req, res) => {
	res.send("Hello admin!");
});

module.exports = app;
