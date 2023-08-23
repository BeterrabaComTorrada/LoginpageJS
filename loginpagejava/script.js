import users from './users.js';

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const errorMessage = document.getElementById('error-message');

loginButton.addEventListener('click', () => {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    errorMessage.textContent = '';

    if (!usernameValue || !passwordValue) {
        displayMessage('Preencha todos os campos.', 'error');
        return;
    }

    const user = users.find(u => u.username === usernameValue && u.password === passwordValue);

    if (user) {
        displayMessage('Login bem-sucedido!', 'success');
    } else {
        displayMessage('Credenciais inválidas.', 'error');
    }
});

function displayMessage(message, type) {
    errorMessage.textContent = message;
    errorMessage.style.color = type === 'error' ? '#e74c3c' : '#2ecc71';
}
