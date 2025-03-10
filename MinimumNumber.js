let arr = [44,2,55,333,54,22,87,45,223];
let min = arr[0];
for (var i = 0; i < arr.length; i++) {
  if(arr[i] < min){
    min = arr[i];
  }
}
console.log(min)
