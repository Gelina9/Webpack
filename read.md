1、全局安装webpack、webpack-cli、webpack-dev-server
2、创建config、dist、src文件夹,在dist下创建index.html。在src下创建index.js。
3、npm init -y创建package.json
4、设置webpack模式：webpack --mode=development/--production
5、在config文件下创建webpack.dev.js并编写
6、本地安装webpack、webpack-cli、webpack-dev-server
7、启动：webpack-dev-server --config=config/webpack.dev.js（可以去package.json配置启动和打包命令）
8、安装style-loader和css-loader并配置
9、安装html-loader extract-loader file-loader并配置
10、在html-loader的options下配置图片，并且单独配置图片loader
11、安装babel-core，并且创建.babelrc文件(安装babel-core如果有版本问题，就再安装babel-core依赖：cnpm i @babek/core -D)
12、安装babel-plugin-transform-es2015-arrow-functions
13、如果要使用babel命令，全局安装babel-cli
13、安装babel-loader并配置jsloader
14、由于一个一个安装es6等语法插件比较慢，所以可以安装babel-polyfill（转化前预编译，并要在入口文件entry加上去）。还有一种更好的方法是安装环境变量babel-preset-env。并重新去编写.babelrc文件
15、安装babel-plugin-transform-runtime，在main.js里面引入