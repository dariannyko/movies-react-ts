class ServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServerError';
  }
}

export async function getFilms(url: string) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new ServerError('Ошибка запроса');
    }
    let json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof ServerError) {
      alert(error.message);
    } else {
      alert(error);
    }
  }
}
