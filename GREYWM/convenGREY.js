var counter =0 ;  

//Change slide forward
function change()
{
  counter++;
  switch(counter){
    case 1:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "What are the coding best practice ?";
      var content = document.getElementById('content');
      content.innerHTML = 'Keeping  your code neat and tidy is very important. It allows the writer and others to be able to read it with ease. There are a couple of different things we can do to make our code better. Lets have a look';
      document.getElementById('comp').src = "http://i65.tinypic.com/saw7te.png"
	  break;
  case 2:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Identation";
      var content = document.getElementById('content');
      content.innerHTML = 'This can be a tricky one to understand. Indentation is a huge part of code readablilty. Indentation gives the code its structure. It easily shows us what code belongs together. ';
      document.getElementById('comp').src = "http://i65.tinypic.com/saw7te.png"
	  break;
  case 3:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Code Grouping;  ";
      var content = document.getElementById('content');
      content.innerHTML = 'If we group sections of code together that are used to do the same thing it makes our code look more organised and easier to read.';
      document.getElementById('comp').src = "http://i65.tinypic.com/saw7te.png"
	  break;
  case 4:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Limit Line Length";
      var content = document.getElementById('content');
      content.innerHTML = 'Try not to have super long lines of code present. It can be hard to read and look funny ';
      document.getElementById('comp').src = "http://i65.tinypic.com/saw7te.png"
	  break;
  case 5: 
    location.replace("file://C:/Electron/GREYWM/congratGREY.html")
	   break;
  }	

}

//Change slide back
function changeBack(){
	counter--;
    switch(counter){
    case 1:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "What are the coding best practice ?";
      var content = document.getElementById('content');
      content.innerHTML = 'Keeping  your code neat and tidy is very important. It allows the writer and others to be able to read it with ease. There are a couple of different things we can do to make our code better. Lets have a look';
      document.getElementById('comp').src = "http://i65.tinypic.com/saw7te.png"
	  break;
  case 2:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Identation";
      var content = document.getElementById('content');
      content.innerHTML = 'This can be a tricky one to understand. Indentation is a huge part of code readablilty. Indentation gives the code its structure. It easily shows us what code belongs together. ';
      document.getElementById('comp').src = "http://i65.tinypic.com/saw7te.png"
	  break;
  case 3:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Code Grouping;  ";
      var content = document.getElementById('content');
      content.innerHTML = 'If we group sections of code together that are used to do the same thing it makes our code look more organised and easier to read.';
      document.getElementById('comp').src = "http://i65.tinypic.com/saw7te.png"
	  break;
  case 4:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Limit Line Length";
      var content = document.getElementById('content');
      content.innerHTML = 'Try not to have super long lines of code present. It can be hard to read and look funny ';
      document.getElementById('comp').src = "http://i65.tinypic.com/saw7te.png"
	  break;
  case 5: 
     location.replace("file://C:/Electron/GREYWM/congratGREY.html")
	  break;
  }	
	
}