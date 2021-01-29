const url = 'https://randomuser.me/api/';
const btn = document.createElement('button');
btn.innerHTML = "CLICK ME";
document.body.append(btn);
btn.addEventListener('click', output);
 
function output() {
  fetch(url).then((rep) => {
    return rep.json();
  }).then(data => {
    const person = data.results[0].name;
    console.log(person);
    btn.innerHTML = `${person.title} ${person.first} ${person.last}`;
  }).catch(error => console.log('error'));
}