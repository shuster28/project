
$(document).ready(function(){
  
  /*
  * Animate in the header bar on scroll
  */  
  $(window).scroll(function() {
  
     /* // check if window scroll for more than 430px. May vary
      // as per the height of your main banner.*/
      
      if($(this).scrollTop() > 430) { 
          $('.navbar').addClass('opaque'); // adding the opaque class
      } else {
          $('.navbar').removeClass('opaque'); // removing the opaque class
      }
  });

  /*
  * Scroll the body to a given section
  */
  $(document).on("click", ".navbar-center a", function(event){
    event.preventDefault();

    var $this = $(this);
    var targetLabel = $this.attr("href"); 
    var destination = $("[data-target=" + targetLabel + "]").offset().top;

    $("body, html").animate({
      scrollTop: destination
    }, 450, "swing");
  });

});


