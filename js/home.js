function getPageName(url) {
      var index = url.lastIndexOf("/") + 1;
      var filenameWithExtension = url.substr(index);
      var filename = filenameWithExtension.split(".")[0];
      return filename;
}

$(document).ready(function() {
  $("#first").removeClass("active");
  $("#second").removeClass("active");
  $("#third").removeClass("active");
  $("#fourth").removeClass("active");    
  var pathname = window.location.pathname;
  var filename = getPageName(pathname);
  switch (filename) {
    case "index":
      $("#first").addClass("active");
      break;
    case "gallery":
      $("#third").addClass("active");
      break;
  }
	// $('#header').load('header.html');
	$('#footer').load('footer.html');
  $('.slider').slider();;
});
  
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 3500);
};