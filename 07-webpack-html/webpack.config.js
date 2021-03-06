var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 配置入口文件
  entry: './src/app.js',
  // 配置输出文件
  output: {
    // 表示输出文件的路径
    path: path.join(__dirname, 'dist'),
    // 静态资源在服务器上运行时的访问路径，可以直接http://localhost:8080/dist/bundle.js访问到服务器中的bundle.js文件
    // publicPath: '/dist',
    // 表示输出文件的名字
    filename: 'index.js'
  },
  module: {
    rules: [
      // 配置的是用来解析.css文件的loader(style-loader和css-loader)
      {
        // 1.0 用正则匹配当前访问的文件的后缀名是  .css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //webpack底层调用这些包的顺序是从右到左
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|jpg|gif|eot|svg|ttf|woff)/,
        use: [{
            loader: 'url-loader',
            options: {
              // limit表示如果图片大于50000byte，就以路径形式展示，小于的话就用base64格式展示
                limit: 5000
            }
        }]
    }
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.html',
      title: 'html-webpack-plugin'
    })
]
}