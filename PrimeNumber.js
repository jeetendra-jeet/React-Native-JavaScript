// Prime Number
let num = 19;
function PrimeNumber(data){
  let count = 0
  for (var i = 2; i <= data; i++) {
    if(data%i === 0){
      count = count+1
    }
  }
  if(count===1){
    console.log("Prime Number")
  }else{
    console.log("Not Prime Number")
  }
}

PrimeNumber(num)
