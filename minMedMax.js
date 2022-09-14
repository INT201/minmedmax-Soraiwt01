const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let swap ;
  let array = [n1, n2, n3]

  for(j = 1 ; j <= array.length ; j++){
    for(i = 1 ; i <= array.length ; i++) {
        if(array[i-1]>array[i]){
        swap =array[i];// swap = 4
        array[i] = array[i-1]; // array[i -1]=5
        array[i-1] = swap ; // swap = 4
      }
    }
  }

  return {min: array[0], mid: array[1], max: array[2]};
  }

console.log(minMedMax(85, 30, 2));

module.exports = minMedMax