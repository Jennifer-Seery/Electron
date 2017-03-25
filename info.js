const url = 'https://api.myjson.com/bins/tudnb';
const options= {method:null,headers:{name:null,value:null}};

function fetch(url, options) 
{
  return new Promise(function(resolve, reject) 
  {
    var Req = new XMLHttpRequest();
    Req.open("GET", url); 
    Req.onload = function () {
      if (Req.status >= 200 && Req.status < 300) {
        resolve(JSON.parse(Req.response));
      } else {
        reject({
          status: Req.status,
          statusText: Req.statusText
        });
      }
    };
    Req.send();
  }); 
}


var UserInput = document.getElementById('userid');
Username = UserInput.value;
var PasswordInput = document.getElementById('pswrd');
Password = PasswordInput.value;
var toDo = [];

function check(form)
{  
  

  fetch(url,options)
  .then(function(data)
  {
     
      for(var i=0;i<data.length;i++){
        toDo=data;
      }
  
      for(var i=0; i<toDo.length;i++){
        console.log(toDo[i].name);
      }
 
      for(var i=0;i<data.length;i++){
        if(toDo[i].name==form.userid.value  && toDo[i].password == form.pswrd.value ){
        location.replace("file://C:/Electron/main.html");
      }
	  } 
      /*for(var i=0; i<data.length;i++){
        if(form.userid.value == toDo[i].name){
          if(toDo[i].trigger1 === false ){
            document.getElementById("myAudio").play(); 
			alert("Farts");
          }
          
        }
      }*/
        
  
})

.catch(function(err)
{
  console.error(err);  
});

}     


