// function init () {
// setTimeout(ag,3000);
//  function ag () {
// 	let access = document.getElementById("code5");
//  let code ="НАстюшка кицюшка";
// access.innerHTML+=code;
// }

// }
window.onload = pluha ;
// // alert (code);
function pluha () {
  area.onmousedown = function(e) { this.value += "mousedown\n"; this.scrollTop = this.scrollHeight; };
  area.contextmenu = function(e) { this.value += "mouseup\n"; this.scrollTop = this.scrollHeight; };
  area.onclick = function(e) { this.value += "click\n"; this.scrollTop = this.scrollHeight; };
console.log("bam  vammam");
}
var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
let test10 = null;
function test9(){return "abcdef"};
console.log(typeof test1); //string 
console.log(typeof test2);  //number
console.log(typeof test3); // bool
console.log(typeof test4); // 
console.log(typeof test5); // 
console.log(typeof test6); //  
console.log(typeof test7); // 
console.log(typeof test8); // 
console.log(typeof test10); //obj

console.log(typeof test9); //  obj
