module.exports={
    //设置打包模式 production：生产模式 development 开发模式
    mode:"production",
    //用来指定打包时的主文件 默认为./src/index.js
    //entry:"./hello/hello.js",
    //entry:["./src/a.js","./src/b.js"]
    entry:{
        a:"./src/a.js",
        b:"./src/b.js",
    }
}