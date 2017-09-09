import './modules'
import $ from 'jquery'
import 'jquery-validation'
require("jquery-validation/dist/additional-methods.js")



$(document).ready( function() {

  $('#formspree').validate({
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
      $('#successLabel').removeClass('pt-form-hidden');

      $('#formspree').submit(function(ev) {
        ev.preventDefault(ev)
        
        $.ajax({
          url: "https://formspree.io/<josepedrotalaia@gmail.com>",
          method: "POST",
          data: {message: "hello!"},
          dataType: "json",
          success: function(msg){
            console.log('sucess:',msg)
          },
          error: function(err){
            console.log('error:',err)
          }
        })
      })

    },
    onkeyup: function(element) {
      if( element.valid ) element.valid()
    }
  })

})
