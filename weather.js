class Weather {

  constructor(city, state) {
    this.apiKey = config.API_KEY;
    this.city = city;
    this.country = country;
  }

  //Fetching Weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  //Change the Weather Location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }

}