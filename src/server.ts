import { app } from '@/app';

const start = async () => {
	try {
		await app.ready();
		app.listen({ port: app.config.PORT });
		console.log(app.printRoutes());
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();
