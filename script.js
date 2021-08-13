/* .js files add interaction to your website */

/* Here I define my variables and reference html elements using the getElementById method */

var displayScript = document.getElementById("scriptReturned");
var scriptButton = document.getElementById("scriptButton");

/* Here I use an if statement to make the form generate the script when the user clicks on the "submit" button. */
if (scriptButton) {
  scriptButton.addEventListener("click", generateScript);
}

/* Here I define a function to generate the script based on the input values entered by the user. I reference this function above. In order for the function to occur, someone must click the button. */
function generateScript() {
  /* Here I define variables again. The variables are the form submissions and I reference them using the getElementById method.*/
  var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  var connection = document.getElementById("connection").value;

/*The "generate script" function displays this script when the button is clicked. I prewrote most of the script, but included spaces for the information the user inputs to make it personalized. */
  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + city + ". I am contacting you to urge you to support the fight against climate change by supporting, or continuing to support, legislation that aims to significantly reduce greenhouse gas emissions. The effects of climate change are all around us: in recent years, both within the country and the globe, there have been countless natural disasters, including fires, hurricanes, floods, and snowstorms. If we continue to do nothing about climate change, these will only increase in frequency and intensity, which is why it is imperative that we do all we can to stop climate change, and fast. " + connection + "Thank you for your time.";
}
