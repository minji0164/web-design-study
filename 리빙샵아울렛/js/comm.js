$(document).ready(function () {
  $(".slides ul li").hide();
  $(".slides ul li:first-child").show();

  setInterval(function () {
    $(".slides ul li:first-child")
      .fadeOut()
      .next()
      .fadeIn()
      .end(1000)
      .appendTo(".slides ul");
  }, 3000);

  $(".pop-click").on("click", function () {
    $(".pop").css("display", "flex");
  });

  $(".clo").on("click", function () {
    $(".pop").css("display", "none");
  });
});
