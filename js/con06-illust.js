window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 1025) {
    $(function () {
      /* 네이비컬러 {color:#1E3568;} / rgb(30, 53, 104) */
      /* 아이보리컬러 {color:#F6F7F1;} / rgb(246, 247, 241) */
      /* 핑크컬러 {color:#F1C6C6;} /  rgb(241, 198, 198) */
      /* 그레이컬러 {color:#828282;} */

      //My, Work글자가 양쪽에서 각자 들어오게끔하는 효과!
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con06",
            start: "0% 100%",
            end: "50% 50%",
            scrub: 3,
            // markers: true,
          },
        })
        .fromTo(
          ".con06 .my",
          { x: "-50%", opacity: 0 },
          { x: "0%", opacity: 1 },
          0,
        )
        .fromTo(
          ".con06 .work",
          { x: "50%", opacity: 0 },
          { x: "0%", opacity: 1 },
          0,
        );

      //body 배경색:네이비, title글자색:아이보리, 고정
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con06 .worklist",
            start: "10% 100%",
            end: "10% 100%",
            scrub: 3,
            // markers: true,
          },
        })
        .fromTo(
          "body",
          { backgroundColor: "#f6f7f1", color: "#1e3568" },
          { backgroundColor: "#1E3568", color: "#F1C6C6" },
        )
        .to(".con06 .title", { position: "fixed", left: 0, top: 0 });

      //My, Work글자가 양쪽으로 사라지게하는 효과!
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".worklist",
            start: "100% 100%",
            end: "100% 80%",
            scrub: 3,
            // markers: true,
          },
        })
        .to(".con06 .my", { x: "-100%", opacity: 0 }, 0)
        .to(".con06 .work", { x: "100%", opacity: 0 }, 0);

      //이미지커튼이 열리는 효과
      let boxes = document.querySelectorAll(".con06 .imgBox");
      console.log(boxes);
      boxes.forEach((box) => {
        ScrollTrigger.create({
          trigger: box,
          start: "top 100%",
          toggleClass: "active",
          // markers: true,
        });
      });
    });
  }
  if (window.innerWidth < 768) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con06 ul",
          start: "0% 90%",
          end: "50% 30%",
          scrub: 2,
          // markers: true,
        },
      })
      .to(".con06 li:nth-child(1)", { y: 0, opacity: 1 }, 0.2)
      .to(".con06 li:nth-child(2)", { y: 0, opacity: 1 }, 0.4)
      .to(".con06 li:nth-child(3)", { y: 0, opacity: 1 }, 0.6)
      .to(".con06 li:nth-child(4)", { y: 0, opacity: 1 }, 0.8)
      .to(".con06 li:nth-child(5)", { y: 0, opacity: 1 }, 0.8);
  }
});
