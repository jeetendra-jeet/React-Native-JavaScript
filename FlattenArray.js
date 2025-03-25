let arr = [4,3,[7,2,4],5,[3,6],4,[5,7]]
let newArr = [];
function flatArr(arr){
    for(let i = 0; i< arr.length; i++){
        // if(Array.isArray(arr[i])){ // using inbuilt method
        if(arr[i].length !== undefined){ // without inbuilt method
            flatArr(arr[i])
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log('Original', arr)
console.log('FlatenArr',flatArr(arr))
