const dev = process.env.NODE_ENV === "development";

const getStyledComponentsPlugin = () => {
  return [
    "babel-plugin-styled-components",
    {
      ssr: true,
      ...(dev
        ? {
            displayName: true,
          }
        : {
            minify: true,
            transpileTemplateLiterals: true,
            pure: true,
            displayName: false,
          }),
    },
  ];
};

const presets = ["next/babel"];

const plugins = []; // getStyledComponentsPlugin()

module.exports = { presets, plugins };
