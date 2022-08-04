// @ts-check
import preactRefresh from "@prefresh/vite"
import { join } from "path"

/**
 * @type { import('vite').UserConfig }
 */
const config = {
	jsx: "preact",
	plugins: [preactRefresh()],
	alias: {
		"/@/": join(__dirname, "src"),
		"react-dom/test-utils": "preact/test-utils",
		"react/jsx-runtime": "preact/jsx-runtime",
		"react": "preact/compat",
		"react-dom": "preact/compat",
	},
}

export default config
