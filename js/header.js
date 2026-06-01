$(function () {
  // 메뉴열기
  $("header .open").on("click", function () {
    $("header nav").show();
  });
  //메뉴닫기
  $("header .close").on("click", function () {
    $("header nav").hide();
  });
});
