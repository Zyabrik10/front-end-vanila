const modalUser = document.querySelector('.user-profile-modal');
const headerUser = document.querySelector('.header-user');

function closeOnKeydown({ key }) {
  if (key === 'Escape') {
    toggleModalWindow('.user-profile-modal');
  }
}

function toggleModalWindow(selector) {
  const modalWindow = document.querySelector(selector);

  if (!Array.from(modalWindow.classList).find(e => e === 'active')) {
    window.addEventListener('keydown', closeOnKeydown);
    modalWindow.classList.add('active');
  } else {
    window.removeEventListener('keydown', closeOnKeydown);
    modalWindow.classList.remove('active');
  }
}

modalUser.addEventListener('mousedown', function ({ currentTarget, target }) {
  if (currentTarget === target) {
    toggleModalWindow('.user-profile-modal');
  }
});
headerUser.addEventListener('click', function ({ currentTarget, target }) {
  toggleModalWindow('.user-profile-modal');
});
