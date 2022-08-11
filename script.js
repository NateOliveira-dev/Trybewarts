const login = document.getElementById('input-login');
const password = document.getElementById('input-senha');
const submit = document.getElementById('btn-entrar');

submit.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com'
  && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
