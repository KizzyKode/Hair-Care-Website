
// function to open nexted dropdown
$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

//function to add active class

$(document).ready(function () {
    $("ul.navbar-nav > li").click(function (e) {
     $("ul.navbar-nav > li").removeClass("active");
     $(this).addClass("active");
      });
});



// function to toggle read and close in blog page

  $(document).ready(function() {

  
    $('.tog').click(function() {
      $(this).toggleClass( "active" );
      if ($(this).hasClass("active")) {
        $(this).text("Close");
      } else {
        $(this).text("Read");
      }
    });
  });

// function for product carousel on blog page


  $(document).ready(function() {
    $('#media').carousel({
  
    });
  });


  // equipments javascript

  
  // $(document).ready(function() {

  
  //   $('.togz').click(function() {
  //     $(this).toggleClass( "active" );
  //     if ($(this).hasClass("active")) {
  //       $(this).text("Collapse");
  //     } else {
  //       $(this).text("View");
  //     }
  //   });
  // });




// latest developments modal

function open_newsletter_modal(){
  document.getElementById("modal_popup").style.display="block";
  }
  function close_newsletter_modal(){
  document.getElementById("modal_popup").style.display="none";
  }

  // function to open modal for product comparision 


     function open_modal(){
  document.getElementById("modal_popup2").style.display="block";
  }
  function close_modal(){
  document.getElementById("modal_popup2").style.display="none";
  }

 

  ///// main section /////  

  // Auto Switching Images for CSS-Slider
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });












 
  