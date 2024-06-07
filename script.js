const backDrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

backDrop.addEventListener('click', ()=>{
  mobileNav.style.display = 'none';
  backDrop.style.display = 'none';  
})

toggleButton.addEventListener('click', ()=>{
  mobileNav.style.display = 'flex';
  backDrop.style.display = 'block';
})