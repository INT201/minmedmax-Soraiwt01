const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let swap ;
  let array = [n1, n2, n3]

  for(j = 1 ; j <= array.length ; j++){
    for(i = 1 ; i <= array.length ; i++) {
        swap =array[i];// swap = 4
        array[i] = array[i = 1]; // array[i -1]=5
        array[i = 1] = swap ; // swap = 4

    };
  }

  return array;
  }

console.log(minMedMax(85, 30, 1));

module.exports = minMedMax
