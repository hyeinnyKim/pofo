//스크롤했을때 .con04 .wrap의 li가 오른쪽에서 왼쪽으로 100vw씩 이동하게함
window.addEventListener("scroll", () => {
  const con04 = document.querySelector(".con04");
  const wrap = document.querySelector(".con04 .wrap");

  if (!con04 || !wrap) return;

  const offsetTop = con04.offsetTop;
  const scrollTop = window.scrollY;

  if (scrollTop >= offsetTop) {
    let scrolled = scrollTop - offsetTop;

    // con04 전체 세로 스크롤 가능 길이에서 화면 높이를 뺀 값
    const maxScroll = con04.offsetHeight - window.innerHeight;
    if (scrolled > maxScroll) scrolled = maxScroll;

    // .wrap의 전체 실제 가로 길이에서 현재 화면 가로 크기를 빼서 움직일 총량 구하기
    const totalMoveX = wrap.scrollWidth - window.innerWidth;

    // 세로 스크롤 비율에 맞춰 가로로 부드럽게 이동 계산
    const moveX = (scrolled / maxScroll) * totalMoveX;

    wrap.style.transform = `translateX(-${moveX}px)`;
  } else {
    wrap.style.transform = `translateX(0px)`;
  }
});
