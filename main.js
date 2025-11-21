
const card = document.querySelector(".card");
card.style.opacity = "0";
card.style.visibility = "hidden";


const code = window.location.hash.substring(1);


if (code === "XMAS20dfudjie5ehjfdf") {
    console.log("Unlock OK");
    card.style.opacity = "1";
    card.style.visibility = "visible";
} else {
    console.log("Wrong code — lock");
    document.body.innerHTML = "<h2>Scan the QR code to unlock!</h2>";
}
