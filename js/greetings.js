const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME ='hidden';
const USERNAME_KEY = "username"

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector("#todo-form").classList.remove('hidden');
    document.querySelector("#todo-list").classList.remove('hidden');  
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show others
    paintGreetings(saveUsername);
    document.querySelector("#todo-form").classList.remove('hidden');
    document.querySelector("#todo-list").classList.remove('hidden');  
}
