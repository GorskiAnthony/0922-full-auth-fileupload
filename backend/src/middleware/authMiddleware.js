const { verifyToken } = require("../helpers/jwt");

const authMiddleware = (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({ error: "Pas de token" });
	}

	try {
		const decoded = verifyToken(token);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(401).json({ error: "Unauthorized" });
	}
};

module.exports = authMiddleware;
