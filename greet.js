var nameBtnElem = document.querySelector('.nameBtn')
var theMessageElem = document.querySelector('.message')
var nameEnteredElem = document.querySelector('.nameEntered')
var greetingMessage = document.querySelector('.counter')
var greetings = names()

var varName = [{name:'lisa'},{name: 'andy'},{name: 'some'},{name: 'kunga'},{name: 'ally'}]

function greetMe() {

	var languageElem = document.querySelector("input[name='languageType']:checked");
 	var languagePicked = languageElem.value;
 	var userName = nameEnteredElem.value;
 	 nameEnteredElem.value = ''
 	 greetings.storeName(userName)

 	 localStorage.setItem('varName', JSON.stringify(varName))
 	 // alert(greetings.greeted(languagePicked, userName))
 	theMessageElem.innerHTML = greetings.greeted(String(languagePicked), String(userName))
 	
	 }
 	
	nameBtnElem.addEventListener('click', greetMe);
	
function counter(languagePicked){
	greetingMessage.innerHTML = ('total people greeted = ' + greetings.counter())
		
	}
	
nameBtnElem.addEventListener('click', counter);


  	function storesNames(){
  	   		let list = [{'name':nameEnteredElem.value}]

  		if(!varName.includes(list)){
  			 varName.push(list)
  			 console.log(list)
  			// only add the name if not already in the list...
 			 nameEnteredElem.value.length
			 // localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted));

  }
   	}
  nameBtnElem.addEventListener('click', storesNames);

