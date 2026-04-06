const modal = document.getElementById('modal_overlay');
const video = document.getElementById('videoPlayer');

function fechaModal() {
    if (modal) modal.style.display = 'none';
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Carousel functionality
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
let autoPlayInterval;

function showImage(index) {
    carouselImages.forEach(img => img.classList.remove('active'));
    carouselImages[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
    resetAutoPlay();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentIndex);
    resetAutoPlay();
}

function autoPlayCarousel() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(autoPlayCarousel, 5000);
}

// Start carousel
if (carouselImages.length > 0) {
    carouselImages[0].classList.add('active');
    autoPlayInterval = setInterval(autoPlayCarousel, 5000); // Change every 5 seconds
}

// Modal de Contato
function openContactModal() {
    const modal = document.getElementById('contact_modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeContactModal() {
    const modal = document.getElementById('contact_modal');
    const card = document.getElementById('contact_card');
    if (modal) modal.style.display = 'none';
    if (card) {
        card.classList.remove('aura');
        card.classList.remove('flipped');
    }
}

function toggleAura() {
    const card = document.getElementById('contact_card');
    if (card) {
        card.classList.toggle('flipped');
        card.classList.toggle('aura');
    }
}

function recomecarVideo() {
    if (video) {
        video.currentTime = 0;
        video.play();
    }
}

if (video) {
    video.addEventListener('ended', () => {
        fechaModal();
    });
}

// Lógica de Preview: GIF no Hover e retorno à Imagem Estática
const cards = document.querySelectorAll('.gif-hover');

cards.forEach(img => {
    // Ao passar o mouse: carrega o GIF
    img.addEventListener('mouseenter', () => {
        const gifSource = img.getAttribute('data-gif');
        if(gifSource) img.src = gifSource;
    });

    // Ao retirar o mouse: volta para a preview estática
    img.addEventListener('mouseleave', () => {
        const staticSource = img.getAttribute('data-static');
        if(staticSource) img.src = staticSource;
    });
});

// ===== Cursor Animado ao Clicar =====
// Robust cursor: create element if missing so effect works on any page
let cursorAnimation = document.getElementById('cursor-animation');
if (!cursorAnimation) {
    cursorAnimation = document.createElement('div');
    cursorAnimation.id = 'cursor-animation';
    cursorAnimation.className = 'cursor-click';
    document.body.appendChild(cursorAnimation);
}

document.addEventListener('click', (e) => {
    cursorAnimation.style.left = e.clientX + 'px';
    cursorAnimation.style.top = e.clientY + 'px';
    cursorAnimation.classList.remove('active');
    void cursorAnimation.offsetWidth; // Força reflow
    cursorAnimation.classList.add('active');
    setTimeout(() => cursorAnimation.classList.remove('active'), 2000);
});
