const path = require('path');

module.exports = {
    //入口，可以有多个
    entry:{
        main:["./src/main.js"],
    },
    //打包环境：开发/生产
    mode:"development",
    //出口，有且只能有一个
    output:{
        //这里的【name】就是入口文件的文件名
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,"../dist"),
        publicPath:'/'
    },
    //本地服务器
    devServer:{
        contentBase:"dist",
        overlay:true, //如果有报错，页面和终端都会报错
    },
    module:{
        rules:[
            //css loader
            {
                test:/\.css$/,
                use:[
                   {
                       loader:"style-loader"
                   },
                   {
                       loader:"css-loader"
                   } 
                ]
            },
            //js loader
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ],
                exclude:/node_modules/
            }
        ]
    }
}