    const singleNonDuplicate = function(nums) {
        const hash = {}
        for(let el of nums){
            hash[el] = (hash[el] || 0) + 1
        }
        for(let el of nums){
            if(hash[el] === 1){
                return el
            }
        }

    };

    // передается массив чисел, вернуть число которое встречается 1 раз.