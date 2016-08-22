var ccvCSS;

//For main color use "+main+" (including quotation marks). MAKE SURE TO USE ", not '.
//For secondary color use "+secondary+" (including quotation marks). MAKE SURE TO USE ", not '.
//DON'T surround the text in the file given with a ' or a "
//DO use ONLY the .txt format

function process(url, main, secondary){
  
  xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  ccvCSS = xmlhttp.responseText;
  
}
