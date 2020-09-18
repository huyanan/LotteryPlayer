/*
 * @Author: HuYanan
 * @Date: 2020-09-18 13:34:52
 * @LastEditTime: 2020-09-18 13:58:57
 * @LastEditors: HuYanan
 * @Description: 随机算法
 * @Version: 0.0.1
 * @FilePath: /LotteryPlayer/src/arrange3/random/random.js
 * @Contributors: [HuYanan, other]
 */
class Random {
  constructor (options) {
    const { length = 3 } = options;
    this.length = length;
  }
  getNumber (length) {
    let numStr = ''
    for (let i=0; i < (length || this.length); i++) {
      numStr += Math.floor(Math.random() * 10);
    }
    return numStr;
  }
}
module.exports = {
  Random
}
