function currying(a){
  return function(b){
    return a+b;
  }
}
console.log(currying(4)(5));
