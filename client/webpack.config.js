const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry:"./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  module:{
    rules: [
      {
        test:/\.js$/, 
        exclude:/node_modules/, 
        loader:"babel-loader",
      },
      {
        test:/\.scss$/,
        use:[
          "style-loader",
          {
            loader: "css-loader",
            options:{
              modules:true,
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test:/\.css$/,
        use:[
          "style-loader",
          {
            loader: "css-loader",
            options:{
              modules:false,
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test:/\.png$/,
        loader:"file-loader"
      }
    ],
  },
  devServer:{
    contentBase:"./dist",
    port: 3001,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target:"http://localhost:3002",
        pathRewrite:{"^/api":""}
      },
      "/assets":{
        target:"http://localhost:3003",
        pathRewrite: {"^/assets":""},
      }
    },
    historyApiFallback: true,
  }
}