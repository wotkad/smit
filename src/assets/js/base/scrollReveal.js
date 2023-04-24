import ScrollReveal from "scrollreveal";

function scrollInit() {
  const nodes = document.querySelectorAll('.reveal')
  const target = Array.from(nodes).filter(node => $(node).css('display') !== 'none')
  const options = {
    distance: "20%",
    origin: "bottom",
    delay: 200,
    duration: 600,
    opacity: 0,
    mobile: false,
  }
  ScrollReveal().reveal(target, options, 250)
}
scrollInit();
