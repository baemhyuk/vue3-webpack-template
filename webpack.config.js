//import
const path = require("path");
//Path = 전역모듈
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

//export
module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
    },
    //경로별칭
  },
  //parcel main.js
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./src/main.js",

  //결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),

    //resolve : 첫번째, 두번째 인수를 합쳐주는 것
    //__dirname : 전역적으로 사용할 수 있는 변수 (현재 파일이 있는 그 경로를 지칭)

    // filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "vue-style-loader",
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
    new VueLoaderPlugin(),
  ],

  devServer: {
    host: "localhost",
  },
};
