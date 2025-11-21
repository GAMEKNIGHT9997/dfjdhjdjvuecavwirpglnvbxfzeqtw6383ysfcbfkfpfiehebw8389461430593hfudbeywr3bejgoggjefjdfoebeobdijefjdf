const card = document.querySelector(".card");

// Hide card by default
card.style.opacity = "0";
card.style.visibility = "hidden";

// Read code from URL
const code = window.location.hash.substring(1);

console.log("Scanned code:", code);

// Unlock check
if (code === "XMAS20dfudjie5ehjfdf") {
    console.log("Unlock OK");
    card.style.opacity = "1";
    card.style.visibility = "visible";

    // Add click event to flip the card
    card.addEventListener("click", () => {
        card.classList.toggle("open");
    });

} else {
    console.log("Wrong code — lock");
    document.body.innerHTML = `
        <h2 style="font-family: Verdana; text-align:center;">
            Scan the QR code to unlock!
        </h2>
    `;
}
