function convertToRoman(num) {
  const obj = {
	0:['M',1000],
   1:['CM', 900],
    2:['D', 500],
  3:['CD', 400],
    4:['C', 100],
	5:['XC',90],
    6:['L', 50],
7:['XL', 40],
  8:['X', 10],
  9:['IX', 9],
    10:['V', 5],
11:['IV', 4],
    12:['I', 1],
  
};

var  ans = "";

// Loop through the Roman numerals and subtract the values from num
  
while (num > 0) {
  for (let i in  obj) {
    let demo =obj[i];
    if(num>=demo[1]){
    ans+=demo[0];
    num=num-demo[1];
    break;
  }
}
}
return ans;
}

// Test the function
console.log(convertToRoman(400));


// do not edit below this line
module.exports = convertToRoman
