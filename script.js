function includeHTML() {
  var parentPage, elmnt, includeFilePath, xhttp;
  parentPage = document.getElementsByTagName("body");
  elmnt = parentPage[0];
  /*check if the body has the correct attribute:*/
  includeFilePath = elmnt.getAttribute("data-include-html");
  if (includeFilePath) {
    /* Make an HTTP request using the attribute value as the file name: */
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          elmnt.innerHTML = this.responseText;
        } else if (this.status == 404) {
          elmnt.innerHTML = "Page not found.";
        }
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
