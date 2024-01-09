export async function getToken({ email, password }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  return await response.json();
}

export async function refreshToken(token) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/refresh/',
    {
      method: 'POST',
      body: JSON.stringify({
        refresh: token,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  return await response.json();
}
