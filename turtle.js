const movement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];



const result = function(movement){
	let newArray = [];
	function isZeroOrAbove(num){
		return num >=0;
	}
	movement.filter(function(move){
			if(move.every(isZeroOrAbove)){
				newArray.push(move);
				console.log(move);
			}
		
	})
	return newArray;
}


//console.log(result(movement));

const totalSteps = function(movement){
	let answer = [];
	function addElements(arr){
		let total = 0;
		for(i of arr){
			total += i;
		}
		return total;
	}
	movement.forEach(move => 
		answer.push(addElements(move))
	);
	return answer;
}

console.log(totalSteps(movement));


// let filter = movement.filter(function(move){
// 	move.forEach(function(dir){
		
// 	})
// });

// const result = movement.filter(move =>  
// 	move.forEach(function(index){ index >= 0})
// 	move.forEach(function(step){
// 		if(step >= 0){
// 			return true;
// 		};
// 	})
// );