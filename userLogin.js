let loginBtnHide = document.getElementById("Loginbtn");
let cartBtn = document.getElementById("mainPageCart");
let logoutBtn = document.getElementById("logoutBtn");
let addToCartDiv = document.getElementById("addToCartDiv");

loginBtnHide.style.display = "block";
cartBtn.style.display = "none"
logoutBtn.style.display = "none";

window.addEventListener('load', function () {

    if (sessionStorage.getItem("userLogin")) {
        loginBtnHide.style.display = "none";
        cartBtn.style.display = "block"
        logoutBtn.style.display = "block";
        addToCartDiv.style.display = "flex";
    }
});

function logout(){
    sessionStorage.clear();
    location.reload();
    window.open("index.html", "_self");
}
