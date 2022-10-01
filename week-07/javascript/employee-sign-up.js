window.onload = function() {

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    var inputFirstName = document.getElementsByClassName('input-first-name')[0];
    var inputLastName = document.getElementsByClassName('input-last-name')[0];
    var inputEmail = document.getElementsByClassName('input-email')[0];
    var inputDni = document.getElementsByClassName('input-dni')[0];    
    var inputDateBirth = document.getElementsByClassName('input-date-birth')[0];
    var inputPhone = document.getElementsByClassName('input-phone')[0];
    var inputAddress = document.getElementsByClassName('input-address')[0];
    var inputPostalCode = document.getElementsByClassName('input-postal-code')[0];
    var inputLocation = document.getElementsByClassName('input-location')[0];
    var inputPassword = document.getElementsByClassName('input-password')[0];
    var inputRepeatPassword = document.getElementsByClassName('input-reapeat-password')[0]; 

    var registerButton = document.getElementsByClassName('register-button')[0];
    
    var alertFirstName = "<p>Your name has an error</p>"; 
    var alertLastName = "<p>Your last name has an error</p>";
    var alertEmail = "<p>Your email has an error</p>";
    var alertDni = "<p>Your DNI has an error</p>";
    var alertDateBirth = "<p>Your Date Birth has an error</p>";    
    var alertPhone = "<p>Your Phone has an error</p>";
    var alertDni = "<p>Your DNI has an error</p>";
    var alertAddress = "<p>Your address has an error</p>";
    var alertPostalCode = "<p>Your postal code has an error</p>";
    var alertLocation = "<p>Your location has an error</p>";
    var alertPassword = "<p>Your password has an error</p>";
    var alertRepeatPassword = "<p>Your password is not the same</p>";

    var paragraphAlertFirstName = document.getElementsByClassName('alert-name')[0];
    var paragraphAlertLastName = document.getElementsByClassName('alert-last-name')[0];
    var paragraphAlertEmail = document.getElementsByClassName('alert-email')[0];
    var paragraphAlertDateBirth = document.getElementsByClassName('alert-date-birth')[0];
    var paragraphAlertPhone = document.getElementsByClassName('alert-phone')[0];
    var paragraphAlertDni = document.getElementsByClassName('alert-dni')[0];
    var paragraphAlertAddress = document.getElementsByClassName('alert-address')[0];
    var paragraphAlertPostalCode = document.getElementsByClassName('alert-postal-code')[0];
    var paragraphAlertLocation = document.getElementsByClassName('alert-location')[0];
    var paragraphAlertPassword = document.getElementsByClassName('alert-password')[0];
    var paragraphAlertRepeatPassword = document.getElementsByClassName('alert-repeat-password')[0];

    obtenerValoresDelLocalYponerlosEnelinput() 

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
        validateLastName(inputLastName); 
    } 

    inputEmail.onfocus = function() {
        inputOnFocus(inputEmail);
    }    
    inputEmail.onblur = function() {
        inputOnBlur(inputEmail);
        validateEmail(inputEmail);
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
        validatePhone(inputPhone);
    } 

    inputAddress.onfocus = function() {
        inputOnFocus(inputAddress);
    }
    inputAddress.onblur = function() {
        inputOnBlur(inputAddress);
        validateAddress(inputAddress);
    }  

    inputPostalCode.onfocus = function() {
        inputOnFocus(inputPostalCode);
    }
    inputPostalCode.onblur = function() {
        inputOnBlur(inputPostalCode);
        validatePostalCode(inputPostalCode);
    } 

    inputLocation.onfocus = function() {
        inputOnFocus(inputLocation);
    }
    inputLocation.onblur = function() {
        inputOnBlur(inputLocation);
        validateLocation(inputLocation);
    } 

    inputPassword.onfocus = function() {
        inputOnFocus(inputPassword);
    }
    inputPassword.onblur = function() {
        inputOnBlur(inputPassword);
        validatePass(inputPassword);
    }  

    inputRepeatPassword.onfocus = function() {
        inputOnFocus(inputRepeatPassword);
    }
    inputRepeatPassword.onblur = function() {
        inputOnBlur(inputRepeatPassword);
        validateRepeatPassword(inputRepeatPassword);

    } 

    registerButton.onclick = function() {
        validateform();
    } 
  

    function inputOnFocus(data) {
        data.classList.add('blue-border');
    }

    function inputOnBlur(data) {
        data.classList.remove('blue-border');
    }   
        

    function validateStringLength(data,allowedValue) {
        var validation = false;
        if(data.value.length >= allowedValue) {
            validation = true;
        }
        return  validation;
    } 

    function validateNotExistNum(string) {
        var allWords = true;
        for (let i = 0; i < string.length; i++) {
            if(isNaN(parseInt(string[i])) === false) {
                allWords = false;
            }
        }
        return allWords;
    }

    function validateAllNums(string) {
        var allNums = true;
        for (let i = 0; i < string.length; i++) {
            if(isNaN(parseInt(string[i])) === true) {
                allNums = false;
            }
        }
        return allNums;
    }

    function validateName(data) {
        var validationName = false;  
        var resultValidateNotExistNum = validateNotExistNum(data.value);
        var resultValidateStringLength = validateStringLength(data,3);
        if(resultValidateStringLength && resultValidateNotExistNum) {
            data.classList.add('green-border');            
            data.classList.remove('red-border'); 
            paragraphAlertFirstName.innerHTML = '';            
            validationName = true;
       } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertFirstName.innerHTML = alertFirstName;
            validationName = false;
       }  
       return validationName;    
    } 

    function validateLastName(data) {
        var validation = false;  
        var resultValidateNotExistNum = validateNotExistNum(data.value);
        var resultValidateStringLength = validateStringLength(data,3);
        if((resultValidateStringLength && resultValidateNotExistNum) === true) {
            data.classList.add('green-border');            
            data.classList.remove('red-border'); 
            paragraphAlertLastName.innerHTML = '';
            validation = true;
       } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertLastName.innerHTML = alertLastName;
            validation = false;
       } 
       return validation;
    } 

    function validateEmail(data) {
        var validation;
        if(emailExpression.test(data.value)) {            
            data.classList.remove('red-border');
            data.classList.add('green-border');
            paragraphAlertEmail.innerHTML = '';
            validation = true; 
        } else { 
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertEmail.innerHTML = alertEmail; 
            validation = false;
        }
        return validation;
    } 

    function validateDni(data) {
        var resultValidateStringLength = validateStringLength(data,7);
        var resultValidateAllnums = validateAllNums(data.value);
        var validation; 
        if((resultValidateStringLength && resultValidateAllnums)) {
            data.classList.add('green-border');            
            data.classList.remove('red-border');
            paragraphAlertDni.innerHTML = ''; 
            validation = true;
        } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertDni.innerHTML = alertDni; 
            validation = false;
        }
        return validation;
    }

    function validateDateBirth(data) {
        var resultValidateStringLength = validateStringLength(data,8);
        var resultValidateNotExistNum = validateNotExistNum(data.value);
        var resultSerchSimbol = searchCharacter(data.value); 
        var validation;
        if(resultValidateStringLength && !resultValidateNotExistNum && resultSerchSimbol) {
            data.classList.add('green-border');            
            data.classList.remove('red-border'); 
            paragraphAlertDateBirth.innerHTML = '';
            validation = true;
        } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertDateBirth.innerHTML = alertDateBirth; 
            validation = false;
        }
        return validation;
    }
    
    function validatePhone(data) {
        var stringLength = data.value.length;
        var resultValidateStringLength = stringLength === 10;
        var resultValidateAllNums = validateAllNums(data.value);
        var validation;
        if((resultValidateStringLength && resultValidateAllNums)) {
            data.classList.add('green-border');            
            data.classList.remove('red-border'); 
            paragraphAlertPhone.innerHTML = '';
            validation = true;
        } else {
            data.classList.add('red-border');
            data.classList.remove('green-border');            
            paragraphAlertPhone.innerHTML = alertPhone; 
            validation = false;
        }
        return validation;
    }

    function searchCharacter(string) {
        var result = false;
        if ((string[2] === '/') && (string[5] === '/')) {
            result = true;
        }
        return result;
    }

    function hasNumAndWord(string) {
        var isNum = false;
        var isWord = false;
        var result;
        for(let i = 0; i < string.length; i++) {
            if(isNaN(parseInt(string[i])) === true) {
               isWord = true; 
            }
        }
        for(let i = 0; i < string.length; i++) {
            if(isNaN(parseInt(string[i])) === false) {
                isNum = true;
            }
        }
        result = isNum && isWord;
        return result;
    }

    function validateAddress(data) {     
        var validation;
        var resulthasNumAndWord = hasNumAndWord(data.value);
        var checkSpace = data.value.indexOf(' ');
        if((resulthasNumAndWord === true) && (checkSpace > 0)) {
            data.classList.remove('red-border');
            data.classList.add('green-border'); 
            paragraphAlertAddress.innerHTML = '';
            validation = true;
        }else{ 
            data.classList.remove('green-border');
            data.classList.add('red-border');            
            paragraphAlertAddress.innerHTML = alertAddress; 
            validation = false;
        }
        return validation;
    }
   
    function validatePostalCode(data) {
        var validation = false;
        var stringLength = data.value.length;
        var checkLength = ((stringLength === 4 ) || (stringLength === 5));
        var checkAllNums = validateAllNums(data.value);
        if(checkLength && checkAllNums) {
            data.classList.remove('red-border');
            data.classList.add('green-border'); 
            paragraphAlertPostalCode.innerHTML = '';
            validation = true;
        }else{ 
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertPostalCode.innerHTML = alertPostalCode; 
            validation = false;
        }
        return validation;
    }    

    function validateLocation(data) {
        var stringLength = data.value.length;
        var resultValidateStringLength = stringLength > 3;
        if(resultValidateStringLength) {
            data.classList.remove('red-border');
            data.classList.add('green-border');            
            paragraphAlertLocation.innerHTML = '';
            validation = true;
        } else { 
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertLocation.innerHTML = alertLocation;
            validation = false;
        }
        return validation;
    } 
   
    function validatePass(data) {
        var resultValidateStringLength = validateStringLength(data,8);
        var resulthasNumAndWord = hasNumAndWord(data.value);
        var validation;
        if(resultValidateStringLength && resulthasNumAndWord) {
            data.classList.remove('red-border');
            data.classList.add('green-border');            
            paragraphAlertPassword.innerHTML = ''; 
            validation = true;
        }else{ 
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertPassword.innerHTML = alertPassword;
            validation = false;
        }
        return validation;
    } 

    function validateRepeatPassword(data) {
        var validation;         
        if(inputPassword.value === inputRepeatPassword.value) {
            data.classList.remove('red-border');
            data.classList.add('green-border');            
            paragraphAlertRepeatPassword .innerHTML = ''; 
            validation = true;
        }else{ 
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertRepeatPassword .innerHTML = alertRepeatPassword;
            validation = false;
        }
        return validation;
    }    

    function creatArrayValidate(){
        var validateForm = [];
        validateForm.push(validateName(inputFirstName));
        validateForm.push(validateLastName(inputLastName));
        validateForm.push(validateEmail(inputEmail));
        validateForm.push(validateDni(inputDni));
        validateForm.push(validateDateBirth(inputDateBirth));
        validateForm.push(validateAddress(inputAddress));
        validateForm.push(validatePhone(inputPhone));
        validateForm.push(validatePostalCode(inputPostalCode));
        validateForm.push(validateLocation(inputLocation));
        validateForm.push(validatePass(inputPassword));
        validateForm.push(validateRepeatPassword(inputRepeatPassword));        
        return validateForm 
    }   
     console.log()


    function confirmFalse(array) {
        var validation = true;
        for(let i = 0; i < array.length; i++) {
            if(!array[i]) {
                validation = false;
            }
        }
        return validation;
    }

  

    
    
    

   function validateform() { 
       /*  var name = inputFirstName.value;
        var lastName = inputLastName.value;
        var email = inputEmail.value;
        var dni = inputDni.value;
        var dob = inputDateBirth.value;
        var address = inputAddress.value;
        var phone = inputPhone.value;
        var zip = inputPostalCode.value;
        var location = inputLocation.value;
        var password = inputPassword.value;
        var repeatPassword =inputRepeatPassword.value; */
    
        if (confirmFalse(creatArrayValidate())){
            // console.log('verdad')
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + inputFirstName.value +
            '&lastName=' + inputLastName.value + '&email=' + inputEmail.value + '&dni=' + inputDni.value +
            '&dob=' + inputDateBirth.value + '&address=' + inputAddress.value + '&phone=' + inputPhone.value +
            '&zip=' + inputPostalCode.value + '&city=' + inputLocation.value + '&password=' + inputPassword.value +
            '&repeatPassword=' + inputRepeatPassword.value;           
            fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                if(data.success){
                    alert('Your request was successful: ' + data.msg);
                    localStorage.setItem('name', inputFirstName.value);
                    localStorage.setItem('lastName', inputLastName.value);
                    localStorage.setItem('email', inputEmail.value);
                    localStorage.setItem('dni', inputDni.value);
                    localStorage.setItem('dateBirth', inputDateBirth.value);
                    localStorage.setItem('address', inputAddress.value);
                    localStorage.setItem('phone', inputPhone.value);
                    localStorage.setItem('postalCode', inputPostalCode.value);
                    localStorage.setItem('location', inputLocation.value);
                    localStorage.setItem('password', inputPassword.value);
                    localStorage.setItem('repeatPassword', inputRepeatPassword.value);      
                                 
                    window.location.href='index.html'
                } else {
                   throw new Error( alert('There is an error' + data.errors))
                }                     
            }) 
            .catch(function (err) { return err})               
            } else {            
                alert('Sorry we couldnt complete your sign up: Error or missing fields.');
            }
        }

        function obtenerValoresDelLocalYponerlosEnelinput() {
            inputFirstName.value = localStorage.getItem('name');
            inputLastName.value = localStorage.getItem('lastName');
            inputEmail.value = localStorage.getItem('email');
            inputDni.value = localStorage.getItem('dni');
            inputDateBirth.value = localStorage.getItem('dateBirth');
            inputAddress.value = localStorage.getItem('address');
            inputPhone.value = localStorage.getItem('phone');            
            inputPostalCode.value = localStorage.getItem('postalCode');
            inputLocation.value = localStorage.getItem('location');
            inputPassword.value = localStorage.getItem('password');
            inputRepeatPassword.value = localStorage.getItem('repeatPassword');            
        }

        
        
    } 

        

