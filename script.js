// Banner typing effect
const typedText = "I am the protagonist of my own story. When we believe in ourselves, everything is possible.";
let i = 0;
function typeEffect() {
  if(i < typedText.length){
    document.getElementById('typed-text').innerHTML += typedText.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Dark Mode
document.getElementById('darkModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Menu toggle (mobile)
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Carousel
let index = 0;
function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const cardWidth = document.querySelector('.card').offsetWidth + 20;
  index += direction;
  const maxIndex = document.querySelectorAll('.card').length - Math.floor(carousel.offsetWidth / cardWidth);
  if(index < 0) index = 0;
  if(index > maxIndex) index = maxIndex;
  carousel.style.transform = translateX(-${index * cardWidth}px);
}

// Modal
function openModal(title, text) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-text').innerText = text;
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() { document.getElementById('modal').style.display = 'none'; }

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert(Message sent! Thank you, ${document.getElementById('name').value});
  this.reset();
});

// Scroll animation
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('show');
  });
});
