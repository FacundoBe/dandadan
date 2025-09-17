gsap.registerPlugin(ScrollTrigger)

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis()
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add(time => {
  lenis.raf(time * 1000) // Convert time from seconds to milliseconds
})
gsap.ticker.lagSmoothing(0)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=2500",
    scrub: 1,
    markers: false,
  },
})

tl.to(".tunel", {
  scale: 5,
  y: "55dvh",
  ease: "power1.in",
  duration: 16,
})
  .to(
    ".momo",
    { xPercent: 515, yPercent: 45, scale: 4.5, ease: "power1.in", duration: 6 },
    "<"
  )
  .to(
    ".abuela",
    { xPercent: 190, yPercent: 25, scale: 3.8, ease: "power1.in", duration: 8 },
    "<"
  )
  .to(
    ".okarun",
    {
      xPercent: -375,
      yPercent: 40,
      scale: 3.8,
      ease: "power1.in",
      duration: 5,
    },
    "<"
  )
  .to(
    ".linda",
    {
      xPercent: -350,
      yPercent: 35,
      scale: 3.7,
      ease: "power1.in",
      duration: 7,
    },
    "<"
  )
  .to(
    ".logo",
    {
      opacity: 1,
      duration: 6,
    },
    ">-1"
  )
  .to(
    ".logo",
    {
      scale: 12,
      y: "-2dvh",
      x:"0dvw",
      ease: "power1.in",
      duration: 9,
    },
    "<"
  )
  .to(
    ".tunel",
    {
      opacity: 0,
      duration: 9,
      ease:"none"
    },
    "<"
  )
  
