$(document).ready(function() {
  $('button.start').on('click', function() {
    $('button.view_result').attr('disabled', true)
    $('.result').hide();
    $('.result .history ol').html('')
    $(this).attr('disabled', true);
    var counter = 0;
    var timer = setInterval(function() {
      counter += 1;
      var a = Math.floor(Math.random() * 4) + 1;
      $('.history ol').append('<li>' + 'Block ' + a + '</li>')
      $('#div_' + a).show();

      setTimeout(function() {
        $('.item').hide();
      }, 500);

      if(counter == 8) {
        clearInterval(timer)
        $('button.start').removeAttr('disabled')
        $('button.start').text('Reset')
        $('button.view_result').removeAttr('disabled');
      }
    }, 1000)
  })

  $('button.view_result').on('click', function() {
    $('.result').show();
  })
})
