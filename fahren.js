var objekt =
 document.getElementById("gpanz")

function links() {
  posX -= 10;
  Objekt.style.left = posX + "px";
}

function rechts() {
  posX += 10;
  objekt.style.left = posX + "px";
}

ocobjekt.style
document.addEventListener("keydown",
                          function(event) {
                            if (event.key === "d") {
                              links();
                            } else if (event.key === "a") {
                              rechts();
                            }
                          });
