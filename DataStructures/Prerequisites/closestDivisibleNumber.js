function closestDivisibleNumber(n,m) {
   let rem = n % m;
   if( rem < Math.round(m/2)){
        return n - rem;
   }  return n + (m - rem)

}

const n = 15
const m = 4;

console.log(closestDivisibleNumber(n, m));