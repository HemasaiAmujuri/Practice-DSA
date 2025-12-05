function factorial(num){
    if(num == 1){
        return 1
    }
    let fact = 1;
   for(i=num;i>=1;i--){
      fact *= i
   }
   return fact;
}


console.log(factorial(10))