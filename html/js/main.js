$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
	var ww = $(window).width();
    if(wn > 120){
		$(".navbar").css("max-width","100%");		
		$(".fixed-top").css("padding","0");
		$(".fixed-top").css("background","#4d4d4d");
    }
    else{
		switch(true){
			case (ww>766 && ww<992):
				$(".fixed-top").css("padding-left","5%");
				$(".fixed-top").css("max-width","1140px");
				$(".fixed-top").css("background","transparent");
				break;
			case( ww<767 && ww>575):
				$(".fixed-top").css("padding","0");
				$(".fixed-top").css("max-width","900px");
				$(".fixed-top").css("background","transparent");
			default:
				$(".fixed-top").css("padding-left","5%");
				$(".fixed-top").css("max-width","1140px");
				$(".fixed-top").css("background","transparent");
				break;
		}
    }
  });
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#education"]')
  .not('[href="#general"]')
  .not('[href="#contact"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
