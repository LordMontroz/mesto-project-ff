// в файле modal.js описаны функции для работы с модальными окнами:
// функция открытия модального окна, функция закрытия модального окна,
// функция-обработчик события нажатия Esc
// и функция-обработчик события клика по оверлею;


// Задача №3.3
// Закрытие попапа нажатием на Esc
// Дайте пользователям возможность закрывать любой попап нажатием на клавишу Esc.
// Обратите внимание что обработчик события должен добавляться при открытии окна и удаляться после закрытия.


// функция открытия модального окна
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.classList.add("popup_is-animated");
  document.addEventListener("keydown", closeEsc); // добавляем слушателя (закрытие через esc)
  return popup;
}

// функция закрытия модального окна
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeEsc); // отключяем слушателя (закрытие через esc)
}

// функция-обработчик события нажатия Esc
function closeEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}
//@ Задача №3.2: Закрытие попапа кликом на оверлей
// Дайте пользователям возможность закрывать любой попап кликом на оверлей:
// Имеется в виду, что попап закроется, если кликнуть за его пределами.

// функция-обработчик события клика по оверлею
function closeByClick(evt) {
  const popup = evt.target.closest(".popup");
  evt.stopPropagation();
  if (evt.target.classList.contains("popup")) {
    closePopup(popup);
  }
}

export { openPopup, closePopup, closeByClick };
