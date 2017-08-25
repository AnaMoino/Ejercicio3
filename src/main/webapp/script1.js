function readBrowserProperties(){
    
    var txt = "";
txt += "Browser CodeName: " + navigator.appCodeName;
txt += " Browser Name: " + navigator.appName;
txt += " Browser Version: " + navigator.appVersion;
txt += " Cookies Enabled: " + navigator.cookieEnabled;
txt += " Browser Language: " + navigator.language;
txt += " Browser Online: " + navigator.onLine;
txt += " Platform: " + navigator.platform;
    
          $("#result").text(txt);   
          console.log(txt);
          readOS();
}