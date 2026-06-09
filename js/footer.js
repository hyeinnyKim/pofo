$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2,
        // markers: true,
      },
    })
    .to("footer .hope", {
      y: -50,
      scale: 1.2,
      duration: 1,
    });
});
