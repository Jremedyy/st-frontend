import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

export default [
  {
    input: "src/components/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        interop: 'compat',
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        interop: 'compat',
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        exclude: ["src/stories/**"],
      }),
      postcss({
        extensions: [".css"],
      }),
    ],
  },
  {
    input: "dist/components/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [nodeResolve(), dts()],
    external: [/\.css$/],
  },
];
