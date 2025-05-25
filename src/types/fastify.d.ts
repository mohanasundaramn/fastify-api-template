import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type { EnvType } from '../schemas/envSchema';

declare module 'fastify' {
	interface FastifyInstance {
		config: EnvType;
		db: NodePgDatabase<Record<string, never>>;
	}
}
