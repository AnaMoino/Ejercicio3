function readOS(){
   var txt = "";
   txt += "User-agent header: " + navigator.userAgent;
   
    $("#result2").text(txt);
    console.log(txt);
}