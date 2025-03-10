let arr = [5,3,7,1,9,3,66,23,12,99,34];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if(arr[j] > arr[j+1]){
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);
