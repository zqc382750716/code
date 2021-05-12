/* 
    NPM(Node Package Manager)
    CommonJS包规范是理论，NPM是其中的一种实践
    对于Node而言，NPM帮助其完成了第三方模块的发布、安装和依赖等
    借助NPM，Node与第三方模块之间形成了很好的一个生态系统

    NPM命令
        npm-v
            查看npm的版本
        npm version
            查看所有模块的版本
        npm
            帮助说明
        npm search 包名
            搜索模块包
        npm install/i 包名
            在当前目录安装包
        npm install 包名-g
            全局模式安装包(全局安装的包一般都是一些工具)
        npm install 包名 --save
            安装包并添加到依赖中*****
        npm install
            下载当前项目所依赖的包
        npm remove 包名
            删除一个模块
        npm install 文件路径
            从本地暗转
        npm install 包名 -registry=地址
            从镜像源安装
        npm config set registry 地址
            设置镜像源
*/
/* 
    通过npm下载的包都放到node_modules文件夹中
    我们通过npm下载的包，直接通过包名引入即可

    node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块
    如果有则直接使用，如果没有则去上一级目录的node_modules中寻找
    如果有则直接使用，如果没有则再去上一级目录中寻找，直到找到位置
    直到找到磁盘的根目录，如果依然没有，则报错
 */