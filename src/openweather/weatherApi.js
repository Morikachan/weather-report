const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b5d50f19d48c01a3eb81e79fb9ec7ed2';

const weatherApi = name => {
  return fetch(
    `${API_URL}?q=${name}&lang=en&units=metric&appid=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Sorry, ${name} not found!`));
  });
};

export default weatherApi;
