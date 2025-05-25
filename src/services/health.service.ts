import type { FastifyReply, FastifyRequest } from 'fastify';

export class HealthService {
	async healthCheck(request: FastifyRequest, reply: FastifyReply) {
		return {
			status: 'ok',
			timestamp: new Date().toISOString(),
		};
	}

	async heartbeat(request: FastifyRequest, reply: FastifyReply) {
		return {
			status: 'alive',
			uptime: process.uptime(),
		};
	}
}
