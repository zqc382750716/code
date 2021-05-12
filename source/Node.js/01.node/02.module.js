/* 
    模块化
        在Node中，一个js文件就是一个模块
        在Node中，每一个js文件中的js代码都是独立运行在一个函数中
            而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
    CommonJS规范
*/
console.log('我是一个模块');

/* 
我们可以通过exports来向外部暴露变量和方法
    只需要将需要暴露给外部的变量或方法设置为exports的属性即可
*/
// 向外部暴露属性或方法

exports.x = "我是02.module.js中的x";
exports.fn = function () {
    
}