// в файле card.js описаны функции для работы с карточками:
// функция создания карточки, функции-обработчики событий удаления
// и лайка карточки;

/**
 * принимает в аргументах данные одной карточки
 * и функцию-колбэк для удаления,
 * а возвращает подготовленный к выводу элемент карточки
 *
 * @param {object} likeCard функция лайка карточки
 * @param {object} deleteCard Функция удаления карточки
 * @param {object} openImage Функция просмотра карточки
 * @returns {cardElementCopy} возвращаем карточку
 */

// @todo 3: Функция создания карточки
function createCard(item, deleteCard, openImage, likeCard) {
  // @todo 1: Темплейт карточки
  const template = document.querySelector('#card-template').content.querySelector('.card');
  const cardElementCopy = template.cloneNode(true);

  const likeButton = cardElementCopy.querySelector(".card__like-button");

  const cardTitle = cardElementCopy.querySelector(".card__title");
  const cardImage = cardElementCopy.querySelector(".card__image");
  cardImage.src = item.link; // добавляем данные
  cardTitle.textContent = item.name; // добавляем заголовок
  cardImage.alt = item.name; // добавляем данные

  const deleteBtn = cardElementCopy.querySelector(".card__delete-button");
  deleteBtn.addEventListener("click", deleteCard);

  cardImage.addEventListener("click", openImage);
  likeButton.addEventListener("click", likeCard);

  return cardElementCopy;
}

// Функция удаления карточки
function deleteCard(card) {
  const cardToRemove = card.target.closest(".card"); // target для элемента на котором произошло событие, closest - ищет родителя
  cardToRemove.remove(); // удаляем карточку
}

// Задача №7: Лайк карточки
// Сделайте так, чтобы карточки можно было лайкать:
// Если лайкнуть карточку, сердечко поменяет цвет

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export { likeCard, deleteCard, createCard };
