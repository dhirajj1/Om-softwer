$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 800);
  });
});
////////////////////////////////////////////////////////
// Sat current year

// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

////////////////////////////////////////////////////////

// Make mobilenavigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".navbar");

btnNavEl.addEventListener("click", function () {
  navbarEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////
