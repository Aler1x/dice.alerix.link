// @ts-check
import { defineConfig } from 'astro/config';
import pkg from './package.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
	vite: {
		define: {
			APP_VERSION: JSON.stringify(pkg.version),
		},
	},
});
