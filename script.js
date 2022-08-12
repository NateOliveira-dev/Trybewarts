const login = document.getElementById('input-login');
const password = document.getElementById('input-senha');
const enter = document.getElementById('btn-entrar');
const a = 'evaluation-form';

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

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function decrement() {
  const textLength = textarea.value.length;
  counter.innerHTML = 500 - textLength;
}

textarea.addEventListener('keyup', decrement);

function nameLastname() {
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const infos = document.getElementById('infos');

  infos.innerText = `${firstName} ${lastName}`;
}

function getEmail() {
  const email = document.getElementById('input-email').value;
  const emailValue = document.getElementById('email');

  emailValue.innerText = `${email}`;
}

function getHouse() {
  const house = document.getElementById('house').value;
  const houseValue = document.getElementById('casa');
  houseValue.innerText = `${house}`;
}

function getFamily() {
  const form = document.getElementById(a);
  const family = document.getElementById('familia');
  family.innerText = form.family.value;
}

function getSubject() {
  const subject = document.querySelectorAll('.subject');
  const subjectValue = document.getElementById('conteudo');
  let paragraph = '';

  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      paragraph += `${subject[i].value}, `;
    }
  }
  subjectValue.innerText = paragraph;
  paragraph = paragraph.substring(0, paragraph.length - 1);
}

function getEvaluation() {
  const form = document.getElementById(a);
  const evaluationValue = document.getElementById('avaliacao');

  evaluationValue.innerText = form.rate.value;
}

function getComment() {
  const textareaValue = document.getElementById('textarea').value;
  const commentValue = document.getElementById('comentario');

  commentValue.innerText = `${textareaValue}`;
}

submit.addEventListener('click', (event) => {
  const form = document.getElementById(a);
  form.style.display = 'none';
  event.preventDefault();
  nameLastname();
  getFamily();
  getEmail();
  getHouse();
  getSubject();
  getEvaluation();
  getComment();
});
