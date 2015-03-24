var switcher = document.getElementById("scope-bar");
var output = document.getElementById("output");
var adjustWidth = document.getElementById("adjust-width");
var adjustWidthCap = document.getElementById("adjust-width-caption");

switcher.addEventListener("click", function (e) {
  var type = e.target.value || e.target.parentNode.value;
  output.textContent = "You selected: " + type;
}, false);

adjustWidth.addEventListener("change", function (e) {
  switcher.style.width = adjustWidthCap.textContent = this.value + "px";
}, false);