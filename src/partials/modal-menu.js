'use strict'

const openBtn = document.getElementById('openBurgerMenu');
const closeBtn = document.getElementById('closeBurgerMenu');
const backdrop = document.getElementById('modalBrg'); // исправлен id

openBtn.addEventListener('click', () => backdrop.classList.remove('is-hidden'));
closeBtn.addEventListener('click', () => backdrop.classList.add('is-hidden'));

const openBtn1 = document.getElementById('openMenuPrice1');
const closeBtn1 = document.getElementById('closePriceMenu1');
const backdrop1 = document.getElementById('backdropPrice1');

closeBtn1.addEventListener('click', () => {
  backdrop1.classList.remove('is-open');
});

openBtn1.addEventListener('click', () => {
  backdrop1.classList.add('is-open');
});

const openBtn2 = document.getElementById('openMenuPrice2');
const closeBtn2 = document.getElementById('closePriceMenu2');
const backdrop2 = document.getElementById('backdropPrice2');

closeBtn2.addEventListener('click', () => {
  backdrop2.classList.remove('is-open');
});

openBtn2.addEventListener('click', () => {
  backdrop2.classList.add('is-open');
});

const openBtn3 = document.getElementById('openMenuPrice3');
const closeBtn3 = document.getElementById('closePriceMenu3');
const backdrop3 = document.getElementById('backdropPrice3');

closeBtn3.addEventListener('click', () => {
  backdrop3.classList.remove('is-open');
});

openBtn3.addEventListener('click', () => {
  backdrop3.classList.add('is-open');
});