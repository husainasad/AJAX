(function () {
  const btn = document.createElement('button');
  btn.innerHTML = "CLICK ME";
  document.body.append(btn);
  btn.addEventListener('click', output);
  const vals = document.querySelector('input');
  const url = 'https://randomuser.me/api/?results=';
  const div = document.createElement('div');
  div.innerHTML = "";
  document.body.append(div);
 
  function output() {
    fetch(url + vals.value).then((rep) => rep.json()).then((data) => {
      data.results.forEach((person) => {
        updateDiv(`${person.name.first} ${person.name.last}`);
      })
    });
  }
 
  function updateDiv(val) {
    div.innerHTML += `${val}<br>`;
  }
})();