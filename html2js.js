var counter =0;

function change()
{
  
  
  switch(counter){
      
    case 0:
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<img>"){
       counter = 1;
     }
    case 1:
      var subHeading = document.getElementById('answer');
      subHeading.innerHTML = " ";
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "What element is used in img elements to reference the image link ? ";
      var content = document.getElementById('Examples');
      content.innerHTML = " Similar tags : <html></html>" ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "src"){
        counter=2;
      }
	  break;
       
  case 2:
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "What element allows links to be put into the webpage ? ";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<a href>"){
        counter=3;
      }
	  
	  break;
  case 3:
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "Create a image tage with a link called 'image.png'";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<h1> <img src='image.png'> </h1>"){
        counter=4;
      }
      
	  break;
  case 4:
	  location.replace("file://C:/Electron/congrats.html")
	  break;
      
}
	  
}	



