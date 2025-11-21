const card = document.querySelector(".card");

if (!card) {
    console.error("CARD NOT FOUND — HTML might be overwritten.");
}

// Hide the card first
card.style.opacity = "0";
card.style.visibility = "hidden";

// Read code from URL
const code = window.location.hash.substring(1);

console.log("Scanned code:", code);

// Unlock
if (code === "XMAS20dfudjie5ehjfdf") {
    console.log("Unlock OK");

    card.style.opacity = "1";
    card.style.visibility = "visible";

} else {
    console.log("Wrong code — lock");

    document.body.innerHTML = `
        <h2 style="font-family: Verdana; text-align:center;">
            Scan the QR code to unlock!
        </h2>
    `;
}
