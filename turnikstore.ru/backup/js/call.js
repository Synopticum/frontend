$('.fancybox').fancybox();

function formSend1() {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#callForm').ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#callForm .name").val()=="" || $("#callForm .phone").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function formSend2() {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#shipForm').ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#shipForm .name").val()=="" || $("#shipForm .phone").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function formSend3() {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#programmForm').ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#programmForm .name").val()=="" || $("#programmForm .phone").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function formSend4() {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#installForm').ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#installForm input[name='name']").val()=="" || $("#installForm input[name='phone']").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function formSend5() {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#consultForm').ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#consultForm .name").val()=="" || $("#consultForm .phone").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function formSend6(idF) {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $("#orderForm"+idF).ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#orderForm"+idF+" input[name='name']").val()=="" || $("#orderForm"+idF+" input[name='phone']").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function formSend7() {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#callForm2').ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#callForm2 .name").val()=="" || $("#callForm2 .phone").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function formSend8() {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#callForm3').ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#callForm3 .name").val()=="" || $("#callForm3 .phone").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function moreOpen(tID,tname) {
  
  //$("#more1").fancybox.open();
  $.fancybox({
                href: '#more'+tID,
                //scrollOutside: true,
                type: 'inline',
                autoResize: false,
                fitToView: false,
            });
  $('#more'+tID+' .gallery img').each(function() {
   
   $(this).click(function() {
    $src = $(this).attr('src');
    
    $('#more'+tID+' .mainImg').attr('src',$src);
    return false;
   }); 
});

}

function orderOpen(tID) {
  event.preventDefault()
  $("#ordersForm #ordername").val(tID);
  $.fancybox({
                href: '#orders'
            });
}



function ordersSend() {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#ordersForm').ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#ordersForm .name").val()=="" || $("#ordersForm .phone").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}

function orderModalSend(tID) {

    var options = { 
      target: "#output",
      url: "./send.php",
      beforeSubmit: showRequest,
      error: showError,
      success: showResponse,
      resetForm: true,
      timeout: 1000
    };

    $('#orderModal-'+tID).ajaxSubmit(options); 
      return false;
    
    function showRequest() { 
      if($("#orderModal-"+tID+" .name").val()=="" || $("#orderModal-"+tID+" .phone").val()=="") {
        $("#output").css('background','#B90000').text("Вы заполнили не все поля").fadeIn();
        window.setTimeout(function () { $("#output").fadeOut() }, 5000);
        return false;
      } else {
        $('#output').css('background','#858585').text('Отправка...').fadeIn();
        return true;
        }
    }

    function showResponse()  { 
      $("#output").css("background","#007400").text("Спасибо за заявку! Скоро мы с Вами свяжемся.");
       window.setTimeout(function () { $("#output").fadeOut() }, 5000);
    }
    function showError()  { 
      $("#output").css("background","#B90000").text("Произошла ошибка, попробуйте еще раз.");
      window.setTimeout(function () { $("#output").fadeOut() }, 4000);
    }

}


  $(function() {
    

   
    $('a.header-recall').click(function() {
      $('#callForm').fadeIn(300);
    });
//     $("body").bind('click', function(ev) {
//     var myID = ev.target.id;
//     if (myID !== 'callForm' && myID !== 'header-recall') {
//         $('#callForm').fadeOut(300);
//     }
// });
  $(document).click(function(event) { 
    if($(event.target).parents().index($('#callForm')) == -1 && $(event.target).index($('.header-recall')) == -1) {
        if($('#callForm').is(":visible")) {
            $('#callForm').fadeOut(300);
        }
    }        
})
  })
