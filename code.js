// Navbar 
function toggleNavOpen() {
    $('#MobileNav').addClass("animation-in");
    $('#MobileNav').removeClass("animation-out");
    $('#closeNavIcon').removeClass("hidden");
    $('#openNavIcon').addClass("hidden");
}
function toggleNavClose() {
    $('#MobileNav').addClass("animation-out");
    $('#MobileNav').removeClass("animation-in");
    $('#closeNavIcon').addClass('hidden');
    $('#openNavIcon').removeClass("hidden");
}