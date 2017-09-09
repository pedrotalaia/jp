import './modules'
import $ from 'jquery'
import 'jquery-validation'
import 'jquery-validation/dist/additional-methods'

$(document).ready( function() {

  $('#formspree').validate({
    errorPlacement: function(error, element) {
      element[0].previousElementSibling.append(error[0])
    },
    rules: {
      email: {
        require_from_group: [1, ".requiredElements"],
        email: true
      },
      telefone: {
        require_from_group: [1, ".requiredElements"]
      }
    },
    groups: {
      requiredElements: "email telefone"
    },
    messages: {
      email: {
        required: "Obrigatório e-mail",
        email: "Introduza um e-mail válido",
        require_from_group: "Introduza um telefone ou E-mail"
      },
      telefone: {
        required: "Obrigatório Telefone ou E-mail",
        require_from_group: "Introduza um telefone ou E-mail"
      }
    },
    submitHandler: function(form) {
      $('#submitButton').addClass('disabled');
      $('#submitButton').attr("disabled", true);

      $('#formLoading').css('visibility', 'visible');

      let dataObj = {};

      if( $('#nome').val()) dataObj.nome = $('#nome').val()
      if( $('#email').val()) dataObj.email = $('#email').val()
      if( $('#telefone').val()) dataObj.telefone = $('#telefone').val()

      $.ajax({
        url: "https://formspree.io/<josepedrotalaia@gmail.com>",
        method: "POST",
        data: dataObj,
        dataType: "json",
        timeout: 5000,
        success: function(msg, status, request){

          $('#submitButton').fadeOut(function(){
            $("#successLabel")
              .show()
              .delay(5000)
              .fadeOut(function(){
                form.reset();
                $("#submitButton").fadeIn();
                $('#submitButton').attr("disabled", false);
                $('#formLoading').css('visibility', 'hidden');
              });
          })
        },
        error: function(request, status, error){
          $('#submitButton').fadeOut(function(){
            $("#errorLabel")
              .show()
              .delay(5000)
              .fadeOut(function(){
                $("#submitButton").fadeIn();
                $('#submitButton').attr("disabled", false);
                $('#formLoading').css('visibility', 'hidden');
              });
          })
        }
      })

    },
    onkeyup: function(element) {
      if( element.valid ) element.valid()
    }
  })

})
