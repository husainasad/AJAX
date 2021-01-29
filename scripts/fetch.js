const url ='https://randomuser.me/api/';
 
test0();
 
function test0(){
  fetch(url).then((rep)=>{
  if(!rep.ok){
    console.log('error');
  }else{
    console.log(rep);
  }
  return rep.json();
  }).then( data=>{
    console.log(data);
  }).catch(error => console.log('error'));
}