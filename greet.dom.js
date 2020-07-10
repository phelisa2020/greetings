function names(){
var namesGreeted = {}
function storeName(userName){
	if (namesGreeted[userName] === undefined){
     namesGreeted[userName] = 0;
}   
}

function counter (){
	return Object.keys(namesGreeted).length
}
function errorMsg(){
	if(languagePicked === null){
			return ('select a language '+ userName);

		}
}

function greeted(languagePicked, userName){
if(languagePicked === 'English'){
 		return ('Hi, '+ userName);

}
 	else if(languagePicked === 'Afrikaans'){
 		return ('More, '+ userName);
 	}

 	else if(languagePicked === 'IsiXhosa'){
 		return ('Molo, '+ userName);
 	}
 	

	}
return {
	storeName,
	counter,
	greeted,
	errorMsg
	
}
}