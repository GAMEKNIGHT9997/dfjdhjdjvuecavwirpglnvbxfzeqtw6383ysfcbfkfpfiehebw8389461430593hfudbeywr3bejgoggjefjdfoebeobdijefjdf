// Show something so the page isn't blank
document.body.innerHTML = "Loading…";

// Grab the code from the URL
const code = window.location.hash.substring(1);

console.log("Scanned code:", code); // helps you debug

// Check it
if (code === "XMAS20dfudjie5ehjfdf") {
	document.body.innerHTML = "Unlocked! Starting…";
	// your game start here
	// game.start();
} else {
	document.body.innerHTML = "Scan the QR code to unlock!";
}
