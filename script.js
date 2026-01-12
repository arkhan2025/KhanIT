const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

const servicesButtons = document.querySelectorAll('.services-btn');
servicesButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const dropdown = btn.nextElementSibling;
    dropdown.classList.toggle('open');
    if(dropdown.classList.contains('open')) {
      dropdown.style.display = 'flex';
    } else {
      dropdown.style.display = 'none';
    }
  });
});
