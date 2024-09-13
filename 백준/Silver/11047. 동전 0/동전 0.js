let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let nk = input[0].split(' '); //[ '10', '4200\r' ]

let k = Number(nk[1]) //만들어야 하는 금액
let CoinList = input.slice(1,).map((el) => Number(el)) //동전 종류
let coin = 0;

for (let i = CoinList.length - 1; i >= 0; i--) {
  if (CoinList[i] <= k) {  //만들어야하는 금액 보다 적거나 같은 동전을 만난 경우
    while (k >= CoinList[i]) {  //뺄 수 있는 금액만큼 반복하면서 뺌
      k -= CoinList[i];
      coin++
      if (k < 0) {  //만들어야하는 금액보다 더 많이 뺐을 경우
        k += CoinList[i]; //이전 상태로 되돌림
        coin -= 1;  //이전 상태로 되돌림
        break;
      }
      if(k===0){
        break;
      }
    }
  }
}
console.log(coin)