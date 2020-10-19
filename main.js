
let p = {
    flecha: document.querySelector('#buttn'),
}



let m = {

    reflejo:function(){

        setInterval(function(){

            p.flecha.style.opacity = p.flecha.style.opacity == .5 ? 1 : .5;

        }, 1000)


    },


}





m.reflejo()

