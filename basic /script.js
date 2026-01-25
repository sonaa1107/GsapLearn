// gsap.to("#box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotation:360,
//     borderRadius:"30%",
//     backgroundColor:"purple",
//     repeat:-1,
//     yoyo:true
// })
// gsap.from("h1",{y:100,duration:3,delay:2,stagger:0.5,rotation:360,color:"seagreen"})
var tl=gsap.timeline();
tl.from('h2',{
    y:-30,
    opacity:0,
    duration:1 ,
    delay:0.5
})
tl.from('h4',{
    y:-30,
    opacity:0,
    duration:1 ,
    stagger:0.2
})