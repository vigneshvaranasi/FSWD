function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");

  let halfValue = Math.floor(splittedText.length / 2);
  let clutter = ""

  splittedText.forEach(function(letter,index){
    if(index<halfValue)
        clutter+=`<span class="left">${letter}</span>`
    else  
        clutter+=`<span class="right">${letter}</span>`
  })

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".left",{
  y: 50,
  duration: 1,
  opacity: 0,
  delay:0.5,
  stagger: 0.15,
})
gsap.from(".right",{
  y: 50,
  duration: 0.6,
  opacity: 0,
  delay:0.5,
  stagger: -0.15,
})
