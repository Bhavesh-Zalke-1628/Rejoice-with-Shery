function cursorEffect() {
    var page1Contect = document.querySelector("#pageContent")
    var cursor = document.querySelector("#cursor")
    page1Contect.addEventListener("mousemove", function (dets) {

        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y,
        })
    })
    page1Contect.addEventListener("mouseleave", function () {

        gsap.to("#cursor", {
            scale: 0,
            opacity: 0
        })
    })
    page1Contect.addEventListener("mouseenter", function () {

        gsap.to("#cursor", {
            scale: 1,
            opacity: 1

        })
    })
}

cursorEffect()

console.log(cursorEffect)