const predictPartyVictory = function (senate) {
	let radiant = [];
	let dire = [];
	const n = senate.length;

	for (let i = 0; i < n; i++) {
		if (senate[i] === "R") {
			radiant.push(i);
		} else {
			dire.push(i);
		}
	}

	while (radiant.length > 0 && D.length > 0) {
        const rIndex = radiant.shift();
        const dIndex = dire.shift();
        
        if (rIndex < dIndex) {
            radiant.push(rIndex );
        } else {
            dire.push(dIndex );
        }
    }
    
    return radiant.length > 0 ? "Radiant" : "Dire";
};
