var nameBtnElem = document.querySelector('.nameBtn')
var theMessageElem = document.querySelector('.message')
var nameEnteredElem = document.querySelector('.nameEntered')
var greetingMessage = document.querySelector('.counter')

// only use a list
var namesGreeted = [];

// var names = [];

// have a list of names
// before adding a name check if the name is already in the list using includes statement on the list
// only add the name if not already in the list...

// use names.length as your counter value...

// remove all the localStorage code.

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
 	if(languagePicked === undefined){
			theMessageElem.innerHTML = ('select a language '+ userName);

		}
	 }
 	
	nameBtnElem.addEventListener('click', greetMe);
	function errorMessageLang(languagePicked){
		if(languagePicked === undefined){
			theMessageElem.innerHTML = ('select a language '+ userName);

		}
	}
	nameBtnElem.addEventListener('click', errorMessageLang);

function counter(languagePicked){
	
	if(nameEnteredElem.value === ''){
		namesGreeted++
		greetingMessage.innerHTML =  ('total people greeted = ' + namesGreeted)
		 
	}
		
	}
	
nameBtnElem.addEventListener('click', counter);

  	function storesNames(){
  		let list = [{'name':nameEnteredElem.value}]

  		if(!namesGreeted.includes(list)){
  			 namesGreeted.push(list)
//  			// only add the name if not already in the list...
//  			 nameEnteredElem.value.length
 			 localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted));

 }
  	}
 nameBtnElem.addEventListener('click', storesNames);

