var counter =0;

function change()
{
  
  
  switch(counter){
      
    case 0:
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<style>"){
       counter = 1;
     }
    case 1:
      var subHeading = document.getElementById('answer');
      subHeading.innerHTML = " ";
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "What element is used to set background color ?";
      var content = document.getElementById('Examples');
      content.innerHTML = " Similar tags : <html></html>" ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "background-color"){
        counter=2;
      }
	  break;
       
  case 2:
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "What element is used to set the alignment of text ?";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "text-align"){
        counter=3;
      }
	  
	  break;
  case 3:
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "What element is used to change font ?'";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "font-family"){
        counter=4;
      }
      
	  break;
  case 4:
	  location.replace("file://C:/Electron/congrats.html")
	  break;
      
}
	  
}	



