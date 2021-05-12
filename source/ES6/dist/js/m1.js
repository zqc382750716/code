/* 
    export命令用于规定模块的对外接口
    import命令用于输入其他模块提供的功能
*/
// 分别暴露
export let school = 'aaa';
export function teach() {
    console.log('teach');
}