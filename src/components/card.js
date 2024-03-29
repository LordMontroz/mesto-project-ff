// в файле card.js описаны функции для работы с карточками:
// функция создания карточки, функции-обработчики событий удаления
// и лайка карточки;

import { sendLike, deleteLike, removeCard } from "./api.js";

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
function createCard(item, userId, { deleteCard, openImage, likeCard }) {
  const template = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const cardElementCopy = template.cloneNode(true);
  const likeButton = cardElementCopy.querySelector(".card__like-button");
  const likeAmount = cardElementCopy.querySelector(".card__likes");
  likeAmount.textContent = item.likes.length;
  const deleteBtn = cardElementCopy.querySelector(".card__delete-button");

  // отображение корзинки на своей карточке
  const owner = item.owner._id;
  if (owner != userId) {
    deleteBtn.remove();
  } else {
    deleteBtn.addEventListener("click", function (evt) {
      deleteCard(evt, item);
    });
  }

  const cardTitle = cardElementCopy.querySelector(".card__title");
  const cardImage = cardElementCopy.querySelector(".card__image");
  cardImage.src = item.link; // добавляем данные
  cardTitle.textContent = item.name; // добавляем заголовок
  cardImage.alt = item.name; // добавляем данные

  cardImage.addEventListener("click", openImage);

  // отображение активного лайка
  const myLike = item.likes.some((like) => {
    return like._id === userId;
  });

  if (myLike) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", (event) => {
    likeCard(event, item._id);
  });

  return cardElementCopy; //возвращаем карточку
}

// Функция удаления карточки
function deleteCard(evt, card) {
  const cardToRemove = evt.target.closest(".card");
  removeCard(card._id)
    .then(() => {
      cardToRemove.remove();
    })
    .catch((err) => {
      console.log(`Ошибка, не выполенено: ${err.status}`);
    });
}

// функция лайка карточки
function likeCard(evt, id) {
  const likeButton = evt.target;
  const likesAmount = likeButton
    .closest(".card__button_container")
    .querySelector(".card__likes");

  if (!likeButton.classList.contains("card__like-button_is-active")) {
    sendLike(id)
      .then((card) => {
        likesAmount.textContent = card.likes.length;
        likeButton.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => {
        console.log(`Ошибка, не выполенено: ${err.status}`);
      });
  } else {
    deleteLike(id)
      .then((card) => {
        likesAmount.textContent = card.likes.length;
        likeButton.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => {
        console.log(`Ошибка, не выполенено: ${err.status}`);
      });
  }
}

export { likeCard, deleteCard, createCard };
