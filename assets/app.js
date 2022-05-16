const nav = document.getElementById("navbar");
const icon = document.getElementById("icon_menu");

icon.addEventListener("click", function() {
    nav.classList.toggle("with_menu");
})


// apparition sect1

const accueil = document.querySelectorAll(".content_presentation");

window.addEventListener("load" , () => {
    TL = gsap.timeline({paused:true})
    TL.to(accueil, 1 , {opacity: 1 , ease:"power2.out"}, 0.5)
    TL.play();
})

// anime gallery

const controller = new ScrollMagic.Controller()

const gallery = document.querySelectorAll(".gallery");


/* for ( var i = 0 ; i < gallery.length ; i++) {
    let tween = gsap.from(gallery[i] , {y:-50 , opacity : 0, duration:1});

    let scene = new ScrollMagic.Scene({
        triggerElement: gallery[i],
        reverse:true
    })
    .setTween(tween)
    .addTo(controller)
} */


// anime text amenagementExt

const text = document.querySelectorAll(".text_amenagementExt");
let tween2 = gsap.from(text , {x:-200 , opacity : 0 , duration:0.8})
let scene2 = new ScrollMagic.Scene({
    triggerElement: text,
    reverse:true,
})
.setTween(tween2).addTo(controller)

// anim text entretien
const text2 = document.querySelectorAll(".text_entretien");
let tween3 = gsap.from(text2 , {x:-200 , opacity:0 , duration:0.8})
let scene3 = new ScrollMagic.Scene({
    triggerElement: text2, 
    reverse:true, 
}).setTween(tween3).addTo(controller)


// anim text aménagement

const text3 = document.querySelectorAll(".text_amenagementInt");
let tween4 = gsap.from(text3, {x:200 , opacity : 0 , duration:0.8})
let scene4 = new ScrollMagic.Scene({
    triggerElement: text3, 
    reverse:true
}).setTween(tween4).addTo(controller)


// anim cabane/barrière Amenagement Ext

gsap.registerPlugin(ScrollTrigger);

gsap.to(".cabane" , {
    scrollTrigger: {
        trigger:".cabane", 
        start:"top center", 
        toggleActions: "restart pause resume pause"
    },
    right: (window.innerWidth/2) - 100 + "px",
    duration:2
})

gsap.to(".barriere", {
    scrollTrigger: {
        trigger:".cabane", 
        start:"top center", 
        toggleActions: "restart pause resume pause"
    },
    left: (window.innerWidth/2) - 100 + "px",
    duration:2
})


// anim tondeuse

gsap.to(".tondeuse", {
    scrollTrigger: {
        trigger:".tondeuse", 
        start:"top 100%", 
        end : "top 0px",
        scrub: 1,
        markers:false
    },
        x:(window.innerWidth-200) + "px",
        ease:"none",
        duration:2
}
)

gsap.to(".tonte", {
    scrollTrigger: {
        trigger:".tondeuse",
        start:"top 100%",
        end : "top 0px",
        scrub: 1,
        markers:false
    }, 

    x:(window.innerWidth-200) + "px",
    ease:"none",
    duration:2
})

//anim rouleau 

gsap.to(".rouleau", {
    scrollTrigger: {
        trigger:".peinture", 
        start:"top 50%", 
        end: "top 0px", 
        scrub : 1 ,
        markers : false
    }, 
    y:500, 
    ease:"none",
    duration :1
})


gsap.to(".masque", {
    scrollTrigger: {
        trigger:".peinture", 
        start:"top 50%", 
        end: "top 0px", 
        scrub : 1 ,
        markers : false
    }, 
    y:500, 
    ease:"none",
    duration :1
})


const ImgAme = document.querySelectorAll(".gallery_amenagementExt a");
const SlideAme = document.querySelectorAll("#carouselAme .carousel-inner .carousel-item");

for (var j = 0 ; j < ImgAme.length ; j++) {

    ImgAme[j].addEventListener("click" , function() {


        for (var k = 0 ; k < SlideAme.length ; k++) {

            SlideAme[k].classList.remove("active");

        }

        SlideAme[this.dataset.theslide].classList.add("active");
    })

}

const ImgAmeInt = document.querySelectorAll(".gallery_amenagementInt a");
const SlideAmeInt = document.querySelectorAll("#carouselAmeInt .carousel-inner .carousel-item");


for (var l = 0 ; l < ImgAmeInt.length ; l++) {

    ImgAmeInt[l].addEventListener("click" , function() {


        for (var m = 0 ; m < SlideAmeInt.length ; m++) {

            SlideAmeInt[m].classList.remove("active");

        }

        SlideAmeInt[this.dataset.slide].classList.add("active");
    })

}
