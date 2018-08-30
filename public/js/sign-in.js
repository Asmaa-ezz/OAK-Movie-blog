
const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorLabel = document.getElementById('alert');
const sign_in = document.getElementsByTagName('a')[0];
const Progress = document.getElementsByClassName('Progress')[0];


//Regex For Validation
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const usernameValid = /^[-\w\.\_]{1,50}$/;

btn.addEventListener('click', () => {
    // Progress.setAttribute('style', 'display:block');

    errorLabel.textContent = '';
    if (vaild()) {
        login();
    } else {
        alert("please Check Field ");
    }

});
//Sign in button
sign_in.addEventListener('click', () => {
    window.location = '/sign_up';
})


// Login
const login = () => {
    const data = collectData();
    fetch1('/sign_in', 'POST', data, dealWithResponse);
}

//Collect Data From Inputs Fields
const collectData = () => {
    return {
        "username": username.value.trim(),
        "password": password.value.trim()
    }

}
// Validation username
const checkUsername = (str) => {
    if (usernameValid.test(str)) {
        return true;
    } else {
        return false;
    }

}

// Validation all field is not empty
const checkField = () => {
    if (username.value.trim() && password.value.trim())
        return true;

    return false;
}

// Check Every Fields 
const vaild = () => {
    return (checkField() && checkUsername(username.value.trim()));
}

//Deal With Response From Fetch
const dealWithResponse = (err, response) => {
    // Progress.setAttribute('style', 'display:none');
    if (err)
        errorLabel.textContent = err;
    else {
        if (response === '/home')
            window.location = '/home'
        else {
            errorLabel.textContent = response;

        }
    }
}
