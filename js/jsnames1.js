var addName = document.querySelector('#addName');
var addButton = document.querySelector('#addButton');
var array = [];
var cantainlist = () => {

	if (addName.value == '') {
		console.log('empty');
	}
	else {
		var a = addName.value;
		array.push(a);
		console.log(array);
	}

}
addButton.addEventListener('click', cantainlist);
