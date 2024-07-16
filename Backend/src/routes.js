module.exports = (fastify) => {
	fastify.post("/signup", async (req, res) => {
		const { username, password } = req.body;
		const hashedPassword = await fastify.bcrypt.hash(password);

		await fastify.pg
			.query("INSERT INTO users (username,password) VALUES ($1,$2)", [
				username,
				hashedPassword,
			])
			.then(() => {
				return res.send("signup successfuly");
			})
			.catch((err) => {
				return res.code(400).send(err);
			});
	});

	fastify.post("/login", async (req, res) => {
		const { username, password } = req.body;

		const result = await fastify.pg.query(
			"SELECT * FROM users WHERE username=$1",
			[username]
		);
		if (result.rowCount === 0)
			return res.code(400).send("User Does Not Exist!");

		const hashedPassword = result.rows[0].password;

		if (!(await fastify.bcrypt.compare(password, hashedPassword)))
			return res.code(400).send("Wrong Password!");

		const jwt = fastify.jwt.sign({ username, password }, { expiresIn: "1h" });
		return res.send({ jwt });
	});

	fastify.get("/test", (req, res) => {
		return res.send("ok with jwt validation ...");
	});
};
