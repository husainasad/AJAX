const xhr = new XMLHttpRequest();
const url ='https://randomuser.me/api/';
console.log(xhr);
 
xhr.onreadystatechange = function(){
  //console.log(`State ${xhr.readyState}`);
  //console.log(xhr.responseText);
  if(xhr.readyState === 4 && xhr.status ===200){
    //console.log(xhr.responseText);
    const json = JSON.parse(xhr.responseText);
    console.log(json.results[0].name);
    const person = json.results[0].name;
    const div = document.createElement('div');
    div.textContent = `Hello ${person.title} ${person.first} ${person.last}`;
    document.body.append(div);
  }
}
 
xhr.open('GET',url);
xhr.send();