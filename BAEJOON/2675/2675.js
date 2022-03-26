/* https://www.acmicpc.net/problem/2675 */

const [n, ...arr] = require("fs")
  .readFileSync("question.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < n; i++) {
  let arrItem = arr[i].split(" ");
  console.log(arrItem[0]);
  console.log(arrItem[1]);
}
