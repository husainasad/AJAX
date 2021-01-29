 (function () {
  const btn = document.createElement('button');
  btn.innerHTML = "CLICK ME";
  document.body.append(btn);
  btn.addEventListener('click', output);
  const user = document.querySelector('input');
  const url = 'https://script.google.com/macros/s/AKfycbzUcUVn99AkTK1rxxjCd-oU_707N3s23p9OriMaMzCYunuacydj/exec';
 
  function output() {
    const payload = {
      message: user.value
      , counter: 1000
    };
    fetch(url, {
      method: 'POST'
      , body: JSON.stringify(payload)
    }).then((response) => response.json()).then((data) => {
      updateDiv(data.message)
    })
  }
 
  function updateDiv(val) {
    btn.innerHTML = `${val}`;
  }
})();