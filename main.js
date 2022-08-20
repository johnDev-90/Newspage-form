
const firstName = document.querySelector(`#firsName`);
const lastName = document.querySelector(`#lastName`);
const email = document.querySelector(`#Email`);
const btnSent = document.querySelector(`#btnSent`);
const textArea = document.querySelector(`#textArea`);

const firstNameError = document.querySelector(`#fisrtName-error`);
const lastNameError = document.querySelector(`#lastName-error`);
const emailerror = document.querySelector(`#email-error`);
const textAreaError = document.querySelector(`#textAreaError`);

btnSent.addEventListener(`click`, (e) =>{
    e.preventDefault();

    validatingValues(firstName.value, firstName, firstNameError, "First name");
        validatingValues(lastName.value, lastName, lastNameError, "Last name");
        validatingValues(textArea.value, textArea, textAreaError, "Mandatory field," );
    
        validatingEmail(email.value, email, emailerror, "Email address");

        const form = document.querySelector(`#form`);
        form.reset();
})
   
function validatingEmail(inputValue, divInput, divError, valueName){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
    if (inputValue.match(regExp)){
        validationOk(divInput, divError)
    }else{
        emailFaild(divInput, divError,valueName);
    }
    if(inputValue ==""){
        validationFailed(divInput, divError, valueName);
    }
 
}

function validatingValues(inputValue, divInput, divError, valueName){
    if(inputValue === ""){
        validationFailed(divInput, divError, valueName);
    }else{
        validationOk(divInput, divError);
    }
    
}

function validationFailed(divInput, divError, valueName){
    divError.innerHTML = `${valueName} cannot be blank`
    divInput.style.borderColor = "red" ;
     

}

function validationOk(divInput, divError){
    divError.innerHTML = ` `;
    divInput.style.borderColor = "green"    
}


function emailFaild(divInput, divError,valueName){
    divError.innerHTML = `Not a valid ${valueName}`
    divInput.style.borderColor = "red" 
    divInput.innerHTML = " "; 
}










