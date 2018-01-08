$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
 
  });
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}