var nameBtnElem = document.querySelector('.nameBtn')
var theMessageElem = document.querySelector('.message')
var nameEnteredElem = document.querySelector('.nameEntered')
var greetingMessage = document.querySelector('.counter')
var greetings = names()
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
 	 greetings.storeName(userName)

 	 localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted))
 	 // alert(greetings.greeted(languagePicked, userName))
 	theMessageElem.innerHTML = greetings.greeted(String(languagePicked), String(userName))
 	

 	
	 }
 	
	nameBtnElem.addEventListener('click', greetMe);
	function errorMessageLang(languagePicked){
			theMessageElem.innerHTML = greetings.errorMsg()

	}
	nameBtnElem.addEventListener('click', errorMessageLang);

function counter(languagePicked){
	greetingMessage.innerHTML = greetings.counter()
		
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

