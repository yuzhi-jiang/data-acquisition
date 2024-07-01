// 以下代码仅作演示用，不具备任何实际意义

// 生成器函数也可以接收参数
function* NumGenerator(num) {
    const NUM = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    while(true) {
        // yield向外部返回一个对象的同时，可以从next方法接收一个新值
        num = yield NUM[num];
    }
}

const numIterator = NumGenerator();

const num1 = numIterator.next();
const num2 = numIterator.next(5);
const num3 = numIterator.next(9);

console.log(num1.value);        // 壹
console.log(num2.value);        // 伍
console.log(num3.value);        // 玖
