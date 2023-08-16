export async function getTracks() {
  const response = await fetch('https://painassasin.online/catalog/track/all/');
  const data = await response.json();
  if(!response.ok) {
    throw new Error('Ошибка сервера')
  }
  return data;
}
