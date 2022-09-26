window.onload = function(){

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    var inputMail = document.getElementsByClassName('input-mail')[0];    
    var inputPass = document.getElementsByClassName('input-pass')[0];
    
    var submitButton = document.getElementsByClassName('submit-button')[0];

    var alertCostumMail = "<p>Your email has an error</p>";
    var alertCostumPass = "<p>Your pass has an error</p>";
    var inputAlertMail = document.getElementsByClassName('alert')[0]; 
    var inputAlertPass = document.getElementsByClassName('alert')[1];   

    inputMail.onfocus = function() {
        inputOnFocus(inputMail);
    }

    inputMail.onblur = function() {
        inputOnBlur(inputMail);
        validateMail();
    }

    inputPass.onfocus = function() {
        inputOnFocus(inputPass);
    }

    inputPass.onblur = function() {
        inputOnBlur(inputPass);
        validatePass();
    } 

    submitButton.onclick = function() {        
        validatePass();
        if((validateMail() && validatePass()) === true){
            window.location.href='index.html'
        }        
    }

   function validateMail(){
        var validation
        if(emailExpression.test(inputMail.value)){            
            inputMail.classList.remove('red-border');
            inputMail.classList.add('green-border');
            inputAlertMail.innerHTML = '';
            validation = true;
        }else{ 
            inputMail.classList.add('red-border');
            inputAlertMail.innerHTML = alertCostumMail; 
            validation = false;
        }
        return validation
    } 

    function validatePass(){
        var validation
        if((inputPass.value.length > 6 ) && (inputPass.value.length < 10)){
            inputPass.classList.remove('red-border');
            inputPass.classList.add('green-border');            
            inputAlertPass.innerHTML = '';
            validation = true;
        }else{ 
            inputPass.classList.remove('green-border');
            inputPass.classList.add('red-border');
            inputAlertPass.innerHTML = alertCostumPass; 
            validation = false;
        }
        return validation
    }
}