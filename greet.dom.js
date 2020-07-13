function names(varName){
const namesGreeted = varName || {}

function storeName(userName){
	if (namesGreeted[userName] === undefined){
     namesGreeted[userName] = 0;
}   
}

function counter (){
	return Object.keys(namesGreeted).length
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
 	if(languagePicked === null){
			return ('select a language '+ userName);

		}

	}
return {
	storeName,
	counter,
	greeted,
	

}
}