// Navbar 
function toggleNavOpen() {
    console.log("sck");
    $('#MobileNav').removeClass("hidden");
    $('#closeNavIcon').removeClass("hidden");
    $('#openNavIcon').addClass("hidden");
}
function toggleNavClose() {
    console.log("sck");
    $('#MobileNav').addClass('hidden');
    $('#closeNavIcon').addClass('hidden');
    $('#openNavIcon').removeClass("hidden");
}