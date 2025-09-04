

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
    end: "+=600",
    scrub: 0.8,
    markers: false,
  },
})

tl.to(".tunel",{scale:1.15, duration:6.5})
.to(".ojos",{
  opacity:1,
  scale:1.25,
  duration:1.0,
},"<")
.to(".ojos",{
  opacity:0,
  duration:0.5,
}, ">")
.to('.logo',{
  opacity:1,
  duration:1,
},"<0.5")
.to('.logo',{
  scale:30,
  ease:"power2.in",
  duration:5,
},"<")




