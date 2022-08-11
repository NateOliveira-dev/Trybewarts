const login = document.getElementById('input-login');
const password = document.getElementById('input-senha');
const enter = document.getElementById('btn-entrar');

enter.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com'
  && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submit = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');

agree.addEventListener('click', () => {
  if (agree.checked) {
    submit.disabled = false;
  }
});
