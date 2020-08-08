function includeHTML() {
  var parentPage, i, elmnt, includeFilePath, xhttp;
  /* Loop through a collection of all HTML elements: */
  parentPage = document.getElementsByTagName("*");
  for (i = 0; i < parentPage.length; i++) {
    elmnt = parentPage[i];
    /*search for elements with a certain atrribute:*/
    includeFilePath = elmnt.getAttribute("data-include-html");
    if (includeFilePath) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute */
          elmnt.removeAttribute("data-include-html");
          //includeHTML();
        }
      }
      xhttp.open("GET", includeFilePath, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
} //end includeHTML()
