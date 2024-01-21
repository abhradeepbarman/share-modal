let overlay = document.querySelector('.overlay');
let shareProfileElement = document.querySelector('.shareProfile');

function openModal() {
    overlay.classList.add('active');
    shareProfileElement.classList.add('modalActive');
}

window.openModal = openModal;

function closeModal() {
    overlay.classList.remove('active');
    shareProfileElement.classList.remove('modalActive');
}

window.closeModal = closeModal;