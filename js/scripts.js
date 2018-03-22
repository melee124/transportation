//Business Logic

//UI Logic
$(document).ready(function() {
  $("form#travel").submit(function() {
    event.preventDefault();
    $("#travel").hide();
    $("#work-results").show();
    $("#fun-results").show();
    $("input:checkbox[name=work-transport]:checked").each(function() {
      var workTransport = $(this).val();
      $(".work-commute").append(workTransport + "<br>");
      this.checked=false;
    });
    $("input:checkbox[name=fun-transport]:checked").each(function() {
      var funTransport = $(this).val();
      $(".fun-commute").append(funTransport + "<br>");
      this.checked=false;
    });
  });
});
