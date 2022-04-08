$('.black-bg').on('click', (e) => {
  if (e.target == document.querySelector('.black-bg')) {
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
});
