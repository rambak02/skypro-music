export async function getTracks() {
  const response = await fetch('https://painassasin.online/catalog/track/all/');
  const data = await response.json();
  if(!response.ok) {
    throw new Error('Ошибка сервера')
  }
  return data;
}
export function authUser(email, password) {
  return fetch("https://painassasin.online/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username: email
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 400) {
        return response.json().then((errorResponse) => {
          if (errorResponse.username) {
            throw new Error(errorResponse.username);
          }
          if (errorResponse.email) {
            throw new Error(errorResponse.email);
          }
          if (errorResponse.password) {
            throw new Error(errorResponse.password);
          }
          throw new Error("Произошла неизвестная ошибка.");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}
