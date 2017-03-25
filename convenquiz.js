var counter =0;

function change()
{
  
  
  switch(counter){
      
    case 0:
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "true" || answer == "True"){
       counter = 1;
     }
    case 1:
      var subHeading = document.getElementById('answer');
      subHeading.innerHTML = " ";
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "True or False. Code grouping is best practice.";
      var content = document.getElementById('Examples');
      content.innerHTML = " Similar tags : <html></html>" ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "true" || answer == "True"){
       counter = 2;
     }
	  break;
       
  case 2:
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "True or False. Indentation isnt important.";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "false" || answer == "False"){
       counter = 3;
     }
	  
	  break;
  case 3:
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "True or False. Lines should be nice and long.";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "false" || answer == "False"){
       counter = 4;
     }
      
	  break;
  case 4:
	  location.replace("file://C:/Electron/congrats.html")
	  break;
      
}
	  
}	



