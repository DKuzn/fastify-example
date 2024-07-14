import Fastify from "fastify";

const fastify = Fastify({
    logger: true
});

const port = process.env["PORT"] || 3000

fastify.get("/:param", function (request, reply) {
    let response = {
        hello: "world",
        route_params: request.params,
        query_params: request.query
    }
    reply.send(response);
});

fastify.listen({ port: port, host: "0.0.0.0" }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
