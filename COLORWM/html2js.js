var counter =0;

//Validating user input
function change()
{
	var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<img>"){
       counter = 1;
     }
	 else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
  
  
  switch(counter){
      
    
    case 1:
	var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var subHeading = document.getElementById('answer');
      subHeading.innerHTML = " ";
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "What element is used in img elements to reference the image link ? ";
      var content = document.getElementById('Examples');
      content.innerHTML = " <'IMAGETAG LINK'> " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "src"){
        counter=2;
      }else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
	  
	  break;
       
  case 2:
  var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "What element allows links to be put into the webpage ? ";
      var content = document.getElementById('Examples');
      content.innerHTML = " <reference tag> <reference tag> " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<a href>"){
        counter=3;
      }else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
	  
	  break;
  case 3:
  var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "Create a image tag with a link called 'image.png'";
      var content = document.getElementById('Examples');
      content.innerHTML = "  " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<h1> <img src='image.png'> </h1>"){
        counter=4;
      }else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
      
	  break;
  case 4:
	  location.replace("file://C:/Electron/COLORWM/congrats.html")
	  break;
      
}
	  
}	


//Hints to be displayed
function hint(){
	
	switch(counter){
	case 0:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Its similar to the word image.";
      break;
    case 1:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Can be a called the source of the link.";
	  break;
  case 2:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Similar to the word reference.";
	  break;
  case 3:
	 var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " image tag + source";
	  break;
  
	
}

}



