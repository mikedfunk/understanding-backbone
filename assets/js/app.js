// get jquery with browserify and browserify-shim
var $ = require('jquery');

// do this when the document is ready
$(document).ready(function() {
  // on submitting the form
  $('#new-status form').submit(function(e) {
    e.preventDefault();

    // call a route via ajax
    $.ajax({
      url: '/status/index.html',
      type: 'GET',
      dataType: 'html',
      data: { text: $('#new-status').find('textarea').val() },
      success: function(data) {
        // when it succeeds, append the result to an li
        $('#statuses>ul').append('<li>' + data + '</li>');
        $('#new-status').find('textarea').val('');
      }
    });
  });
});
