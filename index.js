// Popup Toggle

var loginToggle = document.querySelector("#loginToggle");
var toggle = document.querySelector(".Loginmodal");

var RegisterClose = document.querySelector(".RegisterClose");
var RegisterModal = document.querySelector(".Registermodal");

loginToggle.addEventListener('click', () => {
    toggle.showModal();
    RegisterModal.close();
});

RegisterClose.addEventListener('click', () => {
    RegisterModal.close();
});

// LOGIN MODAL PANEL

var Loginmodal = document.querySelector(".Loginmodal");

var registerToggle = document.querySelector(".Registermodal");
var toggleClose = document.querySelector(".RegisterClose");

var openModal = document.querySelector(".login");
var closeModal = document.querySelector(".close");
var toggleRegister = document.querySelector("#toggleRegister");

toggleRegister.addEventListener('click', () => {
    registerToggle.showModal();
    Loginmodal.close();
});

toggleClose.addEventListener('click', () => {
    RegisterModal.close();
});

openModal.addEventListener('click', () => {
    Loginmodal.showModal();
});

closeModal.addEventListener('click', () => {
    Loginmodal.close();
});


var progressSection = document.getElementById('ratingSection');
var progressBar = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBar.forEach(progress => {
        const value = progress.dataset.progress;
        progress.style.opacity = 1;
        progress.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBar.forEach(progress => {
        progress.style.opacity = 0;
        progress.style.width = 0;
    });
}

//Login Form Validation

var mail = "kiran@gmail.com";
var password = "Kiran.";

function userMailValidate() {

    var userEnteredMail = document.getElementById("usermaillogin").value;
    var error1 = document.getElementById("error1");

    if (userEnteredMail.trim() != mail) {
        return false;
    }

    if (userEnteredMail.trim() == mail) {
        error1.innerHTML = "";
        return true;
    }

}

function userPasswordValidate() {
    var userpassword = document.getElementById("userloginpass").value;
    var error2 = document.getElementById("error2");

    if (userpassword.trim() != password) {
        return false;
    }

    if (userpassword.trim() == password) {
        error2.innerHTML = "";
        return true;
    }
}

function login() {
    var successful = document.getElementById("succefulLogin");

    let loginBtnHide = document.getElementById("Loginbtn");
    let cartBtn = document.getElementById("mainPageCart");
    let logoutBtn = document.getElementById("logoutBtn");

    var userEnteredMail = document.getElementById("usermaillogin").value;

    if (userMailValidate() && userPasswordValidate()) {
        if (userEnteredMail.trim() == mail) {
            successful.innerHTML = "Login Successful";
            loginBtnHide.style.display = "none";
            cartBtn.style.display = "block"
            logoutBtn.style.display = "block";
            sessionStorage.setItem('userLogin', "true");
            setTimeout(() => {
                alert("Redirecting To Dashboard Page");
            }, 2000);
            setTimeout(() => {
                window.open("admin.html", "_self");
            }, 4000);
        }
        if (userEnteredMail.trim() == userMail) {
            successful.innerHTML = "Login Successful";
            loginBtnHide.style.display = "none";
            cartBtn.style.display = "block"
            logoutBtn.style.display = "block";
            sessionStorage.setItem('userLogin', "true");
        }
    } else {
        alert("Enter Valid Data");
        return false;
    }
}

// REGISTRATION VALIDATION
var nameError = document.getElementById("nameError");
var mailError = document.getElementById("mailError");
var phoneError = document.getElementById("phoneError");

var submitValidate = false;

function userNameValidate() {
    var user = document.getElementById("usernames").value;

    var usernameValidate = "^[A-Za-z]+$";

    if (!user.match(usernameValidate)) {
        nameError.innerHTML = "UserName Must be Only Aplhabets";
        user.style.border = "2px solid green";
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function mailValidate() {
    var mail = document.getElementById("mailid");
    var mailValidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (!mail.value.match(mailValidate)) {
        mailError.innerHTML = "Enter Valid Mail Address";
        return false;
    }
    mailError.innerHTML = "";
    return true;
}

function phoneValidate() {
    var mobile = document.getElementById("mobilenumber");
    var phoneValidate = "^[6-9]{1}[0-9]{9}$";

    if (!mobile.value.match(phoneValidate)) {
        phoneError.innerHTML = "Enter Valid Phone Number";
        return false;
    }
    phoneError.innerHTML = "";
    return true;
}
function passwordValidate() {
    var password = document.getElementById("password").value;
    var passwordValidate = "^(.{0,6}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$";

    if (password.match(passwordValidate)) {
        document.getElementById("passwordError").innerHTML = "One Caps, Small, Number, Special Character, length must be 7 & above";
        return false;
    }
    document.getElementById("passwordError").innerHTML = "";
    confirmpasswordValidate();
    return true;
}

function confirmpasswordValidate() {
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirmpassword");
    if (confirmpassword.value.length != 0) {
        if (password.value == confirmpassword.value) {
            document.getElementById("confirmpasswordError").innerHTML = "";
            return true;
        } else {
            document.getElementById("confirmpasswordError").innerHTML = "Password Not Matched";
            return false;
        }
    }
}

function validated() {
    var successRegistered = document.getElementById("registeredSuccessfulModal");

    if (userNameValidate() && mailValidate() && phoneValidate() && passwordValidate() && passwordValidate()) {
        successRegistered.showModal();
        return false;
    } else {
        alert("Enter Valid Data");
        return false;
    }
}

function succefulRegister() {
    var successfulRegistered = document.getElementById("registeredSuccessfulModal");
    var registerModal = document.querySelector(".Registermodal");
    var loginModal = document.querySelector(".Loginmodal");

    var registerButton = document.getElementById("registeredButton");
    registerButton.addEventListener('click', () => {
        successfulRegistered.close();
        loginModal.showModal();
        registerModal.close();
    });
}

window.addEventListener('scroll', () => {
    var progressPosition = progressSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (progressPosition < screenPosition) {
        showProgress();
    } else {
        hideProgress();
    }
});


// SHIPMENT PAGE TOGGLE

function toggleShipmentPage() {

    document.getElementById('ship').style.display = "none";
    document.getElementById('cartBtn').style.display = "none";
    document.getElementById('shipment').style.display = "block";
    // SHIPMENT DETAILS
    var customerName = document.getElementById("customerName");
    var customerMobile = document.getElementById("customerNumber");
    var customerAddress = document.getElementById("customerAddress");

    document.getElementById("customer").innerHTML = customerName.value;
    document.getElementById("customerMobile").innerHTML = customerMobile.value;
    document.getElementById("customerShippingAddress").innerHTML = customerAddress.value;

}

function backToCart() {
    document.getElementById('ship').style.display = "grid";
    document.getElementById('cartBtn').style.display = "block";
    document.getElementById('shipment').style.display = "none";
}

function payment() {
    document.getElementById('shipment').style.display = "none";
    document.getElementById('paymentSection').style.display = "grid";
}

function backToShippingPage() {
    document.getElementById('shipment').style.display = "grid";
    document.getElementById('paymentSection').style.display = "none";
}

var timeData = new Date();

var hours = 13 - timeData.getHours();
var Minutes = 59 - timeData.getMinutes();
var Seconds = 60 - timeData.getSeconds();

setInterval(() => {
    var cl = document.getElementById('clock');
    if(Seconds==0){
        Seconds = 60;
        if(Minutes==0){
            Minutes = 59
            if(hours==0){
                cl.innerHTML = `Offer Expired`;
            }
            hours--;
        }else{
            Minutes--;
        }
    }else{
        var hr = Math.abs(hours);
        cl.innerHTML = `${hr} : ${Minutes} : ${Seconds--}`;
    }
},1000);


// PAYMENT SUCCESS TOGGLE 
var openModal = document.querySelector("#payNowBtn");
var success = document.querySelector(".paymentModal");

if (openModal) {
    openModal.addEventListener('click', () => {
        success.showModal();
    });
}

var closeModal = document.querySelector("#donePayment");
if (closeModal) {
    closeModal.addEventListener('click', () => {
        success.close();
    });
}

// PAYMENT SUCCESFUL REDIRECT
function redirect() {

    setTimeout(() => {
        window.open("myOrders.html", "_self");
    }, 2000)
}


const swipeImage = (e) => {
    var datas = document.querySelector(".productImageGrid").children;

    document.querySelector(".mainimg").src = e.children[0].src;

    for (var data of datas) {
        data.classList.remove("activeImageHighlight");
        data.classList.remove("imageactive");
    }

    e.classList.add("imageactive");
    e.classList.add("activeImageHighlight");

}

let msg = document.querySelector('.popupMsg');
let popupOffer = document.querySelector('.popupMsg');
let popupOfferClose = document.querySelector('.popupClose');
window.onload = function(){
   setTimeout( () =>{
    msg.showModal();
   },3000); 
}
popupOfferClose.addEventListener('click', () => popupOffer.close());

// ----------------- Silder Offer  ---------------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000
    }
});