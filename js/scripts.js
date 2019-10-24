// Back end

// Front end
$(document).ready(function() {
  $("form#transportation_survey").submit(function(e) {
    e.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
