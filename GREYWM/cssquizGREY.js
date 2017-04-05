var counter =0;

//Validating User Input
function change()
{
  var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<style>"){
       counter = 1;
     }else{
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
      subHeading.innerHTML = "What element is used to set background color ?";
      var content = document.getElementById('Examples');
      content.innerHTML = " Similar tags : <html></html>" ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "background-color"){
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
      subHeading.innerHTML = "What element is used to set the alignment of text ?";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "text-align"){
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
      subHeading.innerHTML = "What element is used to change font ?'";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "font-family"){
        counter=4;
      }else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
      
	  break;
  case 4:
	  location.replace("file://C:/Electron/GREYWM/congratGREY.html")
	  break;
      
}
	  
}	

//Display User hints
function hint(){
	
	switch(counter){
	case 0:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " CSS allows us to style things.";
      break;
    case 1:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Something in the middle of background color is needed.";
	  break;
  case 2:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Something is needed to connect text and align.";
	  break;
  case 3:
	 var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = "Fonts are all part of a family.";
	  break;
  
	
}

}

