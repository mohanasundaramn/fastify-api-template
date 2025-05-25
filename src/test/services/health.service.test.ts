import supertest from 'supertest';
import { afterAll, beforeAll, describe, it } from 'vitest';
import { app } from '../../app';

describe('HealthService', () => {
	beforeAll(async () => {
		await app.ready();
	});

	afterAll(async () => {
		await app.close();
	});

	describe('Health Check', () => {
		it('Should return return 200 status', async () => {
			await supertest(app.server).get('/healthcheck').expect(200);
		});
	});

	describe('Heart Beat', () => {
		it('Should return return 200 status', async () => {
			await supertest(app.server).get('/heartbeat').expect(200);
		});
	});
});
