var path = 'M 20 100 Q 200 100 980 100'
var finalPath = 'M 20 100 Q 300 100 980 100'

var string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets) {
  path = `M 20 100 Q ${dets.x} ${dets.y} 980 100`
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.Out"
  })
})
string.addEventListener("mouseleave", function (dets) {
  path = `M 20 100 Q 300 100 980 100`
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.3,
    ease: "elastic.out(1, 0.3)"
  })
})