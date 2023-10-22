const toggler_btn = document.querySelector('.toggler-button');
const navBar = document.querySelector('.nav-bar');
const right = document.querySelector('.right');

toggler_btn.addEventListener('click', () => {
  toggler_btn.classList.toggle('active');
  right.classList.toggle('active')
})