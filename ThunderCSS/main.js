function toggleForm(isRegister) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginButton = document.querySelector('.toggle-buttons button:nth-child(1)');
    const registerButton = document.querySelector('.toggle-buttons button:nth-child(2)');

    if (isRegister) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        loginButton.classList.remove('active');
        loginButton.classList.add('inactive');
        registerButton.classList.remove('inactive');
        registerButton.classList.add('active');
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginButton.classList.remove('inactive');
        loginButton.classList.add('active');
        registerButton.classList.remove('active');
        registerButton.classList.add('inactive');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.toggle-buttons button:nth-child(1)');
    const registerButton = document.querySelector('.toggle-buttons button:nth-child(2)');
    
    loginButton.classList.add('active');
    registerButton.classList.add('inactive');
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('nav ul');

    burgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
