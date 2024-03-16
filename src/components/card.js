// в файле card.js описаны функции для работы с карточками:
// функция создания карточки, функции-обработчики событий удаления
// и лайка карточки;

import { sendLike, deleteLike, removeCard } from "./index.js";

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

// функция создания карточки
function createCard(item, { deleteCard, openImage, likeCard }) {
  const template = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const cardElementCopy = template.cloneNode(true);
  const likeButton = cardElementCopy.querySelector(".card__like-button");
  const likeAmount = cardElementCopy.querySelector(".card__likes");
  likeAmount.textContent = item.likes.length;

  // const owner = card.owner_id === userId;

  const cardTitle = cardElementCopy.querySelector(".card__title");
  const cardImage = cardElementCopy.querySelector(".card__image");
  cardImage.src = item.link; // добавляем данные
  cardTitle.textContent = item.name; // добавляем заголовок
  cardImage.alt = item.name; // добавляем данные

  const deleteBtn = cardElementCopy.querySelector(".card__delete-button");
  deleteBtn.addEventListener("click", deleteCard);

  cardImage.addEventListener("click", openImage);

  likeButton.addEventListener("click", (event) => {
    likeCard(event, item._id);
  });

  return cardElementCopy; //возвращаем карточку
}

// Функция удаления карточки
function deleteCard(card) {
  const cardToRemove = card.target.closest(".card"); // target для элемента на котором произошло событие, closest - ищет родителя
  removeCard(card, card._id);
  cardToRemove.remove(); // удаляем карточку
}

// функция лайка карточки
function likeCard(evt, id) {
  const likeButton = evt.target;
  const likesAmount = likeButton.nextElementSibling;

  if (!likeButton.classList.contains("card__like-button_is-active")) {
    sendLike(id).then((card) => {
      likesAmount.textContent = card.likes.length;
      likeButton.classList.toggle("card__like-button_is-active");
    });
  } else {
    deleteLike(id).then((card) => {
      likesAmount.textContent = card.likes.length;
      likeButton.classList.toggle("card__like-button_is-active");
    });
  }
}

export { likeCard, deleteCard, createCard };
