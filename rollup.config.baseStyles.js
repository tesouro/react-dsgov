import { dirname, join } from "path";
import { defineConfig } from "rollup";
import { REACT_SHARED_PLUGINS } from "./rollup.config";

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const packageJson = require("./package.json");

export default defineConfig([
  {
    input: "src/components/BaseStyles.ts",
    output: [
      {
        file: join(dirname(packageJson.main), "BaseStyles.js"),
        format: "cjs",
      },
      {
        file: join(dirname(packageJson.module), "BaseStyles.js"),
        format: "esm",
      },
    ],
    plugins: [...REACT_SHARED_PLUGINS],
  },
]);
