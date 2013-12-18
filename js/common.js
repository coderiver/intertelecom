$(document).ready(function() {

$( ".btn" ).click(function( event ) {
  $(this).closest('.form').addClass('validated');
});

});