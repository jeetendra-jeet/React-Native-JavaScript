let myName = 'Jeetendra';
function findOccurrence(myName, item){
    let newName = myName.split('');
    let count = 0;
    for(let i = 0; i < newName.length; i++){
        if(newName[i] === item){
            count++
        }
    }
    return count
}

console.log(findOccurrence(myName, 'e'))
