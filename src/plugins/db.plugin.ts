import { drizzle } from 'drizzle-orm/node-postgres';
import fp from 'fastify-plugin';

export const dbPlugin = fp(async (fastify, opt) => {
	const db = drizzle(fastify.config.DATABASE_URL);
	fastify.decorate('db', db);

	fastify.log.info('Database plugin initialized');
});
