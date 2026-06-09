// li에 마우스 올렸을때만 글자가 굵어지게 함
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 1025) {
    $(function () {
      $(".con05 .textWrap li").on("mouseenter", function () {
        $(this).css({ "font-weight": "bold" });
        let i = $(this).index();
        $(".con05 .imgWrap li").eq(i).show();
      });

      $(".con05 .textWrap li").on("mouseleave", function () {
        $(this).css({ "font-weight": "normal" });
        let i = $(this).index();
        // 텍스트에서 벗어나도 이미지 위에 있으면 유지
        setTimeout(() => {
          if (
            !$(".con05 .imgWrap li").eq(i).is(":hover") &&
            !$(this).is(":hover")
          ) {
            $(".con05 .imgWrap li").eq(i).hide();
          }
        }, 100);
      });

      // 이미지에서도 마우스 벗어나면 숨김
      $(".con05 .imgWrap li").on("mouseleave", function () {
        $(this).hide();
      });
    });
  }
});
