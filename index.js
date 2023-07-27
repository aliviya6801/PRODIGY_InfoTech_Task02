const a = document.querySelector('.calcu');
const b = document.querySelector('.clear');
const c = document.querySelector('.equal');
const d = document.querySelectorAll('.num');
const e = document.querySelectorAll('.op');
const f = document.querySelector('.dott');
const g = document.querySelector('.zero');

d.forEach(button => {
  button.addEventListener('click', () => {
    a.value += button.value;
  });
});

f.addEventListener('click', () => {
  if (!a.value.includes('.')) {
    a.value += f.value;
  }
});

g.addEventListener('click', () => {
  if (a.value !== '0' && !a.value.includes('.')) {
    a.value += g.value;
  }
});

e.forEach(button => {
  button.addEventListener('click', () => {
    a.value += button.value;
  });
});

b.addEventListener('click', () => {
  a.value = '0';
});

c.addEventListener('click', () => {
  try {
    a.value = eval(a.value);
  } catch (error) {
    a.value = 'Error';
  }
});
