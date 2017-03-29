var counter =0 ;  


function change()
{
  counter++;
  switch(counter){
    case 1:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Did You Do Tutorial 1 ?";
      var content = document.getElementById('content');
      content.innerHTML = 'In this tutorial we will get into more advaned stuff ! So lets make sure you did the first tutorial !';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 2:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; img &gt;";
      var content = document.getElementById('content');
      content.innerHTML = 'This is the fun stuff ! Lets have a look how we put an image into a web page ';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 3:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; img &gt;  ";
      var content = document.getElementById('content');
      content.innerHTML = 'The image tag uses an element called src. We put a to an image after source to show which image to use. <img src="LINK GOES HERE"> ';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 4:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; a href &gt; ";
      var content = document.getElementById('content');
      content.innerHTML = 'Other wise known as a reference tag a href is used to create links to other webpages in our website.';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 5: 
     var subHeading = document.getElementById('sub-heads');
     subHeading.innerHTML = "&lt; a href &gt;";
     var content = document.getElementById('content');
     content.innerHTML = 'Like the image tag. We also use the src element to show where to link to. <a href="index.html"> </a> is an example of a reference tag';
     document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	 break;
   case 6: 
    location.replace("file://C:/Electron/GREYWM/congratGREY.html")
	   break;
}	

}

function changeBack(){
	counter--;
	switch(counter){
    case 1:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Did You Do Tutorial 1 ?";
      var content = document.getElementById('content');
      content.innerHTML = 'In this tutorial we will get into more advaned stuff ! So lets make sure you did the first tutorial !';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 2:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; img &gt;";
      var content = document.getElementById('content');
      content.innerHTML = 'This is the fun stuff ! Lets have a look how we put an image into a web page ';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 3:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; img &gt;  ";
      var content = document.getElementById('content');
      content.innerHTML = 'The image tag uses an element called src. We put a to an image after source to show which image to use. <img src="LINK GOES HERE"> ';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 4:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; a href &gt; ";
      var content = document.getElementById('content');
      content.innerHTML = 'Other wise known as a reference tag a href is used to create links to other webpages in our website.';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 5: 
     var subHeading = document.getElementById('sub-heads');
     subHeading.innerHTML = "&lt; a href &gt;";
     var content = document.getElementById('content');
     content.innerHTML = 'Like the image tag. We also use the src element to show where to link to. <a href="index.html"> </a> is an example of a reference tag';
     document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	 break;
   case 6: 
     location.replace("file://C:/Electron/GREYWM/congratGREY.html")
	  break;
}	
}