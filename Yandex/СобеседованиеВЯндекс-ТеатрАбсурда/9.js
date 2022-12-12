// Написать функцию, которая вернёт True,
// если из первой строки можно получить вторую,
// совершив не более 1 изменения (== удаление / замена символа).        

const moreThanOneChange = (str1, str2) => {

  str1.split('').sort().join('');
  str2.split('').sort().join('');

  let counter = 0;
  let firstIdx = 0;
  let secondIdx = 0;

  if(str1.length === str2.length){

  }
  while(firstIdx !== str1.length - 1 || str2.length - 1 !== secondIdx){
    if(str1[firstIdx] === str2[secondIdx]){
        firstIdx++
        secondIdx++
    } else if(str1[firstIdx] !== str2[secondIdx] && str1[firstIdx + 1] === str2[secondIdx]){
        counter++
        firstIdx += 2
        secondIdx++
    }else if(str1[firstIdx] !== str2[secondIdx] && str1[firstIdx] === str2[secondIdx + 1]){
        counter++
        firstIdx++ 
        secondIdx+= 2
    }
  }
  return counter <= 1
};

console.log(moreThanOneChange('abcbb','abcaa'))
