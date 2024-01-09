const apiAddress = "https://skypro-music-api.skyeng.tech";

export default async function getTrackAll() {
  const response = await fetch(`${apiAddress}/catalog/track/all/`, {
    method: "GET",
  });
  if (response.status !== 200)
    throw new Error("Не удалось загрузить плейлист, попробуйте позже");
  return response.json();
}

export async function getRegister({ email, username, password }) {
  const response = await fetch(`${apiAddress}/user/signup/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      username,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (response.status === 500) throw new Error("Сервер сломался");
  return response.json();
}

export async function getLogin({ email, password }) {
  const response = await fetch(`${apiAddress}/user/login/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (response.status === 500) throw new Error("Сервер сломался");
  return response.json();
}

export async function getCategory({ id }) {
  const response = await fetch(`${apiAddress}/catalog/selection/${id}`, {
    method: "GET",
  });
  if (response.status === 401)
    throw new Error("Не удалось загрузить плейлист, попробуйте позже");
  return response.json();
}

export async function getFavoriteTracks(token) {
  const response = await fetch(`${apiAddress}/catalog/track/favorite/all/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 401) throw new Error("Токен протух");
  return response.json();
}

export async function getToken({ email, password }) {
  const response = await fetch(`${apiAddress}/user/token/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  return response.json();
}

export async function refreshToken(token) {
  const response = await fetch(`${apiAddress}/user/token/refresh/`, {
    method: "POST",
    body: JSON.stringify({
      refresh: token,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  return response.json();
}

export async function addLike({ token, id }) {
  const response = await fetch(`${apiAddress}/catalog/track/${id}/favorite/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 401) throw new Error("Токен протух");
  return response.json();
}

export async function disLike({ token, id }) {
  const response = await fetch(`${apiAddress}/catalog/track/${id}/favorite/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 401) throw new Error("Токен протух");
  return response.json();
}
