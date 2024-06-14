$(document).ready(function () {
  // 이건 dep2 한 라인씩 나타날 떼
  $(".dep1 > li").hover(
    function () {
      $(this).find(".dep2").stop(true, true).slideDown(300).addClass("show");
    },
    function () {
      $(this).find(".dep2").stop(true, true).slideUp(300).removeClass("show");
    }
  );

  // 이건 dep2 한번에 나타날 때
  $(".dep1").hover(
    function () {
      $(this).find(".dep2").stop(true, true).slideDown(300).addClass("show");
    },
    function () {
      $(this).find(".dep2").stop(true, true).slideUp(300).removeClass("show");
    }
  );

  // 슬라이드 상하
  setInterval(function () {
    $(".slide").animate({ "margin-top": "-400px" }, 1000, function () {
      $(".slide li").first().appendTo(".slide");
      $(".slide").css({ "margin-top": "0px" });
    });
  }, 3000);

  // 슬라이드 좌우
  setInterval(function () {
    $(".slide").animate({ "margin-left": "-100%" }, 1000, function () {
      $(".slide li").first().appendTo(".slide");
      $(".slide").css({ "margin-left": "0%" });
    });
  }, 3000);

  // 슬라이드 페이드인
  $(".slide ul li").hide();
  $(".slide ul li:first-child").show();

  setInterval(function () {
    $(".slide ul li:first-child")
      .fadeOut()
      .next()
      .fadeIn()
      .end(1000)
      .appendTo(".slide ul");
  }, 3000);

  //탭
  $(".tab .tit").on("click", function (event) {
    event.preventDefault();

    $("tab").removeClass(".active");
    $(this).parents(".tab").addClass(".active");
  });

  // 팝업
  $(".n-ul li:first-child").on("click", function () {
    $(".pop").css("dispaly", "flex");
  });
  $(".clo").on("click", function () {
    $(".pop").css("display", "none");
  });
});

//외우기
$(document).ready(function () {
  $(".dep1 li").hover(
    function () {
      $(this).find(".dep2").stop(true, true).slideDown(300).addClass("show");
    },
    function () {
      $(this).find(".dep2").stop(true, true).slideUp(300).removeClass("show");
    }
  );

  setInterval(function () {
    $(".slide").animate({ "margin-left": "-100%" }, 1000, function () {
      $(".slide li").first().appendTo(".slide");
      $(".slide").css({ "margin-left": "0%" });
    });
  }, 3000);

  $(".slide ul li").hide();
  $(".slide ul li:first-child").show();

  setInterval(function () {
    $(".slide ul li:first-child")
      .padeOut()
      .next()
      .padeIn()
      .end(1000)
      .appendTo(".slide ul");
  }, 3000);

  $(".tab tit").on("click", function (event) {
    event.preventDefault();

    $(".tab").removeClass(".active");
    $(this).parents(".tab").addClass(".active");
  });

  $(".n-ul li:first-child").on("cilck", function () {
    $(".pop").css("display", "flex");
  });
  $(".clo").on("click", function () {
    $(".pop").css("display", "none");
  });
});
