var addName=document.querySelector('#addName');
var addButton=document.querySelector('#addButton');

var cantainlist=()=>
{
	if (addName.value=='') 
	{
		console.log('empty');
	}
	else
	{

		var a=addName.value;
		var array=[a];
		var b=array

		console.log(b);
	}

}
addButton.addEventListener('click',cantainlist);
