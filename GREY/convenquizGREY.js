var counter =0;

//Validating User Input
function change()
{
   var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "true" || answer == "True"){
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
      subHeading.innerHTML = "True or False. Code grouping is best practice.";
      var content = document.getElementById('Examples');
      content.innerHTML = " Similar tags : <html></html>" ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "true" || answer == "True"){
       counter = 2;
     }else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
	  break;
       
  case 2:
	  var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "True or False. Indentation isnt important.";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "false" || answer == "False"){
       counter = 3;
     }else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
	  
	  break;
  case 3:
	  var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "True or False. Lines should be nice and long.";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "false" || answer == "False"){
       counter = 4;
     }else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
      
	  break;
  case 4:
	  location.replace("file://C:/Electron/GREY/congratGREY.html")
	  break;
      
}
	  
}	

// Displaying Correct Hint
function hint(){
	
	switch(counter){
	case 0:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Is it easier to read something when its nice and neat ?";
      break;
    case 1:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Is it easier to see what something is when its all grouped in a pile?";
	  break;
  case 2:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Is it boring to read thousands of lines of code?";
	  break;
  case 3:
	 var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Is it easier to read long lines or short lines ?";
	  break;
  case 4:
	  location.replace("file://C:/Electron/GREY/congratGREY.html")
	  break;
	
	
}

}

