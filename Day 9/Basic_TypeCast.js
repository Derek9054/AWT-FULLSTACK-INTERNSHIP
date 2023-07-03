document.write("<br/>"+Number("3.14526635767653"));
console.log(typeof 3.14526635767653)
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number(""));
document.write("<br/>"+Number("98 66"));
document.write("<br/>");

document.write("<br/>toExponential: ");
let numexp = 3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(3));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>");

document.write("<br/>toFixed: ");
let numfixed = 3.14;
document.write("<br/>"+numfixed.toFixed(1));
document.write("<br/>"+numfixed.toFixed(2));
document.write("<br/>"+numfixed.toFixed(3));
document.write("<br/>"+numfixed.toFixed(4));
document.write("<br/>");

document.write("<br/>toPrecision: ");
let numPrec = 3.14;
document.write("<br/>"+numPrec.toPrecision(1));
document.write("<br/>"+numPrec.toPrecision(2));
document.write("<br/>"+numPrec.toPrecision(3));
document.write("<br/>"+numPrec.toPrecision(4));
document.write("<br/>");

document.write("<br/> MAX_VALUE:"+Number.MAX_VALUE);
document.write("<br/> MIN_VALUE:"+Number.MIN_VALUE);
document.write("<br/> NEGATIVE_INFINITY:"+Number.NEGATIVE_INFINITY);
document.write("<br/> POSITIVE_INFINTY:"+Number.POSITIVE_INFINITY);
document.write("<br/>");

document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt(" 10"));
document.write("<br/>"+parseInt("10 33"));
document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt("year is 2023"));
document.write("<br/>");



document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat(" 10"));
document.write("<br/>"+parseFloat("10 33"));
document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("10 20 30"));
document.write("<br/>"+parseFloat("year is 2023"));
document.write("<br/>");

document.write("<br/>"); 
document.write("<br/>"+new Date());
document.write("<br/>"+new Date("2001-05-12"));
document.write("<br/>"+new Date(2017, 12, 31, 23, 59, 59));
document.write("<br/>"+new Date("October 13, 2016 12:23:56"));
document.write("<br/>"); 

var d = new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());
document.write("<br/>"+d.toUTCString());
document.write("<br/>"); 

document.write("<br/> TIME:"+d.getTime());
document.write("<br/> DATE:"+d.getDate());
document.write("<br/> DAY:"+d.getDay());
document.write("<br/> FULLYEAR:"+d.getFullYear());
document.write("<br/> HOURS:"+d.getHours());
document.write("<br/> MILLISECONDS:"+d.getMilliseconds());
document.write("<br/> MINUTES:"+d.getMinutes());
document.write("<br/> MONTH:"+d.getMonth());




