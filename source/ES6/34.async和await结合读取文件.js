// 引入fs模块
const fs = require('fs')

function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile("./为学.md", (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data)
        })
    })
}
function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile("./插秧诗.md", (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data)
        })
    })
}
function readGuanShuYouGan() {
    return new Promise((resolve, reject) => {
        fs.readFile("./观书有感.md", (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data)
        })
    })
}
async function main() {
    // 获取为学内容
    let weixue = await readWeiXue()
    let chayang = await readChaYangShi()
    let guanshuyougan = await readGuanShuYouGan()

    console.log(weixue.toString());
    console.log(chayang.toString());
    console.log(guanshuyougan.toString());
}
main()