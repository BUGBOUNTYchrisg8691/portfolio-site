module.exports = {
  plugins: [
    {
      plugin: require("craco-antd"),
      options: {
        customizeTheme: {
          "@primary-color": "#1DA57A",
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  jest: {
    configure: {
      globals: {
        CONFIG: true,
      },
    },
  },
};
