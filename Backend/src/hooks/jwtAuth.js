module.exports = (fastify) => {
	fastify.addHook("onRequest", async (req, res) => {
		if (req.url != "/login" && req.url != "/signup") {
			await req.jwtVerify().catch(() => {
				return res.code(401).send({ message: "Unauthorized" });
			});
		}
	});
};
