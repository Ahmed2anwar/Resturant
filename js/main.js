// window screen
$(document).ready(function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });
});


// icontop
let Scroll = $("header a").offset().top;
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop >= Scroll) {
    
    $("#iconTop").fadeIn(500);
  } else {
    
    $("#iconTop").fadeOut(500);
  }
});

$("#iconTop").click(function () {
  $("body,html").animate({ scrollTop: "0px" }, { queue: true, duration: 2000 });
});

$(".nav-link").click(function () {
  let href = $(this).attr("href");
  $(this).addClass("active");
  $(this).parent().siblings().find(".nav-link").removeClass("active");
  let aboutScroll = $(href).offset().top;
  $("body,html").animate(
    { scrollTop: aboutScroll  },
    { queue: true, duration: 1000 }
  );
});




// navlink active
let navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


// scroll recels animation
let sr = ScrollReveal({
  origin:'top',
  distance:'80px',
  duration:2000,
  reset:true,
});


// scroll home
sr.reveal('.home .caption',{
  delay:400,
  origin:'left',
})

sr.reveal('.home img',
{
  delay:400,
  origin:'right',
})

// scroll About
sr.reveal('.About .caption',
{
  origin:'right',
  delay:400

})
sr.reveal('.About img',
{
  origin:'left',
  delay:400

})

// Scroll Service
sr.reveal('.Service p  ',
{
  origin:'top',
  delay:400

})
sr.reveal('.Service h2  ',
{
  origin:'top',
  delay:400

})
sr.reveal('.Service  ',
{
  origin:'top',
  delay:400

})

// scroll Menu
sr.reveal('.Menu p  ',
{
  origin:'top',
  delay:400

})
sr.reveal('.Menu h2  ',
{
  origin:'top',
  delay:400

})
sr.reveal('.Menu .item ',
{
  origin:'top',
  delay:400

})

// scroll app

sr.reveal('.app .item',
{
  origin:'right',
  delay:400

})
sr.reveal('.app img',
{
  origin:'left',
  delay:400

})

//scroll contact


sr.reveal('.contact .buttton  ',
{
  origin:'right',
  delay:400

})
sr.reveal('.contact .caption  ',
{
  origin:'left',
  delay:400

})

