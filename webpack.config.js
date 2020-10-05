const path = require("path"); // same as `import path from "path"` but we can't use because this js file is not based on modern js
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main"); // __dirname is a global variable represents path of current project folder
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE], // 브라우저가 이해 못하는 js 를 채워줌
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/, // 모든 scss 파일을 찾아주는 정규식
        use: ExtractCSS.extract([
          // 추출 과정, 마지막 줄부터 실행된다.
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader", // 호환성 부여
            options: {
              postcssOptions: {
                plugins() {
                  return [autoprefixer({ browsers: "cover 99.5%" })];
                },
              },
            },
          },
          {
            loader: "sass-loader", // sass 또는 scss 파일을 받는다
          },
        ]),
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [new ExtractCSS("styles.css")],
};

module.exports = config;
