"use strict";

var p = {
  boton: document.querySelector('#date'),
  fecha: document.querySelector('#date1')
};
var m = {
  Inicio: function Inicio() {
    p.boton.addEventListener("click", function () {
      p.fecha.innerHTML = Date();
    });
  }
};
m.Inicio();