var nameBtnElem = document.querySelector('.nameBtn')
var theMessageElem = document.querySelector('.message')
var nameEnteredElem = document.querySelector('.nameEntered')
var greetingMessage = document.querySelector('.counter')

var resetBtnElem = document.querySelector('.resetBtn')

 var namesStored = {}
 if(localStorage['varName']){
namesStored =  JSON.parse(localStorage['varName'])
 }
var greetings = names(namesStored)

window.addEventListener('load', function(){
	greetingMessage.innerHTML = ('total people greeted = ' + greetings.counter())
})

function greetMe() {

	var languageElem = document.querySelector("input[name='languageType']:checked");
 	var userName = nameEnteredElem.value;
 	if(userName	&& languageElem ){
 		nameEnteredElem.value = ''
	var languagePicked = languageElem.value;
	greetings.storeName(userName)



	greetingMessage.innerHTML = ('total people greeted = ' + greetings.counter())
	localStorage.setItem('varName', JSON.stringify(greetings.getNames()))
 	theMessageElem.innerHTML = greetings.greeted(String(languagePicked), String(userName))

 	}
 	else if(nameEnteredElem.value == ""){
 theMessageElem.innerHTML = "Please enter a name";
 return;
 
  	}

  	else if(languageElem.value == null){
 theMessageElem.innerHTML =  "Please selecte language";
 return;
 
  	}
//   	else if(languageElem.value &&  nameEnteredElem.value== ''){
// 	theMessageElem.innerHTML = 'Please enter a name and Select a language!'
// 	return;
// }

 
 }
 // function clearGreetInput(){
 // 	nameEnteredElem.value = ''
 // }
 // nameBtnElem.addEventListener('click', clearGreetInput);

function reset(){
 localStorage.clear();
 location.reload()

}
nameBtnElem.addEventListener('click', greetMe);
resetBtnElem.addEventListener('click', reset)
	





