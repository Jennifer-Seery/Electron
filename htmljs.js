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
	  document.getElementById("myAudio").play(); 
	  var _giphy = _giphy || [];_giphy.push({ id:"ehhuGD0nByYxO", w:480, h:360, clickthrough_url: "http://giphy.com/gifs/congratulations-confetti-exclamation-ehhuGD0nByYxO" });var g = document.createElement("script");g.type = "text/javascript";g.async = true;g.src = ("https:" == document.location.protocol ? "https://" : "http://") + "giphy.com/static/js/widgets/embed.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(g, s);
	  break;
      
}
	  
}	



