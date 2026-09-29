// @ts-check
import { defineConfig } from 'astro/config';
import pkg from './package.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
	site: 'https://dice.alerix.link',
	vite: {
		define: {
			APP_VERSION: JSON.stringify(pkg.version),
		},
	},
});
