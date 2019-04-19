var Navis = document.getElementsByClassName("nav");
var currDir = document.getElementsByTagName("title");
function formatNavis() {
  var i;
  for(i=0;i<Navis.length;i++){
    if (Navis[i].innerHTML == currDir[0].innerHTML){
      Navis[i].style.backgroundColor = "white";
      Navis[i].style.boxShadow = "0px 0px 0px gray";
      Navis[i].style.borderBottom = "thick solid white";
      Navis[i].style.borderTopLeftRadius = "10px";
      Navis[i].style.borderTopRightRadius = "10px";

    }
    else {
    }
  }
}
window.onload=formatNavis;
