const foo = function (text, changeLang) {
    let result = '';
    let currentLang = 'en'; 
    let clipboard = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
  
      if (char === '[') {
      
        const commandEndIndex = text.indexOf(']', i);
        if (commandEndIndex !== -1) {
          const command = text.substring(i + 1, commandEndIndex);
          i = commandEndIndex;
  
          if (command === 'l') {
            
            currentLang = currentLang === 'en' ? 'ru' : 'en';
          } else if (command === 'v') {
           
            result += clipboard;
          } else if (command === 'b') {
          
            result = result.slice(0, -1);
          }
        }
      } else {
      
        if (currentLang === 'ru') {
          
          result += changeLang(char);
        } else {
          
          result += char;
        }
  
      
        clipboard += char;
      }
    }
  
    return result;
  };


  const first = 'Y[_]aa[_]nnnn[_]d[_]e[_]xxx[_]![_][b][b][b]'
  console.log(foo(first))