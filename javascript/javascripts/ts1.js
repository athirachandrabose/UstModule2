var num=20;
num="string";
var num2=10;
var flag=true;
var color="green";
console.log("hello from type script"+num+"this is a string");
console.log(num2+num);
if(flag){
    console.log(flag);
}
for(var index=0;index<num;index++){
    var element=index;
    if(num%2==0)
    console.log(element);
}
console.log("num type",typeof num=="number");
console.log("num type",typeof num=="string");
console.log("flag type",typeof num=="boolean");
console.log("type string",typeof num=="string");