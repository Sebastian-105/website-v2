/*
<!--─────────────────────────────────────────────────────────────────────────────────────────────────|
<!───────────────────────────────────────────────────────────────────────────────────────────────────|
|──────────────────────────────────────────────|
|⬛⬛──────⬛⬛⬛⬛───────────⬛⬛⬛⬛⬛──────|
|⬛⬛─────⬛⬛──⬛⬛────────⬛⬛⬛⬛⬛⬛⬛────|
|⬛⬛────⬛⬛────⬛⬛──────⬛⬛────────⬛⬛───|
|⬛⬛───⬛⬛──────⬛⬛────⬛⬛────────────────|
|⬛⬛──⬛⬛────────⬛⬛────⬛⬛───────────────|
|⬛⬛──⬛⬛────────⬛⬛──────⬛⬛⬛⬛⬛⬛⬛───|
|⬛⬛───⬛⬛──────⬛⬛───────────────────⬛⬛──|
|⬛⬛────⬛⬛────⬛⬛─────────────────────⬛⬛─|
|⬛⬛─────⬛⬛──⬛⬛───────⬛⬛──────────⬛⬛──|
|⬛⬛──────⬛⬛⬛⬛──────────⬛⬛⬛⬛⬛⬛⬛────|     (105)
────────────────────────────────────────────────|
Made by @Sebastian-105 and by @DanyangXu77.
───────────────────────────────────────────────────────────────────────────────────────────────────|
───────────────────────────────────────────────────────────────────────────────────────────────────|-->
*/
function Sebastian105() {
	window.addEventListener('offline', () => 
  $("offline").fadeIn("slow"))
  document.getElementById("OfflineMode").innerHTML = "Offline"
}
function closesidenav() {
  $(".sidenav").fadeToggle("slow");
  console.log('Closed sidenav');
}
var author = "Sebastian-105";

function copytoclipboard(copiedcontent){
  navigator.clipboard.writeText(copiedcontent);
  console.log("Username has been copied.");
  $("copyalertcorner").fadeIn("slow").delay(5000).fadeOut("slow");
  document.getElementById("copyalertcorner").innerHTML = "Successfully copied: " + copiedcontent;
}
function MyFunctionalert(){
  return "Visit my website!";
}
function settings() {
  if (confirm("This page is still a work in progress, are you sure you want to go here? \n-Sebastian-105") === true) {
    var myWindow = window.open("105/settings/index.html");
    console.log('Opened Settings');
  } else {
    console.log("stayed at homepage \n-Sebastian-105");
  }
}
  let version = "v1.3.6";
  $("#currentverisonasdf").html(version);

function theexacttime() {
var d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ms = d.getMilliseconds();
let y = d.getYear();
m = checkTime(m);
s = checkTime(s);
ms = checkTimems(ms);
h = checkTime(h);
document.getElementById("thetimeinexacttime").innerHTML = "It is " + h +":" + m +":"+ s +"." + ms + " 2023" +"<br />"+"- Sebastian105";
setTimeout(theexacttime, 0);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
function checkTimems(i) {
  if (i <100) {i = "0" + i}
  return i;
}

setTimeout(theexacttime,105);
function myFunctionsearch() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}/*--------------------------------------------------------------------------------*/
function showResult(str) {
  if (str.length==0) {
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch").style.border="0px";
    return;
  }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("livesearch").innerHTML=this.responseText;
      document.getElementById("livesearch").style.border="1px solid #A5ACB2";
    }
  };
  xmlhttp.open("GET","livesearch.php?q="+str,true);
  xmlhttp.send();
}
// Varibles
//Sidenav
		if ('scrollRestoration' in history) {
		  history.scrollRestoration = 'manual';
;
		}
close = document.getElementsByClassName("closealert");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
//FUNCTIONS
     function blocked() {
  var myWindow = window.open("105/blocked/index.html", "_blank", "width=500,height=400,resizable=yes,left=500,top=200,toolbar=yes");
}

function myFunctionterms() {
  var myWindow = window.open("105/terms/index.html", "_blank");

}

