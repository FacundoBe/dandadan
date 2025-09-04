

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
    end: "+=1200",
    scrub: 1,
    markers: false,
  },
})

tl.to(".tunel",{scale:5,y:-300, opacity:0, ease:"power1.in", duration:8})
.to('.logo',{
  opacity:1,
  duration:1,
},"<0.5")
.to('.logo',{
  scale:35,
  y:-100,
  ease:"power2.in",
  duration:5,
},"<")




