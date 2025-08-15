document.addEventListener("DOMContentLoaded", () => {
  const boden = document.getElementById("boden");
  const spielfeld = document.getElementById("spielfeld");

  function setBodenHeight() {
    const bodenHoehe = 100;
    boden.style.height = bodenHoehe + "px";
    boden.style.bottom = "0px";
  }

  window.addEventListener("resize", setBodenHeight);
  setBodenHeight();
});
