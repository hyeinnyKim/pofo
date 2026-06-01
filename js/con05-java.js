// li에 마우스 올렸을때만 글자가 굵어지게 함
$(function () {
  $(".con05 .textWrap li").on("mouseenter", function () {
    $(this).css({ "font-weight": "bold" });
  });
  $(".con05 .textWrap li").on("mouseleave", function () {
    $(this).css({ "font-weight": "normal" });
  });

  // li에 마우스 올렸을때 해당사이트 미리보기가능
  $(".con05 .textWrap li").on("mouseenter", function () {
    // 현재 마우스 올린 li의 순서 번호(0, 1, 2) 알아내기
    let i = $(this).index();
    $(".con05 .imgWrap li").eq(i).show();
  });
  $(".con05 .textWrap li").on("mouseleave", function () {
    $(".con05 .imgWrap li").hide();
  });
});
