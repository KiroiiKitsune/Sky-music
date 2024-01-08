export async function addLike({ token, id }) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (response.status === 401) throw new Error('Протухший токен');
  return await response.json();
}

export async function disLike({ token, id }) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (response.status === 401) throw new Error('Протухший токен');
  return await response.json();
}
