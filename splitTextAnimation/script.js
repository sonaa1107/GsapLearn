SplitText.create("p",{type:"words",
    autoSplit:true,
    onSplit:(e)=>{
        return gsap.from(e.words,{
        y:150,
        opacity:0,
        duration:0.3,
        delay:0.3,
        stagger:0.7
    }) ;
    }
})

// gsap.from("h2",{
//     y:150,
//     opacity:0,
//     duration:0.7,
//     delay:0.3
// }) 