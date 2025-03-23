
function locomotiveAnimation() {
    
    const isMobile = window.innerWidth <= 600;
    if (isMobile) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function loadingAnimation() {
    var tl = gsap.timeline();

    
    tl.from(".line h1", {
        y: 150,
        stagger: 0.3, 
        duration: 0.8, 
        delay: 0.3, 
        ease: "power3.out", 
    });

    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            
            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                }
            }, 30); 
        },
    });

    tl.to(".line h2", {
        animationName: "loaderAnime",
        opacity: 1,
    });

    tl.to("#loader", {
        opacity: 0,
        duration: 0.3,
        delay: 2.8,
    });

    tl.from("#page1", {
        delay: 0.1,
        y: 1600,
        duration: 0.7, 
        ease: "power4.out",
    });

    tl.to("#loader", {
        display: "none",
    });

    tl.from("#nav", {
        opacity: 0,
        duration: 0.5,
    });

    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 140,
        stagger: 0.25, 
        duration: 0.6,
        ease: "power2.out",
    });

    tl.from(
        "#hero1, #page2",
        {
            opacity: 0,
            duration: 0.5,
        },
        "-=1.0" 
    );
}

function cursorAnimation() {
    if (window.innerWidth <= 600) {
        document.querySelector("#crsr").style.display = "none";
        return;
    }

    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.8, 
    });

    Shery.makeMagnet("#nav-part2 h4");

    var videoContainer = document.querySelector("#video-container");
    var video = document.querySelector("#video-container video");

    videoContainer.addEventListener("mouseenter", function () {
        videoContainer.addEventListener("mousemove", function (dets) {
            gsap.to(".mousefollower", {
                opacity: 0,
                duration: 0.3, 
            });
            gsap.to("#video-cursor", {
                left: dets.x - 570,
                y: dets.y - 300,
                ease: "power2.out", 
                duration: 0.4,
            });
        });
    });

    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1,
            duration: 0.3,
        });
        gsap.to("#video-cursor", {
            left: "70%",
            top: "-15%",
            ease: "power2.out",
            duration: 0.4,
        });
    });

    var flag = 0;
    videoContainer.addEventListener("click", function () {
        if (flag == 0) {
            video.play();
            video.style.opacity = 1;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 0.6, 
                duration: 0.5,
                ease: "power3.out",
            });
            flag = 1;
        } else {
            video.pause();
            video.style.opacity = 0;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 1,
                duration: 0.5,
                ease: "power3.out",
            });
            flag = 0;
        }
    });
}

function sheryAnimation() {
    if (window.innerWidth <= 600) {
        return;
    }

    Shery.imageEffect(".image-div", {
        style: 5,
        gooey: true,
        config: {
            "a": { "value": 1.5, "range": [0, 30] }, 
            "b": { "value": 0.8, "range": [-1, 1] }, 
            "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
            "aspect": { "value": 0.7241195453907675 },
            "gooey": { "value": true },
            "infiniteGooey": { "value": false },
            "growSize": { "value": 3, "range": [1, 15] }, 
            "durationOut": { "value": 1.2, "range": [0.1, 5] }, 
            "durationIn": { "value": 1.8, "range": [0.1, 5] }, 
            "displaceAmount": { "value": 0.3 }, 
            "masker": { "value": true },
            "maskVal": { "value": 1.1, "range": [1, 5] }, 
            "scrollType": { "value": 0 },
            "geoVertex": { "range": [1, 64], "value": 1 },
            "noEffectGooey": { "value": true },
            "onMouse": { "value": 0 },
            "noise_speed": { "value": 0.3, "range": [0, 10] }, 
            "metaball": { "value": 0.25, "range": [0, 2] }, 
            "discard_threshold": { "value": 0.6, "range": [0, 1] },
            "antialias_threshold": { "value": 0.02, "range": [0, 0.1] },
            "noise_height": { "value": 0.4, "range": [0, 2] },
            "noise_scale": { "value": 8, "range": [0, 100] }, 
        },
    });
}

function flagAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#flag", {
            x: dets.x,
            y: dets.y,
            ease: "power2.out",
            duration: 0.3,
        });
    });

    document.querySelector("#hero3").addEventListener("mouseenter", function () {
        gsap.to("#flag", {
            opacity: 1,
            duration: 0.5, 
            ease: "power3.out",
        });
    });

    document.querySelector("#hero3").addEventListener("mouseleave", function () {
        gsap.to("#flag", {
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
        });
    });
}

function footerAnimation() {
    var clutter = "";
    var clutter2 = "";
    document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
        clutter += `<span>${elem}</span>`;
    });
    document.querySelector("#footer h1").innerHTML = clutter;
    document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
        clutter2 += `<span>${elem}</span>`;
    });
    document.querySelector("#footer h2").innerHTML = clutter2;

    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
        gsap.to("#footer h1 span", {
            opacity: 0,
            stagger: 0.08, 
            ease: "power2.in",
        });
        gsap.to("#footer h2 span", {
            delay: 0.5, 
            opacity: 1,
            stagger: 0.08,
            ease: "power2.out",
        });
    });

    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
        gsap.to("#footer h1 span", {
            opacity: 1,
            stagger: 0.08,
            delay: 0.5,
            ease: "power2.out",
        });
        gsap.to("#footer h2 span", {
            opacity: 0,
            stagger: 0.08,
            ease: "power2.in",
        });
    });
}


function setupHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navPart2 = document.querySelector("#nav-part2");

    hamburger.addEventListener("click", function () {
        navPart2.classList.toggle("active");
        hamburger.innerHTML = navPart2.classList.contains("active")
            ? `<i class="ri-close-line"></i>`
            : `<i class="ri-menu-line"></i>`;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadingAnimation();
    cursorAnimation();
    locomotiveAnimation();
    sheryAnimation();
    flagAnimation();
    footerAnimation();
    setupHamburgerMenu();
});