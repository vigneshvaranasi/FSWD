let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let image = document.querySelector("#image")


main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    // ease:"back.out",
  })
})

image.addEventListener("mouseenter",function(){
  cursor.innerHTML = "👀"
  gsap.to(cursor,{
    scale:4,
  })
})

image.addEventListener("mouseleave",function(){
  cursor.innerHTML = ""
  gsap.to(cursor,{
    scale:1,
  })
})