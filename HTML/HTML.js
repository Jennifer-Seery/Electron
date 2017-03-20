var counter =0 ;  

var subHeading = document.getElementById('sub-heads');
subHeading.innerHTML = "LETS GO !  ";
var content = document.getElementById('content');
content.innerHTML = 'Click forward and lets get started ! ';
	
function change()
{
  counter++;
  switch(counter){
	
  case 1:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Whats a Tag ? ";
      var content = document.getElementById('content');
      content.innerHTML = 'A HTML tag is something that gives structure to our web page. It is like the skeleton in our body it helps gives us our shape.There are hundreds of tags in HTML. Lets explore some of them !';
      break;
  case 2:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "Tags and What They Look Like ";
      var content = document.getElementById('content');
      content.innerHTML = 'This is the way tags in HTML look &lt; tagname &gt; &lt; /tagname &gt;. &lt; tagname &gt; This tag shows us that something is about to happen on the web page. When we want to end the tag we use this tag &lt; /tagname &gt;. This can be a bit tricky at the start but dont worry we will get the hand of it ! ';
      break;
  case 3:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; html &gt;  ";
      var content = document.getElementById('content');
      content.innerHTML = 'The &lt; html &gt; tag tells the browser that this is an HTML document.It looks like this  &lt; html &gt; &lt; /html &gt;';
      break;
  case 4:
      var subHeading = document.getElementById('sub-heads');
      subHeading.innerHTML = "&lt; h1 &gt; to&lt; h6 &gt;";
      var content = document.getElementById('content');
      content.innerHTML = 'These tags are used to give a heading to our webpage just like the heading in your notebooks. Again it looks like this &lt; h1 &gt; &lt; /h1 &gt; . The number after the h gives us the size of the heading. ';
      break;
  case 5: 
     var subHeading = document.getElementById('sub-heads');
     subHeading.innerHTML = "&lt; p &gt; &lt; /p &gt;";
     var content = document.getElementById('content');
     content.innerHTML = 'The p tag allows us to put a chunk of writing into our web page. It is called a paragraph tag as it can give us a chance to put a paragraph into the webpage. ';
     break;
}	
}