$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});

$().ready(function(){
    $('[rel="tooltip"]').tooltip();
});

function rotateCard(btn){
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if($card.hasClass('hover')){
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}