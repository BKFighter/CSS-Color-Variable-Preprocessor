var ccvCSS;

function process(url, main, secondary){
  
  mlhttp=new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  ccvCSS = xmlhttp.responseText;
  
}
