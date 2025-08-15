document.addEventListener("DOMContentLoaded", () => {
  const panzer = document.getElementById("gpanz");
  const spielfeld = document.getElementById("spielfeld");

  const speed = 5;
  let posX = 0;
  let movingLeft = false;
  let movingRight = false;

  function update() {
    const maxX = spielfeld.clientWidth - panzer.offsetWidth;

    if (movingLeft) posX -= speed;
    if (movingRight) posX += speed;

    posX = Math.max(0, Math.min(posX, maxX));

    panzer.style.left = posX + "px";
    panzer.style.bottom = "0px"; 

    panzer.style.transform = movingLeft ? "rotate(-5deg)" : movingRight ? "rotate(5deg)" : "rotate(0deg)";

    requestAnimationFrame(update);
  }

  document.addEventListener("keydown", e => {
    switch(e.key.toLowerCase()) {
      case "a":
      case "arrowleft":
        movingLeft = true;
        break;
      case "d":
      case "arrowright":
        movingRight = true;
        break;
    }
  });

  document.addEventListener("keyup", e => {
    switch(e.key.toLowerCase()) {
      case "a":
      case "arrowleft":
        movingLeft = false;
        break;
      case "d":
      case "arrowright":
        movingRight = false;
        break;
    }
  });

  window.addEventListener("resize", () => {
    const maxX = spielfeld.clientWidth - panzer.offsetWidth;
    if (posX > maxX) posX = maxX;
  });

  update();
});
