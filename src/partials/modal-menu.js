'use strict';

function bindToggle(openId, closeId, targetId, activeClass) {
  const openBtn = document.getElementById(openId);
  const closeBtn = document.getElementById(closeId);
  const target = document.getElementById(targetId);

  if (!openBtn || !closeBtn || !target) {
    return;
  }

  openBtn.addEventListener('click', () => {
    target.classList.toggle(activeClass);
  });

  closeBtn.addEventListener('click', () => {
    target.classList.toggle(activeClass);
  });
}

bindToggle('openBurgerMenu', 'closeBurgerMenu', 'modalBrg', 'is-hidden');
bindToggle('openMenuPrice1', 'closePriceMenu1', 'backdropPrice1', 'is-open');
bindToggle('openMenuPrice2', 'closePriceMenu2', 'backdropPrice2', 'is-open');
bindToggle('openMenuPrice3', 'closePriceMenu3', 'backdropPrice3', 'is-open');
