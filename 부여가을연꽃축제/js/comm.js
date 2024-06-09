$(document).ready(function () {
  // 메뉴
  $(".dep1 > li").hover(
    function () {
      $(this).find(".dep2").stop(true, true).slideDown(300).addClass("show");
    },
    function () {
      $(this).find(".dep2").stop(true, true).slideUp(300).removeClass("show");
    }
  );

  // 슬라이드
  $(".slides > ul > li").hide();
  $(".slides > ul > li:first-child").show();

  setInterval(function () {
    $(".slides > ul > li:first-child")
      .fadeOut()
      .next()
      .fadeIn()
      .end(1000)
      .appendTo(".slides >ul");
  }, 3000);

  // 팝업
  $(".notice > ul > li:first-child").on("click", function () {
    $(".pop-wr").css("display", "flex");
  });
  $(".clo").on("click", function () {
    $(".pop-wr").css("display", "none");
  });
});
