// @todo 1: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo 2: DOM узлы
const cardList = document.querySelector(".places__list");

// @todo 3: Функция создания карточки

/**
 * принимает в аргументах данные одной карточки
 * и функцию-колбэк для удаления,
 * а возвращает подготовленный к выводу элемент карточки
 *
 * @param {object} cardTitle заголовок карточки (данные карточки)
 * @param {object} cardImage картинка карточки (данные карточки)
 * @returns {object} возвращает подготовленный к выводу элемент карточки
 */
function createCard(cardTitle, cardImage, deletedCard) {
  //Клонируем шаблон
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  //Установливаем значение вложенных элементов
  const cardImg = cardElement.querySelector(".card__image");
  cardElement.querySelector(".card__title").textContent = cardTitle;
  cardImg.alt = cardTitle;
  cardImg.src = cardImage;
  //добавляем к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", (evt) => {
    deletedCard(evt);
  });
  return cardElement;
}

// @todo 4: Функция удаления карточки

/*Функцию удаления карточки реализуем отдельно
и передаём в функцию создания карточки,
где она будет вызвана из обработчика клика по иконке. */

const deleteCard = (event) => {
  const item = event.target.closest(".card");
  item.remove();
};

// @todo 5: Вывести карточки на страницу

//Используя функцию createCard, выводим все карточки из массива на страницу в элемент .places__list.
initialCards.forEach(function ({ name, link }) {
  const cardData = createCard(name, link, deleteCard);
  cardList.append(cardData);
});
