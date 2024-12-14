const login = document.querySelector('.login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.close');

registerLink.addEventListener('click',()=> {
    login.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    login.classList.remove('active');
});

btn.addEventListener('click',()=> {
    login.classList.add('active-popup');
});

icon.addEventListener('click',()=> {
    login.classList.remove('active-popup');
});

