var cursor=document.querySelector("#cursor");
var main=document.querySelector("#main");

main.addEventListener('mousemove',function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
        duration:0.3,
    })
})