//конфиг
const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-8",
  headers: {
    authorization: "5b217c83-6a50-4543-a844-91ed954409e0",
    "Content-Type": "application/json",
  },
};
//Можно сделать универсальную функцию запроса с проверкой ответа, чтобы не дублировать эту проверку в каждом запросе:
function request(url, method, body) {
  return fetch(url, {
    method: method,
    headers: config.headers,
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// запрос GET: Вывод карточек на страницу
const getInitialCards = () => {
  return request(`${config.baseUrl}/cards`, "GET");
};

// запрос GET: Загрузка информации о пользователе с сервера
const getUserInfo = () => {
  return request(`${config.baseUrl}/users/me`, "GET");
};

const loadAll = () => {
  return Promise.all([getInitialCards(), getUserInfo()]);
};

// запрос PATCH: Редактирование профиля
const editProfile = (profile) => {
  return request(`${config.baseUrl}/users/me`, "PATCH", {
    name: profile.name,
    about: profile.about,
  });
};

// запрос POST: Добавление новой карточки
const addNewCard = (card) => {
  return request(`${config.baseUrl}/cards`, "POST", {
    name: card.name,
    link: card.link,
  });
};

// запрос DELETE: удаление карточки
const removeCard = (id) => {
  return request(`${config.baseUrl}/cards/${id}`, "DELETE");
};

// запрос PUT: Добавляем лайк
const sendLike = (id) => {
  return request(`${config.baseUrl}/cards/likes/${id}`, "PUT");
};

// запрос DELETE: Убираем лайк
const deleteLike = (id) => {
  return request(`${config.baseUrl}/cards/likes/${id}`, "DELETE");
};

// запрос PATCH: Обновление аватара пользователя
const updateAvatar = (avatarUrl) => {
  return request(`${config.baseUrl}/users/me/avatar`, "PATCH", {
    avatar: avatarUrl,
  });
};

export {
  sendLike,
  deleteLike,
  removeCard,
  editProfile,
  addNewCard,
  updateAvatar,
  loadAll,
  getUserInfo,
  getInitialCards,
};
