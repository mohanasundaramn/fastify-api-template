import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import fastifyEnv from '@fastify/env';
import fastifyStatic from '@fastify/static';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifyOpenapiGlue, {
	type FastifyOpenapiGlueOptions,
} from '@platformatic/fastify-openapi-glue';
import ScalarApiReference from '@scalar/fastify-api-reference';
import fastify from 'fastify';
import { dbPlugin } from './plugins/db.plugin.js';
import { envSchema } from './schemas/env.schema.js';
import { HealthService } from './services/health.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options: FastifyOpenapiGlueOptions = {
	specification: join(__dirname, 'api', 'openapi.yaml'),
	serviceHandlers: new HealthService(),
};

export const app = fastify({
	logger: true,
});

app
	.register(fastifyStatic, {
		root: join(__dirname, 'api'),
		prefix: '/api/',
	})
	.register(fastifyEnv, {
		schema: envSchema,
		dotenv: true,
	})
	.register(dbPlugin)
	.register(fastifySwagger)
	.register(fastifySwaggerUi, {
		routePrefix: '/swagger',
		uiConfig: {
			docExpansion: 'list',
			deepLinking: false,
		},
	})
	.register(ScalarApiReference, {
		routePrefix: '/api-docs',
		configuration: {
			url: '/api/openapi.yaml',
			metaData: {
				title: 'Fastify API Documentation',
			},
		},
	})
	.register(fastifyOpenapiGlue, options);
