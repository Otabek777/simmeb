$(".header__burgir").click(function() {
    $(".header").addClass("open");
});
$(".header__close").click(function() {
    $(".header").removeClass("open");
});
$("body").click(function() {
    $(".header__phoneBlock").removeClass("open");
});
$(".header__phoneMobile .btn").click(function() {
    setTimeout(function() {
        $(".header__phoneBlock").addClass("open");
    }, 10);
});

$(".filter__mobileBtnOpen").click(function() {
    $(".filter").addClass("open");
});
$(".filter__mobileBtnClose").click(function() {
    $(".filter").removeClass("open");
});

// Tab
if (window.innerWidth < 1024) {
    $(".product__tabBtn .btn").click(function() {
        if($(this).hasClass("active")) {
            $(".product__tabBtn").addClass("open");
        } else {
            $(".product__tabBtn").removeClass("open");
        };
    });
};
function TabClick(num) {
    $("#tabBtn-"+num).click(function() {
        $(".product__tabBtn .btn").removeClass("active");
        $(".product__tabBlock").removeClass("active");
        $(this).addClass("active");
        $("#tabBlock-"+num).addClass("active");
    });
};
TabClick("1");
TabClick("2");
TabClick("3");
TabClick("4");
