window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(".con01 .name li", { y: 60, opacity: 0 });
  gsap.set(".con01 .high li", { x: 100, opacity: 0 });
  gsap.set(".con01 .slogan", { y: 50, opacity: 0, scale: 1.2 });

  const introTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".con01",
      start: "top top",
      end: "250%",
      pin: true,
      scrub: 2,
      // markers:true
    },
  });

  introTimeline
    .to(".con01 .name li:nth-child(1)", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    })
    .to(".con01 .name li:nth-child(2)", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    })
    .to(".con01 .high li", {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.25,
    })
    .to(".con01 > div", {
      y: -150,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    })
    .to(".con01 .slogan", {
      y: 0,
      opacity: 1,
      scale: 1.5,
      duration: 1.2,
      ease: "power2.out",
    })
    .to(".con01 .slogan", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
});
