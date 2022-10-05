window.onload = function() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputFirstName = document.getElementById('first-name');
    var inputLastName = document.getElementById('last-name');
    var inputEmail = document.getElementById('email');
    var inputDni = document.getElementById('dni');
    var inputDateBirth = document.getElementById('date-birth');
    var inputPhone = document.getElementById('phone');
    var inputAddress = document.getElementById('address');
    var inputPostalCode = document.getElementById('postal-code');
    var inputLocation = document.getElementById('location');
    var inputPassword = document.getElementById('password');
    var inputRepeatPassword = document.getElementById('repeat-password');
    var registerButton = document.getElementById('register-button');
    var errorFirstName = "<p>First name must have 3 or more letters</p>";
    var errorLastName = "<p>Last name must have 3 or more letters</p>";
    var errorEmail = "<p>Mail must have a valid email format</p>";
    var errorDni = "<p>DNI must have more than 7 or 8 numbers</p>";
    var errorPhone = "<p>Phone must have 10 numbers</p>";
    var errorAddress = "<p>Address at least 5 letters, numbers and a space in between</p>";
    var errorPostalCode = "<p>Postal Code must have 4 and 5 numbers</p>";
    var errorLocation = "<p>Location must have more than 3 letters</p>";
    var errorPassword = "<p>Password must have at least 8 characters</p>";
    var errorRepeatPassword = "<p>The password is not repeated correctly</p>";
    var errorEmpty = "<p>Please complete the field</p>";
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
    getValuesAndPutInForm();
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
        if (data.value.length >= allowedValue) {
            validation = true;
        }
        return  validation;
    }
    function allWords(string) {
        var allWords = true;
        for (let i = 0; i < string.length; i++) {
            if (!isNaN(parseInt(string[i]))) {
                allWords = false;
            }
        }
        return allWords;
    }
    function hasNum(string) {
        var res = false;
         for(let i = 0; i < string.length; i++) {
            if (!isNaN(parseInt(string[i]))) {
                res = true;
            }
        }
        return res
    }
    function hasNumAndWord(string) {
        var isNum = false;
        var isWord = false;
        var result;
        for(let i = 0; i < string.length; i++) {
            if (isNaN(parseInt(string[i]))) {
               isWord = true;
            }
        }
        for(let i = 0; i < string.length; i++) {
            if (!isNaN(parseInt(string[i]))) {
                isNum = true;
            }
        }
        result = isNum && isWord;
        return result;
    }
    function validateAllNums(string) {
        var allNums = true;
        for (let i = 0; i < string.length; i++) {
            if (isNaN(parseInt(string[i]))) {
                allNums = false;
            }
        }
        return allNums;
    }
    function inputEmpty(data) {
        return data.value.length === 0;
    }
    function changDob() {
        var year = inputDateBirth.value.substring(0, 4);
        var month = inputDateBirth.value.substring(5, 7);
        var day = inputDateBirth.value.substring(8);
        var newDob = month + '/' + day + '/' + year;
        return newDob;
    }
    function showModal(data) {
        modalContent = document.getElementsByClassName('modal-content')[0];
        modal = document.getElementsByClassName('msg-modal')[0];
        modalContent.style.display = 'flex';
        modal.innerHTML = data;
    }
    function validateName(data) {
        var validation;
        var resultallWords = allWords(data.value);
        var resultValidateStringLength = validateStringLength(data,3);
        var isEmpty = inputEmpty(data);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertFirstName.innerHTML = errorEmpty;
            validation = false;
        } else if (!resultValidateStringLength) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertFirstName.innerHTML = errorFirstName;
            validation = false;
        } else if (!resultallWords) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertFirstName.innerHTML = '<p>Your name must only have letters</p>';
            validation = false;
        } else {
            data.classList.add('green-border');
            data.classList.remove('red-border');
            paragraphAlertFirstName.innerHTML = '';
            validation = true;
        }
       return validation;
    }
    function validateLastName(data) {
        var validation;
        var resultValidateNotExistNum = allWords(data.value);
        var resultValidateStringLength = validateStringLength(data,3);
        var isEmpty = inputEmpty(data);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertLastName.innerHTML = errorEmpty;
            validation = false;
        } else if (!resultValidateStringLength) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertLastName.innerHTML = errorLastName;
            validation = false;
       } else if (!resultValidateNotExistNum) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertLastName.innerHTML = '<p>Your last name must only have letters</p>';
            validation = false;
       } else {
            data.classList.add('green-border');
            data.classList.remove('red-border');
            paragraphAlertLastName.innerHTML = '';
            validation = true;
       }
       return validation;
    }
    function validateEmail(data) {
        var validation;
        var isEmpty = inputEmpty(data);
        var isEmail = emailExpression.test(data.value);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertEmail.innerHTML = errorEmpty;
            validation = false;
        } else if (!isEmail) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertEmail.innerHTML = errorEmail;
            validation = false;
        } else {
            data.classList.remove('red-border');
            data.classList.add('green-border');
            paragraphAlertEmail.innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function validateDni(data) {
        var validation;
        var stringLength = data.value.length;
        var resultValidateStringLength = stringLength === 7 || stringLength === 8;
        var resultValidateAllnums = validateAllNums(data.value);
        var isEmpty = inputEmpty(data);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertDni.innerHTML = errorEmpty;
            validation = false;
        } else if (!resultValidateStringLength){
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertDni.innerHTML = errorDni;
            validation = false;
        } else if (!resultValidateAllnums) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertDni.innerHTML = '<p>Your DNI must only have numbers</p>';
            validation = false;
        } else {
            data.classList.add('green-border');
            data.classList.remove('red-border');
            paragraphAlertDni.innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function validateDateBirth(data) {
        var validation;
        var isEmpty = inputEmpty(data);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertDateBirth.innerHTML = errorEmpty;
            validation = false;
        } else {
            data.classList.add('green-border');
            data.classList.remove('red-border');
            paragraphAlertDateBirth.innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function validatePhone(data) {
        var stringLength = data.value.length;
        var resultValidateStringLength = stringLength === 10;
        var resultValidateAllNums = validateAllNums(data.value);
        var isEmpty = inputEmpty(data);
        var validation;
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertPhone.innerHTML = errorEmpty;
            validation = false;
        } else if (!resultValidateStringLength) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertPhone.innerHTML = errorPhone;
            validation = false;
        } else if (!resultValidateAllNums) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertPhone.innerHTML = '<p>Your phone must only have numbers</p>';
            validation = false;
        } else {
            data.classList.add('green-border');
            data.classList.remove('red-border');
            paragraphAlertPhone.innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function validateAddress(data) {
        var validation;
        var resulthasNumAndWord = hasNumAndWord(data.value);
        var checkSpace = data.value.indexOf(' ');
        var isEmpty = inputEmpty(data);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertAddress.innerHTML = errorEmpty;
            validation = false;
        } else if (!resulthasNumAndWord) {
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertAddress.innerHTML = errorAddress;
            validation = false;
        } else if (!checkSpace > 0){
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertAddress.innerHTML = errorAddress;
            validation = false;
        } else {
            data.classList.add('green-border');
            data.classList.remove('red-border');
            paragraphAlertAddress.innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function validatePostalCode(data) {
        var validation = false;
        var stringLength = data.value.length;
        var checkLength = ((stringLength === 4 ) || (stringLength === 5));
        var checkAllNums = validateAllNums(data.value);
        var isEmpty = inputEmpty(data);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertPostalCode.innerHTML = errorEmpty;
            validation = false;
        } else if (!checkLength) {
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertPostalCode.innerHTML = '<p>Your postal code must only have numbers</p>';
            validation = false;
        } else if (!checkAllNums) {
           data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertPostalCode.innerHTML = errorPostalCode;
            validation = false;
        } else {
             data.classList.remove('red-border');
            data.classList.add('green-border');
            paragraphAlertPostalCode.innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function validateLocation(data) {
        var stringLength = data.value.length;
        var resultValidateStringLength = stringLength > 3;
        var isEmpty = inputEmpty(data);
        var ResultHasNum = hasNum(data.value);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertLocation.innerHTML = errorEmpty;
            validation = false;
        } else if (!resultValidateStringLength) {
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertLocation.innerHTML = errorLocation;
            validation = false;
        } else if (ResultHasNum) {
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertLocation.innerHTML = '<p>Your location must only have letters</p>';
            validation = false;
        } else {
            data.classList.remove('red-border');
            data.classList.add('green-border');
            paragraphAlertLocation.innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function validatePass(data) {
        var resultValidateStringLength = validateStringLength(data,8);
        var resulthasNumAndWord = hasNumAndWord(data.value);
        var validation;
        var isEmpty = inputEmpty(data);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertPassword.innerHTML = errorEmpty;
            validation = false;
        } else if (!resultValidateStringLength) {
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertPassword.innerHTML = errorPassword;
            validation = false;
        } else if (!resulthasNumAndWord) {
             data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertPassword.innerHTML = '<p>Your password most have letters and numbers</p>';
            validation = false;
        } else {
            data.classList.remove('red-border');
            data.classList.add('green-border');
            paragraphAlertPassword.innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function validateRepeatPassword(data) {
        var validation;
        var isEmpty = inputEmpty(data);
        if (isEmpty) {
            data.classList.add('red-border');
            data.classList.remove('green-border');
            paragraphAlertRepeatPassword.innerHTML = errorEmpty;
            validation = false;
        } else if (!(inputPassword.value === inputRepeatPassword.value)) {
            data.classList.remove('green-border');
            data.classList.add('red-border');
            paragraphAlertRepeatPassword .innerHTML = errorRepeatPassword;
            validation = false;
        } else {
            data.classList.remove('red-border');
            data.classList.add('green-border');
            paragraphAlertRepeatPassword .innerHTML = '';
            validation = true;
        }
        return validation;
    }
    function arrayValidate() {
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
        return validateForm;
    }
    function confirmFalse(array) {
        var validation = true;
        for(let i = 0; i < array.length; i++) {
            if (!array[i]) {
                validation = false;
            }
        }
        return validation;
    }
    function validateform() {
        var newDob = changDob();
        var msgError = [];
        var array = arrayValidate();
        var resultArray = confirmFalse(array);
        if (!validateName(inputFirstName)) {
            msgError.push('First name must have 3 or more letters.\n');
        }
        if (!validateLastName(inputLastName)) {
            msgError.push('Last name must have 3 or more letters.\n');
        }
        if (!validateEmail(inputEmail)) {
            msgError.push('Mail must have a valid email format.\n');
        }
        if (!validateDni(inputDni)) {
            msgError.push('DNI must have more than 7 numbers.\n');
        }
        if (!validateDateBirth(inputDateBirth)) {
            msgError.push('Date of birth must be in dd/mm/yyyy format.\n');
        }
        if (!validateAddress(inputAddress)) {
            msgError.push('Address at least 5 letters, numbers and a space in between.\n');
        }
        if (!validatePhone(inputPhone)) {
            msgError.push('Phone must have 10 numbers.\n');
        }
        if (!validatePostalCode(inputPostalCode)) {
            msgError.push('Postal Code must have 4 and 5 numbers.\n');
        }
        if (!validateLocation(inputLocation)) {
            msgError.push('Location must have more than 3.\n');
        }
        if (!validatePass(inputPassword)) {
            msgError.push('Password must have at least 8 characters,with letters and numbers.\n');
        }
        if (!validateRepeatPassword(inputRepeatPassword)) {
            msgError.push('The password is not repeated correctly\n');
        }
        if (resultArray === true){
            var newDob = changDob();
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + inputFirstName.value +
            '&lastName=' + inputLastName.value + '&email=' + inputEmail.value + '&dni=' + inputDni.value +
            '&dob=' + newDob + '&address=' + inputAddress.value + '&phone=' + inputPhone.value +
            '&zip=' + inputPostalCode.value + '&city=' + inputLocation.value + '&password=' + inputPassword.value +
            '&repeatPassword=' + inputRepeatPassword.value;
            fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success){
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
                    window.location.href='index.html';
                }
            })
            .catch(function (err) {
               return err;
            })
        } else {
            alert('There are errors in the form: \n' + msgError.join(""));
            msgError = [];
        }
    }
    function getValuesAndPutInForm() {
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

