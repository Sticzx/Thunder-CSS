function toggleForm(isSignUp) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginButton = document.querySelector('.toggle-buttons button:nth-child(1)');
    const signUpButton = document.querySelector('.toggle-buttons button:nth-child(2)');

    if (isSignUp) {
        loginForm.classList.add('slide-out-to-left');
        registerForm.classList.add('slide-in-from-right');
        loginForm.classList.remove('slide-in-from-left', 'slide-in-from-right', 'slide-out-to-right');
        registerForm.classList.remove('slide-out-to-left', 'slide-out-to-right');
        setTimeout(() => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            loginForm.classList.remove('slide-out-to-left');
        }, 500);
        signUpButton.classList.add('active');
        loginButton.classList.remove('active');
    } else {
        loginForm.classList.add('slide-in-from-left');
        registerForm.classList.add('slide-out-to-right');
        loginForm.classList.remove('slide-out-to-left', 'slide-out-to-right', 'slide-in-from-right');
        registerForm.classList.remove('slide-in-from-left', 'slide-in-from-right');
        setTimeout(() => {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            registerForm.classList.remove('slide-out-to-right');
        }, 500);
        loginButton.classList.add('active');
        signUpButton.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.toggle-buttons button:nth-child(1)');
    const registerButton = document.querySelector('.toggle-buttons button:nth-child(2)');
    
    loginButton.classList.add('active');
    registerButton.classList.add('inactive');
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.add(entry.target.dataset.animation);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});