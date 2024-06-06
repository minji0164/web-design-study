$(document).ready(function () {
  setInterval(function () {
    $(".slide").animate({ "margin-left": "-100%" }, function () {
      $(".slide li").first().appendTo(".slide");
      $(".slide").css({ "margin-left": "0%" });
    });
  }, 3000);
  // ------------------------------
  $(".tab-tit").on("click", function (event) {
    event.preventDefault();

    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });
  // ------------------------------
  $(".n-ul li:first-child").on("click", function () {
    $(".pop").css("display", "flex");
  });
  $(".close").on("click", function () {
    $(".pop").hide(".modal-clo");
  });
});
