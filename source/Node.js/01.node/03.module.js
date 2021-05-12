// 引入其他模块
/* 
    在Node中，通过require()函数来引入外部的模块
        require()可以传递一个文件的路径作为参数，node将自动根据该路径来引入外部模块
        如果使用相对路径，必须以.或..开头

    使用require引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块

    我们使用require引用外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
        模块分成两大类
            核心模块
                由Node引擎提供的模块
                核心模块的标识就是模块的名字
            文件模块
                由用户自己创建的模块
                文件模块的标识就是文件的路径(绝对路径，相对路径)
*/
var md = require("./02.module.js");
var math = require("./math.js")
var fs = require("fs")
// console.log(md.x);
console.log(math.add(123,456));