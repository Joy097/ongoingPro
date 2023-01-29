const username = document.getElementById('username');
const password = document.getElementById('pass')
var cc = 0;

form.addEventListener('submit', (e) => {
 e.preventDefault();

 login();
 
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

const login = () => {

const usernameValue = username.value.trim();
const passwordValue = password.value.trim();
console.log(usernameValue);

const user = localStorage.getItem(usernameValue);
console.log(user);

const data = JSON.parse(user);


if(usernameValue === ''){
    setError(username, 'Username is required');
} else{
    setSuccess(username);
    cc+=1;
}

if(passwordValue === ''){
    setError(password, 'Password is required');
} else{
    setSuccess(password);
    cc+=1;
}

if(cc ==2){
if (user == null){
    setError(username, 'Username does not exist');
}else if(usernameValue == data.username && passwordValue == data.password){
    window.location.href = 'index.html';
}else{
    setError(username, 'Password is wrong');
}
}
}


