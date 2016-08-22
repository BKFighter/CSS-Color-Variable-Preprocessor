var ccvCSS;

// For main color use "+main+" (including quotation marks)
//For secondary color use "+secondary+" (including quotation marks)
//DON'T surround the text in the file given with a ' or a "
//DO

function process(url, main, secondary){
  
  xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  ccvCSS = xmlhttp.responseText;
  
}
