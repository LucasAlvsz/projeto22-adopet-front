import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import svgr from "@honkhonk/vite-plugin-svgr"

// https://vitejs.dev/config/
// prettier-ignore
export default defineConfig({
	plugins: [svgr(), preact()],
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
