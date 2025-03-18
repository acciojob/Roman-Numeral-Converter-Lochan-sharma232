function convertToRoman(num) {
  	const obj = [
      0:['M',1000], 
	900:['CM', 900],
      1:['D', 500],
		400:['CD', 400],
      2:['C', 100], 
      3:['L', 50],
	40:['XL', 40],
      4:['X', 10],
		9:['IX', 9],
      5:['V', 5],
	6:['IV', 4],
      7:['I', 1],
		
    ];
// 	var ans="";
// 	while(num!==0){
// 		for(let j of obj){
// 			if(num>=j[1]){
// 				ans+=j[0];
// 				num-=j[1];
// 				break;
// 			}
// 		}
		 
// }
// console.log(ans);
// }
//   //your code here


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
 //console.log(convertToRoman(36));

var  ans = "";
  
  // Loop through the Roman numerals and subtract the values from num
  //for (let [roman, value] of obj) {
    for(let i=0;i<obj.length;i++)
	while (num >= value) {
      ans += roman;
      num -= value;
    }
  }

  return ans;
}

// Test the function
console.log(convertToRoman(36));


// do not edit below this line
module.exports = convertToRoman
