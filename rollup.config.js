import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import react from "react";
import reactDom from "react-dom";
import { dirname, join } from "path";
import { defineConfig } from "rollup";

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const packageJson = require("./package.json");

export const REACT_SHARED_PLUGINS = [
  external(),
  resolve(),
  typescript({ tsconfig: "./tsconfig.json" }),
  commonjs(),
  postcss(),
  terser(),
];

export default defineConfig([
  {
    input: "src/components/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-ts-lib",
        inlineDynamicImports: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: true,
      },
    ],
    plugins: [...REACT_SHARED_PLUGINS],
  
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/, "react", "react-dom"],
    plugins: [dts()],
  },
]);
