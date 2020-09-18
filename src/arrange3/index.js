/*
 * @Author: HuYanan
 * @Date: 2020-09-18 13:33:51
 * @LastEditTime: 2020-09-18 14:04:23
 * @LastEditors: HuYanan
 * @Description: 排列三预测
 * @Version: 0.0.1
 * @FilePath: /LotteryPlayer/src/arrange3/index.js
 * @Contributors: [HuYanan, other]
 */
const {Random} = require('./random/random');

const numberLength = 3;
const random = new Random(numberLength);
const winNum = 463;

function getRandomArr (count) {
  const arr = [];
  for (let i=0; i<count; i++) {
    arr.push(random.getNumber(numberLength));
  }
  return arr;
}

function get500(winNum) {
  console.log('get500', winNum);
  const count = 500;
  const arr = getRandomArr(count);
  console.log(arr);
  const winArr = arr.filter((item) => {
    return `${winNum}` === `${item}`
  });

  console.log(arr);

  if (winArr.length > 0) {
    console.log('中奖了', winArr);
  }

}
// 调用1次看中奖概率
get500(winNum);
