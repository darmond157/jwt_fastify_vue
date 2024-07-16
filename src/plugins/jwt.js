module.exports = (fastify) => {
	return new Promise((res, rej) => {
		fastify.register(require("@fastify/jwt"), {
			secret: process.env.JWT_SECRET,
		});

		fastify.after((err) => {
			if (err) rej(err);
			res(err);
		});
	});
};
