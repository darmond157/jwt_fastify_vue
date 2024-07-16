module.exports = (fastify) => {
	return new Promise((res, rej) => {
		fastify.register(require("fastify-bcrypt"), {
			saltWorkFactor: process.env.SALT_WORK_FACTOR,
		});
		fastify.after((err) => {
			if (err) rej(err);
			res(err);
		});
	});
};
