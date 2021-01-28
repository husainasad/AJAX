(function () {

  const zip = window.prompt("Enter your zipcode:");
  const key = window.prompt("Enter your key:");
  const url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&appid=' + key;
  getWeatherData();
 
  function getWeatherData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        console.log(data.name);
        console.log(data.weather[0].description);
        const div = document.createElement('div');
        div.textContent = `${data.name} ${data.weather[0].description}`;
        document.body.append(div);
      }
    }
    xhr.open('GET', url);
    xhr.send();
  }
})();