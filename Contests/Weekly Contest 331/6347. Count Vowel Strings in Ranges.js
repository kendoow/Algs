const vowelStrings = (words, queries) =>  {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const dp = new Array(words.length + 1).fill(0);

    for (let i = 0; i < words.length; i++) {
        dp[i + 1] = dp[i] + (vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1]) ? 1 : 0);
    }
    const  answer= [];
    for (let i = 0; i < queries.length; i++) {
        answer.push(dp[queries[i][1] + 1] - dp[queries[i][0]]);
    }
    return answer;
};