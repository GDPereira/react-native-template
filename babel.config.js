module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxRuntime: "automatic",
        },
      ],
    ],
    plugins: [
      "expo-router/babel",
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".jpg",
            ".jpeg",
            ".png",
            ".gif",
          ],
          alias: {
            "@app": "./src/app",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@utils": "src/utils",
            "@zustand": "./src/zustand",
          },
        },
      ],
    ],
  };
};
