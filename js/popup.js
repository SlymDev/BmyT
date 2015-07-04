/* => By SlymDev */

$(function(){
  var userInput = [];
  userInput = $("#userInput").val('');
  var convertion = {
    BtoText: function(binary){
      return binary.replace(/\s*[01]{8}\s*/g, function(binary){
        return String.fromCharCode(parseInt(binary, 2));
      });
    },
	BtoDecimal: function(binary){
      return binary.replace(/\s*[01]{8}\s*/g, function(binary){
        return parseInt(binary, 2).toString(10);
      });
    },
	BtoHex: function(binary){
      return binary.replace(/\s*[01]{8}\s*/g, function(binary){
        return parseInt(binary, 2).toString(16);
      });
    },
    toBinary: function(text, space){
      return text.replace(/[\s\S]/g, function(text){
        text = convertion.bNorm(text.charCodeAt().toString(2));
        return !1 == space ? text : text + " ";
      });
    },	
	dtoBinary: function(decimal){
		return convertion.bNorm(parseInt(decimal, 10).toString(2));
	},
	dtoHexa: function(decimal){
		return convertion.standardNorm(parseInt(decimal, 10).toString(16));
	},
	htoBinary: function(hexa){
		return convertion.bNorm(parseInt(hexa, 16).toString(2));
	},
	htoDecimal: function(hexa){
		return convertion.standardNorm(parseInt(hexa, 16).toString(10));
	},
    bNorm: function(normalise){
      return "00000000".slice(String(normalise).length) + normalise;
    },
	standardNorm: function(normalise){
      return "000".slice(String(normalise).length) + normalise;
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
        bmyt = convertion.BtoText(userInput);
        $("#output").html(bmyt);
		$("#NB").html("");
      }
	  else if (action == "BtoD") {
        $("#action").removeClass('error');
        var btod = [];
        btod = convertion.BtoDecimal(userInput);
        $("#output").html(btod);
        $("#NB").html("");
      }
	  else if (action == "BtoH") {
        $("#action").removeClass('error');
        var btoh = [];
        btoh = convertion.BtoHex(userInput);
        $("#output").html(btoh);
        $("#NB").html("");
      }
      else if (action == "TtoB") {
        $("#action").removeClass('error');
        var tmyb = [];
        tmyb = convertion.toBinary(userInput);
        $("#output").html(tmyb);
        $("#NB").html("<span><b>NB:</b> <small>space = 00100000</small></span>");
      }
	  else if (action == "DtoB") {
        $("#action").removeClass('error');
        var dtoB = [];
        dtoB = convertion.dtoBinary(userInput);
        $("#output").html(dtoB);
        $("#NB").html("<span><b>NB: </b><small> Only convert from 0 to 255</small></span>");
      }
	  else if (action == "DtoH") {
        $("#action").removeClass('error');
        var dtoH = [];
        dtoH = convertion.dtoHexa(userInput);
        $("#output").html(dtoH);
        $("#NB").html("<span><b>NB: </b><small> Only convert from 0 to 255</small></span>");
      }
	  else if (action == "HtoB") {
        $("#action").removeClass('error');
        var htoB = [];
        htoB = convertion.htoBinary(userInput);
        $("#output").html(htoB);
        $("#NB").html("<span><b>NB: </b><small> Only convert from 0 to F</small></span>");
      }
	   else if (action == "HtoD") {
        $("#action").removeClass('error');
        var htoD = [];
        htoD = convertion.htoDecimal(userInput);
        $("#output").html(htoD);
        $("#NB").html("<span><b>NB: </b><small> Only convert from 0 to F</small></span>");
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
    .delay(2500)
    .slideUp();
  }
});