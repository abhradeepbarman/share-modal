let overlay = document.querySelector('.overlay');
let shareProfileElement = document.querySelector('.shareProfile');

function openModal() {
    overlay.classList.add('active');
    shareProfileElement.classList.add('modalActive');
}

function closeModal() {
    overlay.classList.remove('active');
    shareProfileElement.classList.remove('modalActive');
}