(function () {
  const url = 'https://script.google.com/macros/s/AKfycbzUcUVn99AkTK1rxxjCd-oU_707N3s23p9OriMaMzCYunuacydj/exec';
  const div = document.createElement('div');
  document.body.append(div);
  test();
 
  function test() {
    const xhr = new XMLHttpRequest();
    const mes = 'Hello User';
    const para = '?id=10000&message=' + mes;
    xhr.onload = () => {
      console.log(xhr.responseText);
      const json = JSON.parse(xhr.responseText);
      console.log(json);
      message(json.message)
    }
    xhr.open('GET', url + para);
    xhr.send();
  }
 
  function message(output) {
    div.innerHTML += `${output}`;
  }
})();