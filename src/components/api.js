const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-8",
  headers: {
    authorization: "5b217c83-6a50-4543-a844-91ed954409e0",
    "Content-Type": "application/json",
  },
};

// функция проверяет, что все хорошо
function checkResponse(data) {
  if (data.ok) {
    return data.json();
  }
  return Promise.reject(`Ошибка: ${data.status}`);
}

// запрос GET: Вывод карточек на страницу
const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkResponse);
};

// запрос GET: Загрузка информации о пользователе с сервера
const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkResponse);
};

const setProfileData = (data) => {
  profileTitle.textContent = data.name;
  profileDescription.textContent = data.about;
  profileImage.style = `background-image: url('${data.avatar}')`;
};

Promise.all([getInitialCards(), getUserInfo()])
  .then(([cards, user]) => {
    cards.forEach((card) => {
      addCard(card, user._id); // отрисовали картинки
    });
    setProfileData(user);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// запрос PATCH: Редактирование профиля
const editProfile = (profile) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: profile.name,
      about: profile.about,
    }),
  }).then(checkResponse);
};

// запрос POST: Добавление новой карточки
const addNewCard = (card) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: card.name,
      link: card.link,
    }),
  }).then(checkResponse);
};

// запрос DELETE: удаление карточки
const removeCard = (card, id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

// запрос PUT: Добавляем лайк
const sendLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
};

// запрос DELETE: Убираем лайк
const deleteLike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

// запрос PATCH: Обновление аватара пользователя
const updateAvatar = (avatarUrl) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarUrl,
    }),
  }).then(checkResponse);
};

export {
  sendLike,
  deleteLike,
  removeCard,
  editProfile,
  addNewCard,
  updateAvatar,
};
