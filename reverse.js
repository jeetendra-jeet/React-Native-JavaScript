let myName = 'Jeetendra';
function reverseName(myName){
    let newName = []
    let splitedName = myName.split('');
    for(let i = splitedName.length-1; i >= 0 ; i--){
        newName.push(splitedName[i]);
    }
    return newName.join().replaceAll(',', '');
}

console.log(reverseName(myName))
