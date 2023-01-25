const buildArray = (target, n) => {
    const answer = []
    for(let i = 1; i <= target[target.length - 1]; i++){
       
        if(target.includes(i)){
            answer.push('Push')
        } else {
            answer.push("Push", "Pop")
        }
         if(i === n){
            return answer
        }
    }
    return answer
};

console.log(buildArray([1,2],4))