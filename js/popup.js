/* => By SlymDev */

$(function(){
  var userInput = [];
  userInput = $("#userInput").val('');
  var convertion = {
    toText: function(binary){
      return binary.replace(/\s*[01]{8}\s*/g, function(binary){
        return String.fromCharCode(parseInt(binary, 2));
      });
    },
    toBinary: function(text, space){
      return text.replace(/[\s\S]/g, function(text){
        text = convertion.bNorm(text.charCodeAt().toString(2));
        return !1 == space ? text : text + " ";
      });
    },
    bNorm: function(normalise){
      return "00000000".slice(String(normalise).length) + normalise;
    }
  };

  $('#clear').click(function(){
    $("#userInput").val('');
    $("#output").html('');
    $("#userInput").removeClass('error');
    $("#action").removeClass('error');
  });
  
  $("#convert").click(function(){
    var userInput = [];
    userInput = $("#userInput").val();
    var action = $('#action').val();

    if (userInput != '') {
      $("#userInput").removeClass('error');
      if (action == "BtoT") {
        $("#action").removeClass('error');
        var bmyt = [];
        bmyt = convertion.toText(userInput);
        $("#output").html(bmyt);
      }
      else if (action == "TtoB") {
        $("#action").removeClass('error');
        var tmyb = [];
        tmyb = convertion.toBinary(userInput);
        $("#output").html(tmyb);
        $("#NB").html("<small><b>NB:</b> space = 00100000</small>");
      }
      else{
        $("#action").addClass('error');
        slideNotice('Choose an action for better result.');
        $("#output").html(userInput);
      }
    }
    else{
      $("#userInput").addClass('error');
      slideNotice('I need a string to make the convertion.');
    }
  });
  
  function slideNotice(text) {
    $('#slidingNotice').html('<i class="icon-warning-sign icon-small"></i><b>'+ text +'</b>')
    .slideDown()
    .delay(2000)
    .slideUp();
  }
});