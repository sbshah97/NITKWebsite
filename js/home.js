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
  });
  
function autoplay() {
	$('.carousel').carousel('next');
	setTimeout(autoplay, 3500);
};
$(document).ready(function() {
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	setTimeout(autoplay, 2000);
});

