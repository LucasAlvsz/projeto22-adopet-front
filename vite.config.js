import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	alias: {
		"react-dom/test-utils": "preact/test-utils",
		"react/jsx-runtime": "preact/jsx-runtime",
		"react": "preact/compat",
		"react-dom": "preact/compat",
	},
	esbuild: {
		logOverride: { "this-is-undefined-in-esm": "silent" },
	},
})
