module.exports = (fastify) => {
	return new Promise((res, rej) => {
		fastify.register(require("@fastify/cors"), {
			origin: "*",
		});

		fastify.after((err) => {
			if (err) rej(err);
			res(err);
		});
	});
};
