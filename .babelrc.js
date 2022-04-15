module.exports = {
  presets: [["next/babel"]],
  plugins: [
    [
      "styled-components",
      {
        minify: false,
        ssr: true,
        pure: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};
