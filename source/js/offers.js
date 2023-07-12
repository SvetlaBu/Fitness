const buttonsOffers = [document.getElementById('offers-button-1'), document.getElementById('offers-button-6'), document.getElementById('offers-button-12')];
const listOffers = [document.getElementById('offers-list-1'), document.getElementById('offers-list-6'), document.getElementById('offers-list-12')];

const changeOffers = () => {
  if (buttonsOffers[0] && listOffers[0]) {
    buttonsOffers[0].addEventListener('click', () => {
      buttonsOffers[0].classList.add('offers__button--active');
      listOffers[0].classList.add('offers__list--active');

      if (buttonsOffers[1].classList.contains('offers__button--active')) {
        buttonsOffers[1].classList.remove('offers__button--active');
        listOffers[1].classList.remove('offers__list--active');
      }

      if (buttonsOffers[2].classList.contains('offers__button--active')) {
        buttonsOffers[2].classList.remove('offers__button--active');
        listOffers[2].classList.remove('offers__list--active');
      }
    });
  }

  if (buttonsOffers[1] && listOffers[1]) {
    buttonsOffers[1].addEventListener('click', () => {
      buttonsOffers[1].classList.add('offers__button--active');
      listOffers[1].classList.add('offers__list--active');

      if (buttonsOffers[0].classList.contains('offers__button--active')) {
        buttonsOffers[0].classList.remove('offers__button--active');
        listOffers[0].classList.remove('offers__list--active');
      }

      if (buttonsOffers[2].classList.contains('offers__button--active')) {
        buttonsOffers[2].classList.remove('offers__button--active');
        listOffers[2].classList.remove('offers__list--active');
      }
    });
  }

  if (buttonsOffers[2] && listOffers[2]) {
    buttonsOffers[2].addEventListener('click', () => {
      buttonsOffers[2].classList.add('offers__button--active');
      listOffers[2].classList.add('offers__list--active');

      if (buttonsOffers[0].classList.contains('offers__button--active')) {
        buttonsOffers[0].classList.remove('offers__button--active');
        listOffers[0].classList.remove('offers__list--active');
      }

      if (buttonsOffers[1].classList.contains('offers__button--active')) {
        buttonsOffers[1].classList.remove('offers__button--active');
        listOffers[1].classList.remove('offers__list--active');
      }
    });
  }
};

export {changeOffers};
