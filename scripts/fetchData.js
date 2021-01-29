(function () {
  const url = 'https://script.google.com/macros/s/AKfycbzUcUVn99AkTK1rxxjCd-oU_707N3s23p9OriMaMzCYunuacydj/exec';
  const btn = document.createElement('button');
  btn.innerHTML = "CLICK ME";
  document.body.append(btn);
  btn.addEventListener('click', output);
  const vals = document.querySelector('input');
 
  function output() {
    const Name = window.prompt("Enter your name:");
    const para = '?name=' + Name;
    fetch(url + para).then((rep) => {
      return rep.json();
    }).then(data => {
      console.log(data.name);
      updateDiv(data.name);
    }).catch(error => console.log('error'));
  }
 
  function updateDiv(val) {
    btn.innerHTML = `Hello ${val}!`;
  }
})();