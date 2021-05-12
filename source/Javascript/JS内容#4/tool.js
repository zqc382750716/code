function addClass(obj , cn) {
    //检查obj中是否含有cn
    if(hasClass(obj, cn)){
        }else{
            obj.className += " "+cn
        };
};
/*
    判断一个元素中是否含有指定的class属性值
    如果有则返回true，没有则返回false
*/
function hasClass(obj , cn) {
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className)
}
/*
    删除一个元素中指定的class属性
*/
function removeClass(obj , cn) {
   //创建一个正则表达式
   var reg = new RegExp("\\b"+cn+"\\b");
   obj.className = obj.className.replace(reg,"");
}
/*
    toggleClass可以用来切换一个类
        如果元素中具有该类，则删除
        如果元素中没有该类，则添加
*/
function toggleClass(obj , cn) {
   //判断obj中是否含有cn
   if(hasClass(obj , cn)){
       removeClass(obj , cn);
   }else{
       addClass(obj , cn);
   };
};

/*
    参数：
        obj：要执行动画的对象
        attr：要执行动画的样式 比如：left top width height
        target： 执行动画的目标位置
        speed：移动的速度
        callback：回调函数，这个函数将会在动画执行完毕以后执行
*/
function move(obj , attr , target , speed , callback) {
    //关闭上一个定时器
    clearInterval(obj.timer);
    //获取元素目前的位置
    var current = parseInt(getStyle(obj,attr));
    //判断速度的正负值
    //如果从0向800移动，速度为正，反之为负
    if(current > target){
        //此时速度应为负值
        speed = -speed
    }
    //开启一个定时器，用来执行动画效果
    //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
    obj.timer = setInterval(function() {
        //获取obj原来的属性值
        var oldValue = parseInt(getStyle(obj , attr));
        //在旧值的基础上增加
        var newValue = oldValue + speed;
        //判断newValue与target的大小
        if((speed < 0 && newValue < target) || (speed > 0 && newValue >target)){
            newValue = target;
        };
        //将新值设置给obj
        obj.style[attr] = newValue + "px";
        //当元素移动到target时，使其停止执行动画
        if(newValue == target){
            //达到目标，关闭定时器
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            callback && callback();
        }
    },30)
}
function getStyle(obj , name) {
    if(window.getComputedStyle){
        //正常浏览器的方式，具有getComputedStyle()方法
        return getComputedStyle(obj , null)[name];
    }else{
        //IE8的方式
        return obj.currentStyle[name];
    };
};