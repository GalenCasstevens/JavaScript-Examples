console.log("Taking Simon's request");
var requestA = setTimeout(function(){
 console.log("Simon: money's in the safe, you have $5000");
}, 3000);
console.log("Taking Sally's request");
var requestB = setTimeout(function(){
 console.log("Sally: Here's your $100");
}, 1000);
console.log("Free to take another request");
