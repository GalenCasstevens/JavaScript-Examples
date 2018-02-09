var myName = {
 first: 'Simon',
 last: 'Holmes'
 },
 age = 37,
 country = 'UK';
console.log("1:", myName.first, myName.last);
var changeDetails = (function () {
 console.log("2:", age, country);
 var age = 35;
 country = 'United Kingdom';
 console.log("3:", age, country);
 var reduceAge = function (step) {
 age = age - step;
 console.log("4: Age:", age);
 };
 var doAgeIncrease = function (step) {
 for (var i = 0; i <= step; i++){
 window.age += 1;
 }
 console.log("5: Age:", window.age);
 },
 increaseAge = function (step) {
 var waitForIncrease = setTimeout(function(){
 doAgeIncrease(step);
 },step * 200);
 };
 console.log("6:",myName.first, myName.last, age, country);
 return {
 reduceAge : reduceAge,
 increaseAge : increaseAge
 };
})();
