(function () {
  const btn = document.createElement('button');
  btn.innerHTML = "CLICK ME";
  document.body.append(btn);
  btn.addEventListener('click', output);
  const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
 
  function output() {
    const zip = document.querySelector('#zip');
    const key = document.querySelector('#key');
    fetch(url+ zip.value + '&appid=' + key.value).then((rep) => rep.json()).then((data) => {
      console.log(data);
      updateDiv(`${data.name} ${data.weather[0].description}`);
    })
  }
 
  function updateDiv(val) {
    btn.innerHTML = `${val}`;
  }
})();