function addgame() {
   var myWindow = window.open("https://forms.gle/TXz4Mk4ZQEyjSn43A", "_blank");
}
function code() {
  var myWindow = window.open("105/code/index.html", "_blank");


function feedback() {
   var myWindow = window.open("https://forms.gle/xmRta2vvGCLsrKUC8", "_blank");
}

}
function suggestions() {
   var myWindow = window.open("https://forms.gle/X82sK1epn5Y1Rqj66", "_blank");
}
function myFunctionTwilight() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
function myFunctionDarkMode() {
  var elemenwt = document.body;
  elemenwt.classlist.toggle("twilight-mode");
}
function myFunctiongame() {
  var myWindow = window.open("game/index.html", "_blank");
}
function ack() {
  var myWindow = window.open("105/acknowledgements/index.html", "_blank");
}

function myFunction12345() {
   var myWindow = window.open("", "MsgWindow", "width=500,height=500");
  myWindow.document.write("Email:<p>28stu216@lexingtonma.org</p><p><strong>Note:</strong> you can only email me if you have a lexington account</p><p>I will get a email account shortly</p>");
}
function bio() {
   var myWindow = window.open("ReadMe.md", "_blank", "width=500,height=500");
}
function changelog() {
  var myWindow = window.open("105/changelog/index.html", "_blank");
}
function myFunctionspotify() {
  var myWindow = window.open("105/spotify/index.html", "_blank");
}

function Chatroom() {
  var myWindow = window.open("105/chatroom/index.html", "_blank");
}
function onFunction() {
  alert ("Your browser has connected back to the internet connection. \n-Sebastian-105");
}

function offFunction() {
  alert ("We detected that your browser has lost internet connection. \n-Sebastian-105");
}
function myfunctionofflinegames() {
  var myWindow = window.open("p/offline/index.html");
}
function dailygames() {
  var myWindow = window.open("p/daily/index.html");
}
function downloadlink() {
  var myWindow = window.open("105/download/index.html");
}
function RunMyFunction()
{
if(Enabled == false)
{
 alert("Keybinds have been disabled. \n-Sebastian-105");

}else
{
  $(window).on("keypress", function(event){
    if (event.key == "s") {
      window.open("https://sebastian105.repl.co/105/settings/index.html");
    }
});}
}
function keybinds(){
  var myWindow = window.open("105/keybinds/index.html");
}
function tabicon() {
  var tabiconvar = document.getElementById("tabchange").value;
  var newtabicon = $("link[rel*='icon']").attr("href", tabiconvar);
  localStorage.setItem('tabicon', tabiconvar);
}
function buttonCode()
{
	var textbox = document.getElementById("nameChange")
  if (textbox.value.includes("Sebastian-105")) {
    document.title = (textbox.value)
  } else {
    newtitle105 = textbox.value + " | Sebastian-105"
    document.title = (newtitle105)
  }
    textbox.value = ""
    textbox.focus();
}
if (document.title.includes("Sebastian-105")) {
} else if (document.title.includes("Sebastian105")) {
  document.title = "Sebastian-105";
} else if (document.title = " | Sebastian-105") {
  document.title = "Sebastian-105"
}
  else {
  var title = document.title;
  document.title += " | Sebastian-105";
}
function resettabname() {
  document.title = "Sebastian-105";
} 
document.addEventListener("keydown", e => {
  e.preventDefault();
  if (e.key === "f" && e.ctrlKey) {
    if (!document.fullscreenElement) {
      document.requestFullscreen();
    }
  }
    else if (e.key === "g" && e.ctrlKey) {
      console.log("game page opened");
      window.open("game/index.html");
    } else if (e.key === "s" && e.ctrlKey) {
      window.open("105/settings/index.html");
      console.log("settings page opened");
    } else if (e.key === "h" && e.ctrlKey) {
      window.open("./index.html");
      console.log("settings page opened");
    } else if (e.key === "c" && e.ctrlKey) {
      window.open("105/chatroom/index.html");
    } else if (e.key === "d" && e.ctrlKey) {
      window.open("docs/index.html"); 
  })
