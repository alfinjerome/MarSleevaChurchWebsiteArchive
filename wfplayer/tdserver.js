if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.indexOf("Windows", 0) != -1 && navigator.appVersion.substring(0,1) >= 4)
{
        document.writeln("<object");
        document.writeln("classid=\"clsid:0246ECA8-996F-11D1-BE2F-00A0C9037DFE\"");
// Change the URL on the next line to point to the location 
// of the WebFont Player on your server
        document.writeln("codebase=\"http://www.marsleevachurch.com/wfplayer/tdserver.cab#version=1,0,0,12\""); 
        document.writeln("id=\"TDS\" width=0 height=0");
        document.writeln(">");
        document.writeln("</object>");         
}

