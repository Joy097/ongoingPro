const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass')
const password2 = document.getElementById('pass2')
var cc = 0;

form.addEventListener('submit', (e) => {
 e.preventDefault();

 validateInputs();
 
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    
}
    
const setSuccess = (element) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = '';
inputControl.classList.add('success');
inputControl.classList.remove('error');

}

const validateInputs = () => {

const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

const isValidEmail = email =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

if(usernameValue === ''){
    setError(username, 'Username is required');
} else{
    setSuccess(username);
    cc+=1;
}


if(emailValue === ''){
    setError(username, 'Email is required');
} else if(!isValidEmail(emailValue)){
    setError(email, 'Email is invalid');
}   else{
      setSuccess(email);
      cc+=1;
    
}

if(passwordValue === ''){
    setError(password, 'Password is required');
} else if(passwordValue.length < 8){
    setError(password, 'Password must be at least 8 characters');
}     else{
    setSuccess(password);
    cc+=1;
}
if(password2Value === ''){
    setError(password2, 'Please Confirm your password');
}    else if(passwordValue!== password2Value){
        setError(password2, 'Passwords do not match');
    }   else{
           setSuccess(password2);
           cc+=1;
}

if(cc === 4){
console.log(`Your Username is ${usernameValue}`)
console.log(`And Email is ${emailValue}`)

var user = {
    username: usernameValue,
    email: emailValue,
    password: passwordValue
};

var json = JSON.stringify(user);
localStorage.setItem(usernameValue, json);
}
}


