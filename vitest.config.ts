import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		reporters: ['junit', 'json', 'verbose'],
		outputFile: {
			junit: './coverage/junit-report.xml',
			json: './coverage/json-report.json',
		},
		coverage: {
			provider: 'istanbul',
		},
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname,
		},
	},
});
