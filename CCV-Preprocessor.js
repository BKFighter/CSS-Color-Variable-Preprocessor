var ccvCSS;

//For main color use "+main+" (including quotation marks). MAKE SURE TO USE ", not '.
//For secondary color use "+secondary+" (including quotation marks). MAKE SURE TO USE ", not '.
//DON'T surround the text in the file given with a ' or a " .
//DO use ONLY the .ppcss file extension.
//Files you want to use MUST be from the same repository as the page you want to use this on. Exception to this are things like raw.githubusercontent, etc.

function process(url, main, secondary){
  console.log("started"+main);
  
  xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      
    var ppCSS = xmlhttp.responseText.replace(/\s+/g, ' ');
    console.log(ppCSS);
    var pCSS = '"'+ppCSS+'"';
    console.log(pCSS);
    ccvCSS = eval(pCSS);
    console.log(ccvCSS);
    
    //Provided by @Herohamp vvv
    var newStyle = document.createElement('style');
    newStyle.setAttribute('type', 'text/css');
  
    newStyle.textContent = ccvCSS;
  
    document.getElementsByTagName('head')[0].appendChild(newStyle);
    console.log(document.getElementsByTagName('head'));
  //Provided by @Herohamp ^^^
    }
  };
  
}
