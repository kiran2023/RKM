function showpass() {
    var userpass = document.getElementById("userloginpass");

    var eye = document.getElementById("eye");
    var eyehide = document.getElementById("eyehide");

    if (userpass.type === "password") {
        userpass.type = "text";
        eyehide.style.display = "none";
        eye.style.display = "block";
    } else {
        userpass.type = "password";
        eye.style.display = "none";
        eyehide.style.display = "block";
    }
}

var incrementQuantity = document.getElementsByClassName('incrBtn');
var decrementQuantity = document.getElementsByClassName('decBtn');

for (var i = 0; i < incrementQuantity.length; i++) {
    var button = incrementQuantity[i];
    button.addEventListener('click', function (event) {
        var btnClicked = event.target;
        var parentData = btnClicked.parentElement.children[1];
        var quantity = +(parentData.innerHTML);
        parentData.innerHTML = (quantity) + 1;
    });
}

for (var i = 0; i < decrementQuantity.length; i++) {
    var button = decrementQuantity[i];
    button.addEventListener('click', function (event) {
        var btnClicked = event.target;
        var parentData = btnClicked.parentElement.children[1];
        var quantity = +(parentData.innerHTML);
        parentData.innerHTML = (quantity) - 1;
    });
}