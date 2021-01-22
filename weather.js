class Weather {

  constructor(city, state) {
    this.apiKey = "739888dbe86939f34f601c419dc15406";
    this.city = city;
    this.state = state;
  }

  //Fetching Weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  //Change the Weather Location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

}