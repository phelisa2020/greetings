var nameBtnElem = document.querySelector('.nameBtn')
var theMessageElem = document.querySelector('.message')
var nameEnteredElem = document.querySelector('.nameEntered')
var counterElem = document.querySelector('.counter')
var counter = [{'name':'pearl'}, {'name':'lisa'}, {'name':'some'}, {'name':'kunga'}, {'name':'ali'} ];
var userName = nameEnteredElem.value;
// var data = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name') : [])
function greetMe() {
	var languageElem = document.querySelector("input[name='languageType']:checked");

 	var languagePicked = languageElem.value;
 	
 	 nameEnteredElem.value = ''

 	if(languagePicked === 'English'){
 		theMessageElem.innerHTML = 'Hi, '+ userName;


}
 	else if(languagePicked === 'Afrikaans'){
 		theMessageElem.innerHTML = ('More, '+ userName);
 	}

 	else if(languagePicked === 'IsiXhosa'){
 		theMessageElem.innerHTML = ('Molo, '+ userName);
 	}
 	
 	 
 	}
 
 
	nameBtnElem.addEventListener('click', greetMe);
	function upDateCounter(){	
	if(name[userName] === undefined){
 	 	counter ++
 	
 	  name[userName] = 0;
 	 counterElem.innerHTML = counter
 	 	
 	 }
 	 
   
 	 }	
 	 nameBtnElem.addEventListener('click', upDateCounter);

function objectToString (){
	 let counterObjToString = JSON.stringify(counter)
	 console.log(typeof counterObjToString)
	// 	'name': nameEnteredElem.value
	// }
	localStorage.setItem('counter', counterObjToString)
	// greetCounter.push('allNames');
	var toJsonCounter = JSON.parse(counterObjToString)
	 
	 console.log(typeof toJsonCounter)
}
 nameBtnElem.addEventListener('click', objectToString);
