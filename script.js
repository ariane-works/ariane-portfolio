// Banner typing effect
const typedText = "I am the protagonist of my own story. When we believe in ourselves, everything is possible.";
let i = 0;
function typeEffect() {
  if (i < typedText.length) {
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

// Carousel - LÓGICA CORRIGIDA
let index = 0;
function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 20; // 20px de margem
  const totalCards = cards.length;
  const cardsInView = Math.floor(carousel.offsetWidth / cardWidth);

  index += direction;

  // Garante que o índice não seja menor que 0 ou maior que o limite
  if (index < 0) {
    index = 0;
  } else if (index > totalCards - cardsInView) {
    index = totalCards - cardsInView;
  }
  
  // Previne que o carrossel se mova se já estiver no limite
  if (index >= 0 && index <= totalCards - cardsInView) {
    carousel.style.transform = translateX(-${index * cardWidth}px);
  }
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
