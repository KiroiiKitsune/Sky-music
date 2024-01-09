export async function getCategory({ id }) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/selection/${id}`,
    {
      method: 'GET',
    },
  );
  if (response.status === 401)
    throw new Error('Не удалось загрузить плейлист, попробуйте позже');
  return await response.json();
}

export async function getFavoriteTracks(token) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (response.status === 401) throw new Error('Токен протух');
  return await response.json();
}
