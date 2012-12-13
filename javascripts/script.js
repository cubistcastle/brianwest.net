$(function() {
 $("form").validate({
     rules: {
      "entry.0.single": {
       required:true
      },
      "entry.1.single": {
        required: true,
        email: true
      },
      "entry.2.single": {
        required: true
      }
    },
    messages: {
      // name: "Please specify your name",
      "entry.2.single": {
        required: "I'll need your email",
        email: "That's no email!"
      }
    }
 });
     $('#submit').on('click', function(e) {
         if ($('form').valid()) {
             e.preventDefault();
             // console.log( $("form").serialize() );
             var postVar = $("form").serialize();
              $.ajax({
                 url: "http://spreadsheets.google.com/spreadsheet/formResponse",
                 data: postVar,
                 type: 'POST',
                 dataType: "jsonp"
             });
             $('.formblock').html("<h2>Thanks!</h2>");
             // $('.thanks').show().addClass('animated bounceInLeft');
         }
     });
});