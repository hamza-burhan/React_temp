const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }],
                      '@babel/preset-react'
                    ]
                  }
                }
              },
              {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }],
                      '@babel/preset-react'
                    ]
                  }
                }
              }
]
},
mode:"development",

  plugins: [
    new HtmlWebpackPlugin({
        title: 'Custom template using Handlebars',
        template: './src/index.html'
      })
  ]

}