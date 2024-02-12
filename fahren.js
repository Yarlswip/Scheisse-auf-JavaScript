var objekt = document.getElementById("gpanz")
var posX = 0 

function links() {
	posX -= 10;
	objekt.style.left = posX + "px";
}

function rechts() {
	posX += 10;
	objekt.style.left = posX + "px";
}

document.addEventListener("keydown",
function(event) {
	if (event.key === "a") {
		links();
	} else if (event.key === "d") {
		rechts();
	}
});
