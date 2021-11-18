function highestRank(arr){
    let theItem;
    let mf = 1;
    let c = 0;
      if(arr.length !== 0  ){
        for(let i = 0; i< arr.length; i++){
          if(arr[i] == arr[i]) c++;
          if(mf < c) mf=c;
          theItem = arr[i];
        }
        return theItem;
      }}

console.log(highestRank);