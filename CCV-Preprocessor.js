var css;

function process(url, main, secondary){
  
  mlhttp=new XMLHttpRequest();
  xmlhttp.open("GET", "/v1/data?format=json", false);
  xmlhttp.send();
  css = xmlhttp.responseText;
  
}
