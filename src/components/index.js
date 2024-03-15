// в файле index.js описана инициализация приложения и основная логика страницы:
// поиск DOM-элементов на странице и навешивание на них обработчиков событий;
// обработчики отправки форм, функция-обработчик события открытия модального окна для редактирования профиля;
// функция открытия модального окна изображения карточки
// Также в index.js находится код, который отвечает за отображение шести карточек при открытии страницы.

import "/src/pages/index.css";
import { initialCards } from "./cards.js";
import { likeCard, deleteCard, createCard } from "./card.js";
import { openPopup, closePopup, closeByClick } from "./modal.js";

const container = document.querySelector(".places__list"); // контейнер карточек

const profileEditButton = document.querySelector(".profile__edit-button"); //кнопка редактирования
const profileAddButton = document.querySelector(".profile__add-button"); // кнопка добавления карточки
const popupEdit = document.querySelector(".popup_type_edit"); // попап редактирования профиля
const popupNewPlace = document.querySelector(".popup_type_new-card"); // попап добавления карточки
const popupCloseButtons = document.querySelectorAll(".popup__close"); // все кнопки закрытия в document

const popupImageCard = document.querySelector(".popup_type_image");

// Задача №3.1:
// Открытие и закрытие модального окна
// В проекте есть три модальных окна. Они открываются по нажатию кнопок «Редактировать» и «+» и при нажатии на картинку,
// а закрываются — при клике по крестику в правом верхнем углу:

// кнопка редактирования профиля
profileEditButton.addEventListener("click", function () {
  openPopup(popupEdit);
});

// кнопка добавления карточки
profileAddButton.addEventListener("click", function () {
  openPopup(popupNewPlace);
});

// кнопки закрытия попапов
popupCloseButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  });
});

document.addEventListener("click", closeByClick); // закрытие по оверлею

// Задача №4: Редактирование имени и информации о себе
// При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице.

// форма редактирования профиля
const formElement = document.querySelector(".popup_type_edit"); // находим форму
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

function handleFormSubmit(evt) {
  evt.preventDefault();
  // получаем значения полей
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  // куда надо вставить значения полей
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  // вставляем новые значения
  // Если пользователь закрывает модальное окно нажав на крестик, то введённые значения не сохраняются
  profileTitle.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;
}

formElement.addEventListener("submit", function (evt) {
  handleFormSubmit(evt);
  const openedPopup = document.querySelector(".popup_is-opened");
  closePopup(openedPopup);
  nameInput.value = "";
  jobInput.value = "";
});

// Задача №5: Форма добавления карточки
// Все необходимые формы уже есть в вёрстке
// Сделайте так, чтобы форма открывалась нажатием на кнопку «+»:

const formElementPicture = document.querySelector(".popup_type_new-card");
const placeNameInput = formElementPicture.querySelector(
  ".popup__input_type_card-name"
);
const linkInput = formElementPicture.querySelector(".popup__input_type_url");

// Задача №6: Добавление карточки
// Дайте пользователю возможность добавлять карточки:
// Можно написать имя карточки и дать ссылку на картинку
// Сделайте так, чтобы при клике на «Сохранить» новая карточка попадала в начало контейнера с ними.
// А диалоговое окно после добавления автоматически закрывалось и очищалась форма.
// Чтобы создавать новые карточки, добавьте обработчик событий submit, как в прошлом спринте, когда вы настраивали редактирование информации о пользователе.

function placeFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    name: placeNameInput.value,
    link: linkInput.value,
  };
  container.prepend(createCard(card, deleteCard, popupImage, likeCard));
}

formElementPicture.addEventListener("submit", function (evt) {
  placeFormSubmit(evt);
  const openedPopup = document.querySelector(".popup_is-opened");
  closePopup(openedPopup);
  placeNameInput.value = "";
  linkInput.value = "";
});

// Задача №8: Открытие попапа с картинкой
// Настройте просмотр фотографий. Пусть открываются нажатием на картинку:

function popupImage(evt) {
  popupImageCard.querySelector(".popup__image").src = evt.target.src;
  popupImageCard.querySelector(".popup__image").alt = evt.target.alt;
  popupImageCard.querySelector(".popup__caption").textContent = evt.target.alt;
  openPopup(popupImageCard);
}

// Функция добавления карточки
function addCard(event) {
  const cardToAdd = createCard(event, deleteCard, popupImage, likeCard); // вызываем функцию для отрисовки карточки
  container.prepend(cardToAdd); // добавляем готовую карточку в контейнер
}

// Вывести карточки на страницу
initialCards.forEach(addCard);
