function add(num1,num2)
{
     return num1+num2;
}

 console.log(add(10,5));

 const square=function(num){
     return num*num;
 }
 console.log(square(4));
  
 const a=["Boron","Carbon","Nitrogen","Oxygen"];
 const b=a.map(function(s){
    return s.length;
 });
 console.log("Normal way",b);

 const c=a.map((s) => s.length);
 console.log("Arrow Function",c);


 