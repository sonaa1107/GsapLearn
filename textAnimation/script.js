function breakTextIntoSpans(){
    var text=document.querySelector("h2").textContent;
    var splitText=text.split("")
    var clutter=""
    var l=splitText.length/2
    splitText.forEach(function(c,i){
        if(i<l){
            clutter+=`<span class="left">${c}</span>`
        }else{
            clutter+=`<span class="right">${c}</span>`
        }
    })
    document.querySelector("h2").innerHTML=clutter;
}
breakTextIntoSpans()


gsap.from(" h2 .left",{
    y:90,
    opacity:0,
    delay:0.2,
    duration:0.4,
    stagger:0.15,
})
gsap. from("h2 .right",{
    y:40,
    opacity:0,
    duration:0.4,
    stagger:-0.15,
    delay:0.2
})