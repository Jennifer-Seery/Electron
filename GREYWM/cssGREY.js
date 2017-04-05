var counter =0 ;  


//Change slide forward
function change()
{
  counter++;
  switch(counter){
    case 1:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "What is CSS ? ";
      var content = document.getElementById('content');
      content.innerHTML = 'CSS is used for styling web pages. It makes them look nice and brings color into them.';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 2:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; style &gt;&lt; /style &gt; ";
      var content = document.getElementById('content');
      content.innerHTML = 'This tag is used in our HTML pages to allow us to put some CSS stuff in it. ';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 3:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "How do we use CSS ? ";
      var content = document.getElementById('content');
      content.innerHTML = 'We use our html tags to reference what we want to style. For example if we wish to style the background color we say. body { background-color: lightblue;}. This makes the body of the html page light blue.';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 4:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Changing font";
      var content = document.getElementById('content');
      content.innerHTML = 'We can change the font of our text in the webpages. p { font-family: verdana; font-size: 20px;} ';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 5: 
     var subHeading = document.getElementById('sub-heads');
     subHeading.innerHTML = "Text Aligns";
     var content = document.getElementById('content');
     content.innerHTML = 'We can align different piece of text and elements by using the align tag. h1 { color: white; text-align: center; } ';
     document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	 break;
  case 6: 
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
      subHeading.innerHTML = "What is CSS ? ";
      var content = document.getElementById('content');
      content.innerHTML = 'CSS is used for styling web pages. It makes them look nice and brings color into them.';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 2:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; style &gt;&lt; /style &gt; ";
      var content = document.getElementById('content');
      content.innerHTML = 'This tag is used in our HTML pages to allow us to put some CSS stuff in it. ';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 3:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "How do we use CSS ? ";
      var content = document.getElementById('content');
      content.innerHTML = 'We use our html tags to reference what we want to style. For example if we wish to style the background color we say. body { background-color: lightblue;}. This makes the body of the html page light blue.';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 4:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Changing font";
      var content = document.getElementById('content');
      content.innerHTML = 'We can change the font of our text in the webpages. p { font-family: verdana; font-size: 20px;} ';
      document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	  break;
  case 5: 
     var subHeading = document.getElementById('sub-heads');
     subHeading.innerHTML = "Text Aligns";
     var content = document.getElementById('content');
     content.innerHTML = 'We can align different piece of text and elements by using the align tag. h1 { color: white; text-align: center; } ';
     document.getElementById('comp').src = "file://C:/Electron/Images/clipartcomp.png"
	 break;
  case 6: 
     location.replace("file://C:/Electron/GREYWM/congratGREY.html")
	  break;

}}