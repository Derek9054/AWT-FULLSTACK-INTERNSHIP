const str="Nory was a Catholic because her mother was a Catholic, and Nory's mother was a Catholic because her father was a Catholic, and her father was a Catholic became his mother was a Catholic, or had been";
document.write(str);
document.write("<br/><hr>" +str.replace("Nory","Ashok"));
document.write("<br/><hr>");

const regex=/Catholic/g;
const str1="Nory was a Catholic because her mother was a Catholic, and Nory's mother was a Catholic because her father was a Catholic, and her father was a Catholic became his mother was a Catholic, or had been";
document.write(str1);
document.write("<br/><hr>" +str1.replace(regex,"Hindu"));
document.write("<br/><hr>");

var regex1=/Nory/i;
const output=regex1.exec(str1);
document.write("<br/>", output);
console.log(output);

var regex2=/Catholic/g;
var word="Nory was a Catholic because her mother was a Catholic";
const out=regex2.test(word);
document.write("<br/>", out);
console.log(out);

let txt="Touww  Touww toUw toUww 1245 1235 1458";
let result=txt.match(/[a-z,0-9]/gi);
document.write("<br/>",result);


