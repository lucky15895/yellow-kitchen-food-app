var openBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".close-btn");
var overLay = document.querySelector(".overlay");
var menuBox = document.querySelector(".menu-box");
function openMenu() {
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
        overLay.style.transform = "translateX(0)";
        menuBox.style.transform = "scaleX(1)"
        console.log("hii");
}
function closeMenu() {
        openBtn.style.display = "";
        closeBtn.style.display = "";
        overLay.style.transform = "";
        menuBox.style.transform = ""
}

// if(window.innerWidth >= "992"){
//         $('.my-slider').slick({
//                 infinite: true,
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//               });
// }else if (window.innerWidth < "992" && window.innerWidth >= "768"){
//         $('.my-slider').slick({
//                 infinite: true,
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//               });
// }else if (window.innerWidth < "768" && window.innerWidth >= "568"){
//         $('.my-slider').slick({
//                 infinite: true,
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//               });
// } else{
//         $('.my-slider').slick({
//                 infinite: true,
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//               });
// }

$('.my-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
                {
                        breakpoint: 992,
                        settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: false
                        }
                },
                {
                        breakpoint: 768,
                        settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                        }
                },
                {
                        breakpoint: 567,
                        settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                        }
                },
                {
                        breakpoint: 480,
                        settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                        }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
        ]
});