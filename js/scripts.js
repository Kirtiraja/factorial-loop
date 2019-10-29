$(document).ready(function(){
  $("form#userForm").submit(function(event){
    event.preventDefault();
    $(".results").show();
    var factoralNumber = 1
    var numberInput = parseInt($("#userNumber").val());
    for (var index = 1; index <= numberInput; index +=1){
      factoralNumber *= index;
    }
    $("#showResults").text(factoralNumber);
  });
});
