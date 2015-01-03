$ = require('jquery');

$(document).ready(function() {
  $('#new-status form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: '/status/index.html',
      type: 'GET',
      dataType: 'html',
      data: { text: $('#new-status').find('textarea').val() },
      success: function(data) {
        $('#statuses>ul').append('<li>' + data + '</li>');
        $('#new-status').find('textarea').val('');
      }
    });
  });
});
