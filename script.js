checkYuGiOh=function(n){
    if(! +n){
       console.log (`invalid parameter: ${JSON.stringify(n)}`);
     return;
    }
    let arr=[];
    for(let i=1; i <= n; i++){
        arr.push(i);
    }
   arr.forEach(function(value, index, array){
       if (value % 2 === 0) {
           array[index] = "yu";
       } else if (value % 3 === 0){
           array[index] = "gi";
       } else if (value % 5 === 0){
           array[index] = "oh";
       }
       
    });
    console.log (arr);
}
checkYuGiOh(10);
checkYuGiOh("5")
checkYuGiOh("fizzbuzz is meh");