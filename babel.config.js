// MODULE_SYTEM: esm or commonjs

const TARGET_MODULE_SYSTEM = process.env.TARGET_MODULE_SYSTEM ?? "commonjs";

module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
        corejs: "3.6.5",
        modules: TARGET_MODULE_SYSTEM === "esm" ? false : TARGET_MODULE_SYSTEM,
      },
    ],
    ["@babel/preset-typescript", {}],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
