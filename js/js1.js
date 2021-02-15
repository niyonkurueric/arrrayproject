
var array=[1,2,3,4,7,8];
var a=[];
var c=array[array.length-2];
var b=array[array.length-1];

for (var i = 0; i < array.length-2; i++) 
{
	a[i]=array[i];
}
a.push(b);
a.push(c);
console.log(a);