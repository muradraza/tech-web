$(document).ready(function(){

  // Navbar Scroll Background

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".head").css("background" , "#0F3D3E");
	  }

	  else{
		  $(".head").css("transparent");  	
	  }
  });

  // Slider

  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  });

  // Form Vaildation

  $("#WebsiteForm").validate({
    rules: {
      name: "required",
      companyname: "required",
      countryname: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: "required",
      agree: "required"
    },
    messages: {
      name: "Please enter your name",
      companyname: "Please enter your company name",
      countryname: {
        required: "Please enter a country name",
        minlength: "Your country name must consist of at least 2 characters"
      },
      email: "Please enter a valid email address",
      message: "please leave a message!",
      agree: "Please accept our policy",
    }
  });
});

// Accordion

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );


// Progress Counter

var a = 0;
$(window).scroll(function() {

  var oTop = $('#count').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

