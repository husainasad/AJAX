(function () {
  const url = 'https://script.google.com/macros/s/AKfycbzUcUVn99AkTK1rxxjCd-oU_707N3s23p9OriMaMzCYunuacydj/exec';
  const div = document.createElement('div');
  document.body.append(div);
  const payload = {
    message: 'Hello User', 
    id: 1000
  };
  sayHello();
 
  function sayHello() {
    const xHR = new XMLHttpRequest();
    xHR.open('POST', url);
    xHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xHR.onreadystatechange = () => {
      if (xHR.readyState === 4 && xHR.status === 200) {
        console.log(xHR.responseText);
        const data = JSON.parse(xHR.responseText);
        console.log(data.message);
        div.textContent = data.message;
      }
    }
    xHR.send(JSON.stringify(payload));
  }
})();