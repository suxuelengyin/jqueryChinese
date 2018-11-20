//解析xxxx-xx-xx类型的时间格式字符串，输出年月日
function timeReg(time){
    console.time("timeReg")
    const reg=/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/
    const result=reg.exec(time);
    console.timeEnd("timeReg")
    return {
        year:result[1],//0是字符串本身
        month:result[2],
        day:result[3]
    }
}
console.log(timeReg("2012-09-08"));
//匹配(存在)连续两个相同的字符，
function sameReg(str){
    console.time("sameReg")
    const reg=/^([a-z])\1{1,}?/ //加问号可以让运行时间减少将近0.1ms
    console.timeEnd("sameReg")
    return reg.test(str)
}
console.log(sameReg('cca'));

//匹配HTML标签
function HTML(str){
    const htmlreg=/<([^>]+?)>[^<]*?<\/\1>/
    return htmlreg.exec(str)[1]
}
console.log(HTML("<strong>sads</strong>"));
//匹配以aa开头或者以bb结尾的字符串
function xiqu(str){
    const reg=/^aa|bb$/
    return reg.test(str)
}
console.log(xiqu("aaxx"));