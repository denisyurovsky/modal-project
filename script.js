'use strict';

const modalButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');

modalButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

btn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

document.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
