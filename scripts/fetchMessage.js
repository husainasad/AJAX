const url = './message.txt';
const btn = document.createElement('button');
btn.innerHTML = "CLICK ME";
document.body.append(btn);
btn.addEventListener('click', output);
 
function output() {
  fetch(url).then((rep) => {
    return rep.text();
  }).then(data => {
    console.log(data);
    btn.innerHTML = `${data}`;
  }).catch(error => console.log('error'));
}