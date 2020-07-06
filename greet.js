var nameBtnElem = document.querySelector('.nameBtn')
var theMessageElem = document.querySelector('.message')
var nameEnteredElem = document.querySelector('.nameEntered')
var greetingMessage = document.querySelector('.counter')
var counter = {};
var namesGreeted = [{'name':'lisa'},{'name':'some'},{'name':'kunga'}]
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
 	if (nameEnteredElem.value === ''){
    languagePicked.value = counter++
    //add an entry for the user that was greeted in the Object Map
    greetingMessage.innerHTML =  ('total people greeted = ' + counter)
    
}
localStorage.setItem('namesGreeted', JSON.stringify(counter))
 	}
 
	nameBtnElem.addEventListener('click', greetMe);

	function errorMessageLanguage(languagePicked){
 		if(languagePicked === undefined){
 			return 'Please select language'

 		}
 	}
 	nameBtnElem.addEventListener('click', greetMe);


 function objectToString (){
	var namesInArray = JSON.parse(localStorage.getItem('counter'))
		if(namesInArray === null){
 			// upDateCounter()

 		}
 		else if (namesInArray != null){
 			var nameExist = undefined
 			for (var i = 0; i < namesInArray.length; i++) {
 				var eachName = Object.value;
 				if(userName.toUpperCase()===eachName.toUpperCase()){
 					nameExist = true
 					return 
 				}
 				else{
 					nameExist = false
 					continue
 				}
 			}
 			if(nameExist === false){
 				// upDateCounter()
 			}
 		}

	 }
	 nameBtnElem.addEventListener('click',objectToString )
 	