$(function () {
  let now = 0;
  const slideCount = $(".slide ul li").length;
  const slideList = $(".slide ul");
  setInterval(function () {
    now = (now + 1) % slideCount;
    slideList.css("left", 100 * -now + "%");
  }, 3000);

  $("nav>ul>li").mouseenter(function () {
    $(this).find(".d2").stop().slideDown();
  });
  $("nav>ul>li").mouseleave(function () {
    $(this).find(".d2").stop().slideUp();
  });

  $(".t1-ul li:first-child").on("click", function () {
    $(".modal").css("display", "flex");
  });
  $(".mo-clo").on("click", function () {
    $(".modal").hide(".mo-clo");
  });

  $(".tab-tit").on("click", function (event) {
    event.preventDefault();

    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });
});
