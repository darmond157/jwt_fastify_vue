require("dotenv").config();
const fastify = require("fastify")({ logger: true });

require("./src/plugins/postgres")(fastify)
	.then(() => {
		require("./src/plugins/jwt")(fastify);
	})
	.then(() => {
		require("./src/plugins/bcrypt")(fastify);
	})
	.then(() => {
		require("./src/hooks/jwtAuth")(fastify);
		require("./src/routes")(fastify);
	});

fastify.listen({ port: process.env.PORT, host: process.env.HOST });
