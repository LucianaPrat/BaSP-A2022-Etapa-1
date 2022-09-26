window.onload = function(){

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    var inputFirstName = document.getElementsByClassName('input-first-name')[0];
    var inputLastName = document.getElementsByClassName('input-last-name')[0];
    var inputEmail = document.getElementsByClassName('input-email')[0];
    var inputDni = document.getElementsByClassName('input-dni')[0];    
    var inputDateBirth = document.getElementsByClassName('input-date-birth')[0];
    var inputPhone = document.getElementsByClassName('input-phone')[0];
    var inputAddress = document.getElementsByClassName('input-address')[0];
    var inputPostalCode = document.getElementsByClassName('input-postal-code')[0];
    var inputPassword = document.getElementsByClassName('input-password')[0];
    var inputRepeatPassword = document.getElementsByClassName('input-reapeat-password')[0]; 

    var registerButton = document.getElementsByClassName('register-button')[0];


    
    inputFirstName.onfocus = function() {
        inputOnFocus(inputFirstName);
    }    
    inputFirstName.onblur = function() {
        inputOnBlur(inputFirstName);
        validateName(inputFirstName);
    } 

    inputLastName.onfocus = function() {
        inputOnFocus(inputLastName);
    }    
    inputLastName.onblur = function() {
        inputOnBlur(inputLastName); 
        validateName(inputLastName); 
    } 

    inputEmail.onfocus = function() {
        inputOnFocus(inputEmail);
    }    
    inputEmail.onblur = function() {
        inputOnBlur(inputEmail);
        validateMail(inputEmail);
    } 

    inputDni.onfocus = function() {
        inputOnFocus(inputDni);
    }    
    inputDni.onblur = function() {
        inputOnBlur(inputDni);
        validateDni(inputDni);
    } 

    inputDateBirth.onfocus = function() {
        inputOnFocus(inputDateBirth);
    }    
    inputDateBirth.onblur = function() {
        inputOnBlur(inputDateBirth);
        validateDateBirth(inputDateBirth);
    } 
    
    inputPhone.onfocus = function() {
        inputOnFocus(inputPhone);
    }    
    inputPhone.onblur = function() {
        inputOnBlur(inputPhone);
        validationPhone(inputPhone);
    } 
 
    inputPassword.onfocus = function() {
        inputOnFocus(inputPassword);
    }
    inputPassword.onblur = function() {
        inputOnBlur(inputPassword);
        validatePass(inputPassword);
    }  
  

    function inputOnFocus(data) {
        data.classList.add('blue-border');
    }

    function inputOnBlur(data) {
        data.classList.remove('blue-border');
    }   

    
    //recibe un input y  retorna: si el largo de su valor es mayor a sierto numero devuelve true 
                        //         sino devuelve fasle
// retorna true -> valida
    function validateStringLength(data,allowedValue) {
        var validation = false;
        if(data.value.length >= allowedValue) {
            validation = true;
        }
        return  validation;
    } 

    //recibe un input y  retorna: si no existe un numero devuelve true 
                        //         si existe un numero devuelve fasle
// retorna true -> valido
    function validateNotExistNum(string) {
        var sonTodasLetras = true;
        for (let i = 0; i < string.length; i++) {
            if(isNaN(parseInt(string[i])) === false){
                sonTodasLetras = false;
            }
        }
        return sonTodasLetras;
    }

    function validateName(data) {
        var validation = false;  
        var resultValidateNotExistNum = validateNotExistNum(data.value);
        var resultValidateStringLength = validateStringLength(data,3);
        if((resultValidateStringLength && resultValidateNotExistNum) === true){
            data.classList.add('green-border');            
            data.classList.remove('red-border'); 
            validation = true;
       } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            validation = false;
       } 
       return validation
    } 

    function validateMail(data) {
        var validation
        if(emailExpression.test(data.value)){            
            data.classList.remove('red-border');
            data.classList.add('green-border');
            /* inputAlertMail.innerHTML = '';*/
            validation = true; 
        }else{ 
            data.classList.add('red-border');
            // inputAlertMail.innerHTML = alertCostumMail; 
            validation = false;
        }
        return validation
    } 

    function validateDni(data) {
        var resultValidateStringLength = validateStringLength(data,7); // true
        var resultValidateNotExistNum = validateNotExistNum(data.value); // fasle 
        var result 
        if((resultValidateStringLength && (resultValidateNotExistNum === false)) === true){
            data.classList.add('green-border');            
            data.classList.remove('red-border'); 
            result = true
        } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            result = false;
        }
        return result
    }

    function validateDateBirth(data) {
        var resultValidateStringLength = validateStringLength(data,8); // true
        var resultValidateNotExistNum = validateNotExistNum(data.value); // fasle 
        var resultSerchSimbol = encontrarUnCaracter(data.value); // true
        var result 
        if((resultValidateStringLength && (resultValidateNotExistNum === false) && (resultSerchSimbol === true)) === true){
            data.classList.add('green-border');            
            data.classList.remove('red-border'); 
            result = true;
        } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            result = false;
        }
        return result
    }
    
    function validationPhone(data) {
        var resultValidateStringLength = validateStringLength(data,10); // true
        var resultValidateNotExistNum = validateNotExistNum(data.value); // fasle 
        var result 
        if((resultValidateStringLength && (resultValidateNotExistNum === false)) === true){
            data.classList.add('green-border');            
            data.classList.remove('red-border'); 
            result = true
        } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            result = false;
        }
        return result
    }


    function encontrarUnCaracter(string) {
        result = false;
        if (((string[2] === '/') && (string[5] === '/')) === true) {
            result = true;
        }
        return result ;
    }



    function hasNumAndWord(string){
        var esnumero = false;
        var esletra = false;
        var result
        for(let i = 0; i < string.length; i++) {
            if(isNaN(parseInt(string[i])) === true) {
               esletra = true; 
            }
        }
        for(let i = 0; i < string.length; i++) {
            if(isNaN(parseInt(string[i])) === false) {
                esnumero = true;
            }
        }
        if ((esnumero && esletra) === true){
           result = true 
        }
        result = esnumero && esletra;
        return result
    }


    console.log(hasNumAndWord('lu12'))



     function validatePass(data){
        var resultValidateStringLength = validateStringLength(data,8); // true
        var resulthasNumAndWord = hasNumAndWord(data.value); // true
        var validation
        if((resultValidateStringLength && resulthasNumAndWord) === true){
            data.classList.remove('red-border');
            data.classList.add('green-border');            
            /* inputAlertPass.innerHTML = ''; */
            validation = true;
        }else{ 
            data.classList.remove('green-border');
            data.classList.add('red-border');
            /* inputAlertPass.innerHTML = alertCostumPass;  */
            validation = false;
        }
        return validation
    } 

}