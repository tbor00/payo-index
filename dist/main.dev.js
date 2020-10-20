"use strict";

var p = {
  flecha: document.querySelector('#buttn'),
  div: document.getElementById('secondp'),
  button: document.querySelector('#mostrar')
};
var m = {
  reflejo: function reflejo() {
    setInterval(function () {
      p.flecha.style.opacity = p.flecha.style.opacity == .5 ? 1 : .5;
    }, 1000);
  },
  mostrar: function mostrar() {
    p.button.addEventListener('click', function () {
      if (p.div.style.display == "none") {
        m.show();
      } else if (p.div.style.display == "flex") m.unshow();
    });
  },
  show: function show() {
    p.button.innerHTML = "Ver menos";
    p.div.style.display = "flex";
  },
  unshow: function unshow() {
    p.button.innerHTML = "Ver más";
    p.div.style.display = "none";
  }
};
m.reflejo();