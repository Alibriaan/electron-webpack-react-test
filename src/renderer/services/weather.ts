export default function getZhytomyrWeather() {
  return Promise.resolve({
    data: {
      coord: {
        lon: 28.6767,
        lat: 50.2649,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      base: 'stations',
      main: {
        temp: 285.31,
        feels_like: 283.78,
        temp_min: 285.31,
        temp_max: 285.31,
        pressure: 1032,
        humidity: 46,
        sea_level: 1032,
        grnd_level: 1004,
      },
      visibility: 10000,
      wind: {
        speed: 7.76,
        deg: 137,
        gust: 12.22,
      },
      clouds: {
        all: 0,
      },
      dt: 1633508072,
      sys: {
        country: 'UA',
        sunrise: 1633493580,
        sunset: 1633534414,
      },
      timezone: 10800,
      id: 686967,
      name: 'Zhytomyr',
      cod: 200,
    },
  });
}
