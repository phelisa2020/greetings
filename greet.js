var nameBtnElem = document.querySelector('.nameBtn')
var theMessageElem = document.querySelector('.message')
var nameEnteredElem = document.querySelector('.nameEntered')
var counterElem = document.querySelector('.counter')
var greetCounter = [];

function greetMe() {
	var languageElem = document.querySelector("input[name='languageType']:checked");

 	var languagePicked = languageElem.value;
 	var userName = nameEnteredElem.value;
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
	if(nameEnteredElem === ''){
 	 	return 
 	 }
 	 else {
 	 	greetCounter ++
 	 	return counterElem.innerHTML = greetCounter
 	 console.log(greetings)	
 	 }
 	 }	
 	 nameBtnElem.addEventListener('click', upDateCounter);
