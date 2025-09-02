const loginForm = document.getElementById('login-form');
const hardcodedUsername = 'admin';
const hardcodedPassword = 'password';

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === hardcodedUsername && password === hardcodedPassword) {
        // Store login state
        localStorage.setItem('loggedIn', true);
        window.location.href = 'superheroes.html';
    } else {
        alert('Invalid username or password');
    }
});