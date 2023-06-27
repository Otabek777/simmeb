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