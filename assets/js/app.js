// get jquery with browserify and browserify-shim
var $ = require('jquery');

/**
 * add the status via ajax and add it to the list elements
 *
 * @param {object} the ajax options
 * @return void
 */
function addStatus(options) {
  $.ajax({
    url: '/status/index.html',
    type: 'GET',
    dataType: 'html',
    data: {text: options.text},
    success: options.success
  });
}

// do this when the document is ready
$(document).ready(function() {
  // on submitting the form
  $('#new-status form').submit(function(e) {
    e.preventDefault();

    // call a route via ajax
    addStatus(
      {
        text: $('#new-status').find('textarea').val(),
        success: function(data) {
          // when it succeeds, append the result to an li
          $('#statuses>ul').append('<li>' + data + '</li>');
          $('#new-status').find('textarea').val('');
        }
      }
    );
  });
});
