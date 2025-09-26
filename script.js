document.addEventListener('DOMContentLoaded', () => {
    // Função para toggle do menu em dispositivos móveis
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;'; // Ícone de hambúrguer
    document.querySelector('nav').insertBefore(menuToggle, navLinks);

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Animação de digitação no Hero Section
    const typedTextElement = document.querySelector('#hero h1');
    const fullText = "Olá, eu sou a Ariane Oliveira.";
    let charIndex = 0;

    function typeEffect() {
        if (typedTextElement && charIndex < fullText.length) {
            typedTextElement.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 70); // Velocidade de digitação
        }
    }
    // Começa a animação de digitação alguns milissegundos após o carregamento da página
    setTimeout(typeEffect, 500);


    // Opcional: Implementar Dark Mode (Exemplo simples)
    // Para ter um botão de Dark Mode no header, você precisaria adicioná-lo no HTML.
    // Exemplo de botão no HTML: <button id="darkModeToggle">🌙</button>
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Salvar preferência no localStorage, se quiser
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
        // Carregar preferência do usuário ao carregar a página
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
});

// Animação de rolagem para seções
const sections = document.querySelectorAll('.content-section');

const options = {
    threshold: 0.1 // A seção se torna visível quando 10% dela entra na viewport
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Para animar apenas uma vez
        }
    });
}, options);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});
