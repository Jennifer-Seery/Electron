var counter =0;

function change()
{
  
  
  switch(counter){
      
    case 0:
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<html>"){
       counter = 1;
     }
    case 1:
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
      }
	  break;
       
  case 2:
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "Display the phrase 'Hello World'         in a paragraph tag. ";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<p> Hello World </p>"){
        counter=3;
      }
	  
	  break;
  case 3:
      var subHeading = document.getElementById('Questions');
      subHeading.innerHTML = "Create a heading using the h1 tag       to say 'HTML is easy'";
      var content = document.getElementById('Examples');
      content.innerHTML = " " ;
      var answer = document.getElementById('answer');
      answer = answer.value;
      if(answer == "<h1> HTML is easy </h1>"){
        counter=4;
      }
      
	  break;
  case 4:
	  location.replace("file://C:/Electron/congrats.html")
	  break;
      
}
	  
}	



