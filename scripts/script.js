"use strict";
let textbox = document.getElementById("result");
function liveScreen(enter) {
  if (enter === "=") textbox.value = eval(textbox.value);
  else if (enter === "c") textbox.value = "";
  else textbox.value += enter;
}
