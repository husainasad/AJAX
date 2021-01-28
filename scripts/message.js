(function(){
  const url = 'message.txt';
  test();
  function  test(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState ===4){
        console.log(xhr.responseText);
        const div = document.createElement('div');
        div.textContent = xhr.responseText;
        document.body.append(div);
      }
    }
    
    xhr.open('GET',url);
    xhr.send();
  }
})();