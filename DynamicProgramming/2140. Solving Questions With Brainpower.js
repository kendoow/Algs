	var mostPoints = function (questions) {
		const questionsLength = questions.length;
		let dp = new Array(questionsLength).fill(0);
		dp[questionsLength - 1] = questions[questionsLength - 1][0];
		for (let i = questionsLength - 2; i >= 0; i--) {

			dp[i] = questions[i][0];
			let skip = questions[i][1];
			if (i + skip + 1 < questionsLength) {
				dp[i] += dp[i + skip + 1];
			}
			
			dp[i] = Math.max(dp[i], dp[i + 1]);
		}

		return dp[0];
	};

