const connection = require("../helpers/connection");

class AuthModel {
	constructor() {
		this.table = "user";
	}

	/**
	 * user = {
	 *  name: "name",
	 *  email: "email@email.com",
	 *  password: "pA$$w0rD"
	 * }
	 *
	 */
	insert(user) {
		return connection.query(
			`insert into ${this.table} (name, email, password) value (?, ?, ?)`,
			[user.name, user.email, user.password]
		);
	}

	findUser(email) {
		return connection.query(`select * from ${this.table} where email = ?`, [
			email,
		]);
	}
}

module.exports = new AuthModel();
