const  path = require("path")
module.exports={
    //设置打包模式 production：生产模式 development 开发模式
    mode:"production",
    //用来指定打包时的主文件 默认为./src/index.js
    //entry:"./hello/hello.js",
    //entry:["./src/a.js","./src/b.js"]
    // entry:{
    //     a:"./src/a.js",
    //     b:"./src/b.js",
    // },
    //配置代码打包后的地址
    output:{
        //打包后的文件名
        //filename:"main.js",
        // filename:"[name]-[id]-[hash].js",
       //自动清理打包目录
       // clean:true,
        //指定打包目录，必须为绝对路径
        // path:path.resolve(__dirname,"dist"),
    },
    /* 
        webpack默认情况下，只会处理js文件，如果我们希望它可以处理其他类型的文件，则需要为其相应的loader

        以css 为例
            使用css-loader可以处理js中的样式
            使用步骤：
                1 安装： yarn add css-loader
                2 配置： 
                module:{
                    rules:[
                    {   //  正则表达式
                        test: /\.css$/i,
                        use:"css-loader"
                    }
                ]
   }
    */
   module:{
    rules:[
        {   //  正则表达式
            test: /\.css$/i,
            use:["style-loader","css-loader"]
        },
     
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
              // 图片直接资源类型数据，可以通过指定type来处理
              type:"asset/resource" 
        }
    ]
   }
}