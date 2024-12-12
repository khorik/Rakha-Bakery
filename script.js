// script.js
const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const showPasswordSpan = document.querySelector('.show-password');

showPasswordSpan.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordSpan.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    showPasswordSpan.textContent = 'Show';
  }
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Submit event triggered!');
  const username = document.getElementById('username').value.trim();
  const password = passwordInput.value.trim();

  if (username === 'admin' && password === '123') {
    // Login successful, redirect to admin dashboard
    window.location.href = 'admin-dashboard.html';
  } else {
    alert('Invalid username or password');
  }
});