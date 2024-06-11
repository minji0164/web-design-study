$(document).ready(function () {
  $(".dep1 > li").hover(
    function () {
      $(this).find(".dep2").stop(true, true).slideDown(300).addClass("show");
    },
    function () {
      $(this).find(".dep2").stop(true, true).slideUp(300).removeClass("show");
    }
  );

  setInterval(function () {
    $(".slide").animate({ "margin-top": "-400px" }, 1000, function () {
      $(".slide li").first().appendTo(".slide");
      $(".slide").css({ "margin-top": "0px" });
    });
  }, 3000);

  $(".tab .tit").on("click", function (event) {
    event.preventDefault();

    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });

  $(".n-ul li:first-child").on("click", function () {
    $(".pop").css("display", "flex");
  });
  $(".clo").on("click", function () {
    $(".pop").css("display", "none");
  });
});

// 슬라이드 페이드인아웃 상하좌우
// 탭
// 팝업
// 메뉴
