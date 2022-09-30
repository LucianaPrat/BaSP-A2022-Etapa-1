window.onload = function() {

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    var inputEmail = document.getElementsByClassName('input-email')[0];    
    var inputPassword = document.getElementsByClassName('input-password')[0];

    var alertEmail = "<p>Your email has an error</p>";
    var alertPassword = "<p>Your pass has an error</p>";
        
    var paragraphEmail = document.getElementsByClassName('alert-email')[0]; 
    var paragraphPassword = document.getElementsByClassName('alert-password')[0];   

    var submitButton = document.getElementsByClassName('submit-button')[0];

    inputEmail.onfocus = function() {
        inputOnFocus(inputEmail);
    }

    inputEmail.onblur = function() {
        inputOnBlur(inputEmail);
        validateEmail(inputEmail);
    }

    inputPassword.onfocus = function() {
        inputOnFocus(inputPassword);
    }

    inputPassword.onblur = function() {
        inputOnBlur(inputPassword);
        validatePassword(inputPassword);
    } 

    submitButton.onclick = function() {        
        validateForm();            
    }

    function inputOnFocus(data) {
        data.classList.add('blue-border');
    }

    function inputOnBlur(data) {
        data.classList.remove('blue-border');
    }   

   function validateEmail(data) {
        var validation;
        if(emailExpression.test(data.value) === true) {            
            data.classList.remove('red-border');
            data.classList.add('green-border');
            paragraphEmail.innerHTML = '';
            localStorage.setItem('email', data.value);
            validation = true;
        } else { 
            data.classList.add('red-border');
            paragraphEmail.innerHTML = alertEmail; 
            validation = false;
        }
        return validation;
    } 

    function validatePassword(data) {
        var resultValidateStringLength = validateStringLength(data,8);
        var resulthasNumAndWord = hasNumAndWord(data.value);
        var password
        var validation;
        if((resultValidateStringLength && resulthasNumAndWord) === true) {
            data.classList.remove('red-border');
            data.classList.add('green-border');   
            localStorage.setItem('password', data.value);         
            validation = true;
        } else { 
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphPassword.innerHTML = alertPassword;
            validation = false;
        }
        return validation;
    } 

    function validateStringLength(data,allowedValue) {
        var validation = false;
        if(data.value.length >= allowedValue) {
            validation = true;
        }
        return  validation;
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

    

    function validateForm() {
        var validationEmailresult = validateEmail(inputEmail);
        var validationPassword = validatePassword(inputPassword);        
        if(validationEmailresult && validationPassword) {            
            var url ='https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + inputEmail.value  + '&password=' + inputPassword.value
            fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                if(data.success){
                    alert('Your request was successful: ' + data.msg);
                    window.location.href='index.html'
                } else {
                   throw new Error( alert('There is an error: ' + data.msg))
                }                     
            }) 
            .catch(function (err) { return err})               
        } else {            
            alert('Sorry we couldnt complete your sign up: Error or missing fields.');
        }
    }

   /*  function receivedEmail(){
        email = localStorage.getItem('email')
        return email
    }

    function receivedPassword(){
        password = localStorage.getItem('password')
        return password
    }    

    receivedEmail();    
    receivedPassword(); */

} 


    