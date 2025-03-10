let arr = [5,3,[7,1,9],3,[66,23],[12,99,34]];
let newArr = []
function flatArray(arr){
for (var i = 0; i < arr.length; i++) {
    if(arr[i].length !== undefined){
      flatArray(arr[i])
    }else{
      newArr.push(arr[i])
    }
}
}
flatArray(arr)
console.log(newArr);
