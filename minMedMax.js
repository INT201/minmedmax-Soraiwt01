//const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let Mnum=[n1,n2,n3];
  if(n1<n3 && n1<n2 || n1 == n2){
      if(n2<n3){
        Mnum=[n1,n2,n3];
      }
      else{
        Mnum=[n1,n3,n2];
      }
  }else if(n2<n1 && n2<n3){
      if(n1<n3){
        Mnum=[n2,n1,n3];
      }
      else{
        Mnum=[n2,n3,n1];
      }
  }else{
    if(n2<n1){
      Mnum=[n3,n2,n1];
    }
    else{
      Mnum=[n3,n1,n2];
    }
  }

  return {min: Mnum[0],mid: Mnum[1],max: Mnum[2]};

}

//module.exports = minMedMax
