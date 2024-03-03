$(function () {
  //현재 보이는 슬라이드의 인덱스
  let now = 0;
  //슬라이드갯수알아내기
  const slideCount = $(".slide ul li").length;
  //슬라이드 ul
  const slideList = $(".slide ul");

  //setInterval 함수를 사용하여 3초마다 슬라이드 이동
  //setInterval(function, milliseconds);
  setInterval(function () {
    //now값 1씩 증가, slideCount로 나눈 나머지 값 now에 대입
    //(0+1) % 3 = 1(나머지)
    now = (now + 1) % slideCount;
    slideList.css("top", 100 * -now + "%");
  }, 3000);

  $("nav>ul>li").mouseenter(function () {
    $(this).find(".d2-ul").stop().slideDown();
  });
  $("nav>ul>li").mouseleave(function () {
    $(this).find(".d2-ul").stop().slideUp();
  });

  $(".t1-ul li:first-child").on("click", function () {
    $(".modal").css("display", "flex");
  });
  $(".modal-clo").on("click", function () {
    $(".modal").hide(".modal-clo");
  });
});
