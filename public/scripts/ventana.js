class Ventana{
animalCapturado(){
    var divoverlay= document.createElement('div');
    divoverlay.setAttribute("id","overlay");
    divoverlay.setAttribute("class","overlay");
    var divpopup= document.createElement('div');
    divpopup.setAttribute("id","popup");
    divpopup.setAttribute("style","background-color: rgba(187, 179, 179, 0.5)");
    var a=document.createElement('a');
    a.setAttribute("href","#");
    a.onclick=cerrar();
    a.setAttribute("class","btn-cerrar-popup");
    var i=document.createElement("i");
    i.setAttribute("class","fas fa-times");
    a.append(i);
    divpopup.append(a);
    divoverlay.append(divpopup);
    document.body.append(divoverlay);
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    overlay.classList.add('active');
    popup.classList.add('active');
} 

}

function cerrar(){
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    overlay.classList.remove('active');
    popup.classList.remove('active');
}
export {Ventana};