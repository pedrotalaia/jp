import './modules'
import $ from 'jquery'

$(document).ready(function(){
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
})


/*

*/
console.log(`app.js has loaded!`)
