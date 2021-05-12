/* 
    fs.existsSync(path)
        检查一个文件是否存在
    fs.stat(path,callback)
    fs.statSync(path)
        获取文件的状态
        它会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
    fs.unlink(path,callback)
    fs.unlinkSync(path)
        删除文件
    fs.readdir(path[,options],callback)
    fs.readdirSync(path[,options])
        读取一个目录的目录结构
            files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
    fs.truncate(path,len,callback)
    fs.truncateSync(path,len)
        截断文件，将文件修改为指定的大小
    fs.mkdir(path[,mode],callback)
    fs.mkdirSync(path[,mode])
        创建一个目录
    fs.rmdir(path,callback)
    fs.rmdirSync(path,)
        删除一个目录
    fs.rename(oldPath,newPath,callback)
    fs.renameSync(oldPath,newPath)
        对文件进行重命名
            oldPath 旧的路径
            newPath 新的路径
            callback 回调函数
    fs.watchFile(filename[,options],listener)
        监视文件的修改
            filename 要监视的文件的名字
            options 配置选项
            listener 回调函数，当文件发生变化时，回调函数会执行
                在回调函数中会有两个参数：
                    curr 当前文件的状态
                    prev 修改前文件的状态
                        这两个对象都是state对象
*/
var fs = require('fs')

var isExists = fs.existsSync('hello.txt')

fs.stat('hello.txt',function (err,stat) {
    /* 
        size 文件的大小
        isFile() 是否是一个文件
        isDirectory() 是否是一个文件夹/目录
    */
    console.log(arguments);
})

fs.unlinkSync('hello.txt')

fs.readdir('.',function (err,files) {
    if(!err){
        console.log(files);
    }
})
fs.truncateSync('hello.txt',10)

fs.watchFile('hello.txt',{interval:1000},function (curr,prev) {
    console.log(prev.size);
    console.log(curr.size);
})