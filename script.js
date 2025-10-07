gsap.registerPlugin(ScrollTrigger)

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis()
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add(time => {
  lenis.raf(time * 1000) // Convert time from seconds to milliseconds
})
gsap.ticker.lagSmoothing(0)

// 1. Obtener una referencia al elemento donde mostraremos el valor
const visorScroll = document.getElementById("visor-scroll")

// 2. Definir una función que se ejecute al hacer scroll
const actualizarVisorScroll = () => {
  // window.scrollY obtiene el valor del desplazamiento vertical en píxeles
  const valorScroll = window.scrollY

  // 3. Actualizar el texto del elemento en pantalla
  visorScroll.textContent = `Scroll Y: ${Math.round(valorScroll)}px   -  ${(
    (Math.round(valorScroll) / 2000) *
    100
  ).toFixed(1)}%`
}

// 4. Adjuntar la función al evento 'scroll' de la ventana
window.addEventListener("scroll", actualizarVisorScroll)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin:true,
    markers: false,
  },
})

tl.to(".tunel", {
  scale: 5,
  y: "55dvh",
  ease: "power1.in",
  duration: 100,
})
  .to(
    ".momo",
    {
      xPercent: 515,
      yPercent: 45,
      scale: 4.5,
      ease: "power1.in",
      duration: 40,
    },
    "<"
  )
  .to(
    ".abuela",
    {
      xPercent: 227,
      yPercent: 5,
      scale: 3.8,
      ease: "power1.in",
      duration: 60,
    },
    "<"
  )
  .to(
    ".okarun",
    {
      xPercent: -375,
      yPercent: 40,
      scale: 3.8,
      ease: "power1.in",
      duration: 30,
    },
    "<"
  )
  .to(
    ".linda",
    {
      xPercent: -385,
      yPercent: 35,
      scale: 3.7,
      ease: "power1.in",
      duration: 45,
    },
    "<"
  )
  .to(
    ".logo",
    {
      opacity: 1,
      duration: 40,
    },
    "15"
  )
  .to(
    ".logo",
    {
      scale: 9,
      y: "-2dvh",
      x: "0dvw",
      ease: "power1.in",
      duration: 75,
    },
    "<"
  )
  .to(
    ".tunel",
    {

      opacity:0,
      duration: 60,
      ease: "none",
    },
    "<"
  )


