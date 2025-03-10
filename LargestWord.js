let text = 'Find Largest Word in the sentence';
function findLargetWord(data){
    let conpleteSentance = data.split(' ');
    let index = 0;
    for (var i = 0; i < conpleteSentance.length; i++) {
      if(conpleteSentance[i].length > conpleteSentance[index].length){
        index = i
      }
    }
    return conpleteSentance[index]
}

console.log(findLargetWord(text));
