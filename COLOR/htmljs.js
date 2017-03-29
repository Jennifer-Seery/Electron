var counter =0;

function change()
{
  	var wrong = document.getElementById('wrongAnswer');
	  wrong.innerHTML = "    ";
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<html>"){
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
      subHeading.innerHTML = "How do we correctly close a HTML         paragraph tag ? ";
      var content = document.getElementById('Examples');
      content.innerHTML = " Similar tags : <html></html>" ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "</p>"){
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
      subHeading.innerHTML = "Display the phrase 'Hello World'         in a paragraph tag. ";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<p> Hello World </p>"){
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
      subHeading.innerHTML = "Create a heading using the h1 tag       to say 'HTML is easy'";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<h1> HTML is easy </h1>"){
        counter=4;
      }else{
		var wrong = document.getElementById('wrongAnswer');
		wrong.innerHTML = "Not quite there yet ! Keep it up ";
		}
      
	  break;
  case 4:
	  location.replace("file://C:/Electron/COLOR/congrats.html")
	  break;
      
}
	  
}	

function hint(){
	
	switch(counter){
	case 0:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Whats the name of the language we are learning ?";
      break;
    case 1:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " We add another symbol into the paragraph tag. What is that symbol?";
	  break;
  case 2:
	  var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Hello World goes between the opening and the closing tags.";
	  break;
  case 3:
	 var ans = document.getElementById('rightAnswer');
	  ans.innerHTML = "    ";
      var answer = document.getElementById('rightAnswer');
      answer.innerHTML = " Similar to the question before using h1 tags.";
	  break;
  
	
}

}



