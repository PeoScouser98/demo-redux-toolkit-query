import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
// https://vitejs.dev/config/
import { resolve } from "path";
const projectRootDir = resolve(__dirname);

export default defineConfig({
	plugins: [
		react(),
		alias({
			entries: [
				{
					find: "@",
					replacement: resolve(projectRootDir, "src"),
				},
			],
		}),
	],
});
