var   projectT = $('#project').offset().top,
projectH = $('#project').outerHeight(),
teamT = $('#team').offset().top,
teamH = $('#team').outerHeight(),
scheduleT = $('#schedule').offset().top,
scheduleH = $('#schedule').outerHeight(),
courseT = $('#course').offset().top,
courseH = $('#course').outerHeight(),
raportsT = $('#raports').offset().top,
raportsH = $('#raports').outerHeight(),
documentationT = $('#documentation').offset().top,
documentationH = $('#documentation').outerHeight(),
wH = $(window).height();
$(window).scroll(function() {     
  wS = $(this).scrollTop();
  if (wS > (projectT+projectH-wH)){
    document.getElementById("aproject").classList.add("active");
  } else  document.getElementById("aproject").classList.remove("active");
  if (wS > (teamT+teamH-wH)){
    document.getElementById("ateam").classList.add("active");
  } else  document.getElementById("ateam").classList.remove("active");
  if (wS > (scheduleT+scheduleH-wH)){
    document.getElementById("aschedule").classList.add("active");
  } else  document.getElementById("aschedule").classList.remove("active");
  if (wS > (courseT+courseH-wH)){
    document.getElementById("acourse").classList.add("active");
  } else  document.getElementById("acourse").classList.remove("active");
  if (wS > (raportsT+raportsH-wH)){
    document.getElementById("araports").classList.add("active");
  } else  document.getElementById("araports").classList.remove("active");
  if (wS > (documentationT+documentationH-wH)){
    document.getElementById("adocumentation").classList.add("active");
  } else  document.getElementById("adocumentation").classList.remove("active");
});
function darkMode() {
  document.body.classList.toggle("dark-mode");
  if(localStorage.getItem("mode") == "1") {
    localStorage.setItem("mode","0");
  }
  else {
    localStorage.setItem("mode","1");
  }
}
function checkMode() {
  if (localStorage.getItem("mode") == "1") {
    document.body.classList.toggle("dark-mode");
  }
}