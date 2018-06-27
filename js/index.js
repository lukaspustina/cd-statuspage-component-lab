// notice the JS Library is imported already (click the gear next to JS)
// this script also assumes jQuery is already loaded on the page.

var sp = new StatusPage.page({ page: '39qnmk3k9q7f'});

sp.summary({
  success: function(data) {
    // adds the text description to the dropdown
    $('.color-description').text(data.status.description);
    // appends the status indicator as a class name so we can use the right color for the status light thing
    $('.color-dot').addClass(data.status.indicator);
  }
});










// Ignore this...it just centers the "page content here" text"
$(function() {
  var setContentHeight = function() {
    var height = $(window).outerHeight(true) - $('#custom-footer').outerHeight(true) - $('#custom-header').outerHeight(true);
  
    $('.page-content').css('line-height',(height + 'px'));
  }
  setContentHeight();
  $(window).on('resize', function() {
    setContentHeight();});
});