import {scene, THREE} from './globales.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';
//const scene = new THREE.Scene();
scene.background=new THREE.Color(0x591405);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
//declaranbdo renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const fbx = new FBXLoader();
//const grupo1=new THREE.Group();
fbx.load('3dmodels/aloe.fbx',function(personaje){
    //personaje.position.set(-100,0,-100);
    personaje.scale.set(100, 100, 100)
    personaje.position.set(0,0,0);
    personaje.name="p";
    scene.add(personaje);
    console.log("este es el objeto scene:");
    console.log(scene.children);
    var objetos3d=scene.children;
    console.log(objetos3d[0])
    var objetoAnimal=objetos3d[0];
    console.log("este es eo objeto definiti")
    console.log(objetoAnimal.name);
    //console.log(scene);
});
fbx.load('3dmodels/aloe.fbx',function(personaje){
    //personaje.position.set(-100,0,-100);
    personaje.scale.set(100, 100, 100)
    personaje.position.set(50,0,50);
    personaje.name="p2";
    scene.add(personaje);
    console.log("este es el objeto scene:");
    console.log(scene.children);
    var objetos3d=scene.children;
    console.log(objetos3d[0])
    var objetoAnimal=objetos3d[0];
    console.log("este es eo objeto definiti")
    console.log(objetoAnimal.name);
    //console.log(scene);
});
var posx=0, posy=0, posz=0;

/*
const geometry = new THREE.BoxGeometry( 20, 20, 20 );
for ( let i = 0; i < 3; i ++ ) {

    const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

    object.position.x = Math.random() * 800 - 400;
    object.position.y = Math.random() * 800 - 400;
    object.position.z = Math.random() * 800 - 400;

    object.rotation.x = Math.random() * 2 * Math.PI;
    object.rotation.y = Math.random() * 2 * Math.PI;
    object.rotation.z = Math.random() * 2 * Math.PI;

    object.scale.x = Math.random() + 0.5;
    object.scale.y = Math.random() + 0.5;
    object.scale.z = Math.random() + 0.5;

    //le asignamos un nombre
    object.name="cubo"+i;

    scene.add( object );

}
*/
/*
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x0AE1C7  } );
const cube = new THREE.Mesh( geometry, material );
cube.name="personaje";
cube.position.set(0,40,0);
cube.scale.set(20,20,20);
scene.add(cube);*/
//scene.add(grupo1)
//variables de raycaster
let raycaster, raycaster2, raycaster3, raycaster4;
let raycaster5, raycaster6, raycaster7, raycaster8;
let raycaster9, raycaster10, raycaster11, raycaster12;
let raycaster13, raycaster14, raycaster15, raycaster16;
//creamos la instancian de raycaster
raycaster = new THREE.Raycaster();
raycaster2 = new THREE.Raycaster();
raycaster3 = new THREE.Raycaster();
raycaster4 = new THREE.Raycaster();

raycaster5 = new THREE.Raycaster();
raycaster6 = new THREE.Raycaster();
raycaster7 = new THREE.Raycaster();
raycaster8 = new THREE.Raycaster();

raycaster9 = new THREE.Raycaster();
raycaster10 = new THREE.Raycaster();
raycaster11 = new THREE.Raycaster();
raycaster12 = new THREE.Raycaster();

raycaster13 = new THREE.Raycaster();
raycaster14 = new THREE.Raycaster();
raycaster15 = new THREE.Raycaster();
raycaster16 = new THREE.Raycaster();

//variables de interseccion
var INTERSECTED, INTERSECTED2, INTERSECTED3, INTERSECTED4;
var INTERSECTED5, INTERSECTED6, INTERSECTED7, INTERSECTED8;
var INTERSECTED9, INTERSECTED10, INTERSECTED11, INTERSECTED12;
var INTERSECTED13, INTERSECTED14, INTERSECTED15, INTERSECTED16;
let theta = 0;
//declarando el array contenedor de nombres de objetos
var arreglo=new Array();
//instanciando los puntos
const pointer = new THREE.Vector2();
const pointer2 = new THREE.Vector2();
const pointer3 = new THREE.Vector2();
const pointer4 = new THREE.Vector2();

const pointer5 = new THREE.Vector2();
const pointer6 = new THREE.Vector2();
const pointer7 = new THREE.Vector2();
const pointer8 = new THREE.Vector2();

const pointer9 = new THREE.Vector2();
const pointer10 = new THREE.Vector2();
const pointer11 = new THREE.Vector2();
const pointer12 = new THREE.Vector2();

const pointer13 = new THREE.Vector2();
const pointer14 = new THREE.Vector2();
const pointer15 = new THREE.Vector2();
const pointer16 = new THREE.Vector2();

//calculos de las posiciones de los puntos 
var base = window.innerWidth;
var altura = window.innerHeight;
//console.log("base: "+base);
//console.log("altura: "+altura);
var resultadoBase=base/3;

var resultadoBaseEntre2 = base/2;
var resultadoAltura=altura/3;
var resultadoAlturaEntre2=resultadoAltura/2;
var resultadobaseMas5=resultadoAltura+resultadoAlturaEntre2;
var resultadoAlturaEntre2=altura/2;
var resultadoEsquinaDerechaBase=resultadoBase*2;
var resultadoEsquinaDerechaAltura=resultadoAltura*2;
console.log("resultado de la division base: "+resultadoBase+"  altura: "+resultadoAltura)

//pedimos una referencia de los div respectivos a los puntos
var d1=document.getElementById("d1");
var d2=document.getElementById("d2");
var d3=document.getElementById("d3");
var d4=document.getElementById("d4");

var d5=document.getElementById("d5");
var d6=document.getElementById("d6");
var d7=document.getElementById("d7");
var d8=document.getElementById("d8");

var d9=document.getElementById("d9");
var d10=document.getElementById("d10");
var d11=document.getElementById("d11");
var d12=document.getElementById("d12");

var d13=document.getElementById("d13");
var d14=document.getElementById("d14");
var d15=document.getElementById("d15");
var d16=document.getElementById("d16");
//dar posiciones a nuestros puntos de referencia
/*
d1.style.width=60+'px';
d1.style.height=60+'px';*/
//d1.style.position = "absolute";
//posicion en x 
d1.style.left = resultadoBase-30+'px';
//posicion en y
d1.style.top = resultadoAltura-30+'px';

d2.style.left = resultadoEsquinaDerechaBase-30+'px';
d2.style.top = resultadoAltura-30+'px';

d3.style.left = resultadoEsquinaDerechaBase-30+'px';
d3.style.top = resultadoEsquinaDerechaAltura-30+'px';

d4.style.left = resultadoBase-30+'px';
d4.style.top = resultadoEsquinaDerechaAltura-30+'px';

d5.style.left = resultadoBase-30+'px';
d5.style.top = resultadoAlturaEntre2-30+'px';

d6.style.left = resultadoBaseEntre2-30+'px';
d6.style.top = resultadoAltura-30+'px';

d7.style.left = resultadoBaseEntre2-30+'px';
d7.style.top = resultadoEsquinaDerechaAltura-30+'px';

d8.style.left = resultadoEsquinaDerechaBase-30+'px';
d8.style.top = resultadobaseMas5-30+'px';
//cuadro selection
var selection=document.getElementById("selection");
//tamaño de selection 
selection.style.width = resultadoBase+'px';
selection.style.height = resultadoAltura+'px';
selection.style.left = resultadoBase+'px';
selection.style.top = resultadoAltura+'px';



//especificamos las posiciones de todos los puntos
function onPointerMove() {

    //pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    //pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    var base = window.innerWidth;
    var altura = window.innerHeight;
    //console.log("base: "+base);
    //console.log("altura: "+altura);
    var resultadoBase=base/3;
    
    var resultadoBaseEntre2 = base/2;
    var resultadoAltura=altura/3;
    var resultadoAlturaEntre2=resultadoAltura/2;
    var resultadobaseMas5=resultadoAltura+resultadoAlturaEntre2;
    var resultadoAlturaEntre2=altura/2;
    var resultadoEsquinaDerechaBase=resultadoBase*2;
    var resultadoEsquinaDerechaAltura=resultadoAltura*2;


    //console.log("resultado de la division base: "+resultadoBase+"  altura: "+resultadoAltura)

    pointer.x = resultadoBase;
    pointer.y = resultadoAltura;
    //console.log("punto x: "+punto.x=event.);
    pointer2.x = resultadoEsquinaDerechaBase;
    pointer2.y = resultadoAltura;

    pointer3.x = resultadoEsquinaDerechaBase;
    pointer3.y = resultadoEsquinaDerechaAltura;

    pointer4.x = resultadoBase;
    pointer4.y = resultadoEsquinaDerechaAltura;

    pointer5.x = resultadoBase;
    pointer5.y = resultadoAlturaEntre2;

    pointer6.x = resultadoBaseEntre2;
    pointer6.y = resultadoAltura;
    
    pointer7.x = resultadoBaseEntre2;
    pointer7.y = resultadoEsquinaDerechaAltura;

    pointer8.x = resultadoEsquinaDerechaBase;
    pointer8.y = resultadobaseMas5;

}

camera.position.set(100,200,300);

//construccion de panel
//var y = window.innerHeight / 3;
//var x = window.innerWidth / 3;
/*
const geometryPanel=new THREE.PlaneGeometry(5,5);
const materialPanel=new THREE.MeshBasicMaterial({color:0x11E10A});
const plane = new THREE.Mesh(geometryPanel, materialPanel);
scene.add(plane);*/

function render() {

    //theta += 0.1;

    /*
    const radius = 100;
    camera.position.x = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
    camera.position.y = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
    camera.position.z = radius * Math.cos( THREE.MathUtils.degToRad( theta ) );
    camera.lookAt( scene.position );

    camera.updateMatrixWorld();*/

    // find intersections

    raycaster.setFromCamera( pointer, camera );
    raycaster2.setFromCamera( pointer2, camera );
    raycaster3.setFromCamera( pointer3, camera );
    raycaster4.setFromCamera( pointer4, camera );

    raycaster5.setFromCamera( pointer5, camera );
    raycaster6.setFromCamera( pointer6, camera );
    raycaster7.setFromCamera( pointer7, camera );
    raycaster8.setFromCamera( pointer8, camera );

    raycaster9.setFromCamera( pointer9, camera );
    raycaster10.setFromCamera( pointer10, camera );
    raycaster11.setFromCamera( pointer11, camera );
    raycaster12.setFromCamera( pointer12, camera );

    raycaster13.setFromCamera( pointer13, camera );
    raycaster14.setFromCamera( pointer14, camera );
    raycaster15.setFromCamera( pointer15, camera );
    raycaster16.setFromCamera( pointer16, camera );

    const intersects = raycaster.intersectObjects( scene.children, true);
    const intersects2 = raycaster2.intersectObjects( scene.children, true);
    const intersects3 = raycaster3.intersectObjects( scene.children, true);
    const intersects4 = raycaster4.intersectObjects( scene.children, true);

    const intersects5 = raycaster5.intersectObjects( scene.children, true);
    const intersects6 = raycaster6.intersectObjects( scene.children, true);
    const intersects7 = raycaster7.intersectObjects( scene.children, true);
    const intersects8 = raycaster8.intersectObjects( scene.children, true);

    const intersects9 = raycaster9.intersectObjects( scene.children, true);
    const intersects10 = raycaster10.intersectObjects( scene.children, true);
    const intersects11 = raycaster11.intersectObjects( scene.children, true);
    const intersects12 = raycaster12.intersectObjects( scene.children, true);

    const intersects13 = raycaster13.intersectObjects( scene.children, true);
    const intersects14 = raycaster14.intersectObjects( scene.children, true);
    const intersects15 = raycaster15.intersectObjects( scene.children, true);
    const intersects16 = raycaster16.intersectObjects( scene.children, true);

    
    if(intersects.length > 0){
        if(INTERSECTED != intersects[ 0 ].object){
            console.log("este es el objeto scene:");
            console.log(scene.children);
            var objetos3d=scene.children;
            //console.log(objetos3d)
            for(var i=0;i<objeto3d.length;i++){
                if(objeto3d[i]==intersects2[ 0 ].object){
                    console.log("esta es igual"+objeto3d[i])
                }
            }
            var objetoAnimal=objetos3d;
            console.log("este es eo objeto definiti")
            console.log(objetoAnimal.name);
            const found = arreglo.find(element => element === objetoAnimal.name);
            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=objetoAnimal.name;
                contenedor.append(div);
                arreglo.push(objetoAnimal.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 2");
        }
    }

    if(intersects2.length > 0){
        if(INTERSECTED2 != intersects2[ 0 ].object){
            const found = arreglo.find(element => element === intersects2[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects2[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects2[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 2");
        }
    }
    if(intersects3.length > 0){
        if(INTERSECTED3 != intersects3[ 0 ].object){
            const found = arreglo.find(element => element === intersects3[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects3[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects3[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 3");
        }
    }
    if(intersects4.length > 0){
        if(INTERSECTED4 != intersects4[ 0 ].object){
            const found = arreglo.find(element => element === intersects4[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects4[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects4[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 4");
        }
    }
    if ( intersects5.length > 0 ) {
        if ( INTERSECTED5 != intersects5[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects5[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects5[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects5[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 5");
        }
    }
    if ( intersects6.length > 0 ) {
        if ( INTERSECTED6 != intersects6[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects6[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects6[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects6[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 6");
        }
    }
    if ( intersects7.length > 0 ) {
        if ( INTERSECTED7 != intersects7[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects7[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects7[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects7[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }

            console.log("cambio de color 7");
        }
    }
    if ( intersects8.length > 0 ) {
        if ( INTERSECTED8 != intersects8[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects8[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects8[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects8[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            console.log("cambio de color 8");
        }
    }
    if ( intersects9.length > 0 ) {
        if ( INTERSECTED9 != intersects9[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects9[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects9[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects9[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
        }
    }
    if ( intersects10.length > 0 ) {
        if ( INTERSECTED10 != intersects10[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects10[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects10[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects10[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
        }
    }
    if ( intersects11.length > 0 ) {
        if ( INTERSECTED11 != intersects11[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects11[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects11[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects11[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
        }
    }
    if ( intersects.length > 0 ) {
        if ( INTERSECTED12 != intersects12[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects12[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects12[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects12[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
        }
    }
    if ( intersects13.length > 0 ) {
        if ( INTERSECTED13 != intersects13[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects13[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects13[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects13[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
        }
    }
    if ( intersects14.length > 0 ) {
        if ( INTERSECTED14 != intersects14[ 0 ].object ) {

            const found = arreglo.find(element => element === intersects14[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects14[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects14[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
        }
    }
    if ( intersects15.length > 0 ) {
        if ( INTERSECTED15 != intersects15[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects15[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects15[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects15[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
        }
    }
    if ( intersects16.length > 0 ) {
        if ( INTERSECTED16 != intersects16[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects16[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects16[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects16[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
        }
    }
    else {

        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
        if ( INTERSECTED2 ) INTERSECTED2.material.emissive.setHex( INTERSECTED2.currentHex);
        if ( INTERSECTED3 ) INTERSECTED3.material.emissive.setHex( INTERSECTED3.currentHex );
        if ( INTERSECTED4 ) INTERSECTED4.material.emissive.setHex( INTERSECTED4.currentHex );
        if ( INTERSECTED5 ) INTERSECTED5.material.emissive.setHex( INTERSECTED5.currentHex );
        if ( INTERSECTED6 ) INTERSECTED6.material.emissive.setHex( INTERSECTED6.currentHex );
        if ( INTERSECTED7 ) INTERSECTED7.material.emissive.setHex( INTERSECTED7.currentHex );
        if ( INTERSECTED8 ) INTERSECTED8.material.emissive.setHex( INTERSECTED8.currentHex );
        if ( INTERSECTED9 ) INTERSECTED9.material.emissive.setHex( INTERSECTED9.currentHex );
        if ( INTERSECTED10 ) INTERSECTED10.material.emissive.setHex( INTERSECTED10.currentHex );
        if ( INTERSECTED11 ) INTERSECTED11.material.emissive.setHex( INTERSECTED11.currentHex );
        if ( INTERSECTED12 ) INTERSECTED12.material.emissive.setHex( INTERSECTED12.currentHex );
        if ( INTERSECTED13 ) INTERSECTED13.material.emissive.setHex( INTERSECTED13.currentHex );
        if ( INTERSECTED14 ) INTERSECTED14.material.emissive.setHex( INTERSECTED14.currentHex );
        if ( INTERSECTED15 ) INTERSECTED15.material.emissive.setHex( INTERSECTED15.currentHex );
        if ( INTERSECTED16 ) INTERSECTED16.material.emissive.setHex( INTERSECTED16.currentHex );

        INTERSECTED = null;
        INTERSECTED2 = null;
        INTERSECTED3 = null;
        INTERSECTED4 = null;
        INTERSECTED5 = null;
        INTERSECTED6 = null;
        INTERSECTED7 = null;
        INTERSECTED8 = null;
        INTERSECTED9 = null;
        INTERSECTED10 = null;
        INTERSECTED11 = null;
        INTERSECTED12 = null;
        INTERSECTED13 = null;
        INTERSECTED14 = null;
        INTERSECTED15 = null;
        INTERSECTED16 = null;

    }

    renderer.render( scene, camera );

}

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 100, 0);
controls.update();

function animate() {
    requestAnimationFrame( animate );
    
    render();
    onPointerMove();
    /*
    var object = scene.getObjectByName("p");
    console.log("estos son lso objetos")
    console.log(object)*/
};
animate();
console.log(scene.children);
var objetos3d=scene.children;
console.log(objetos3d)

/*
var object = scene.getObject();
console.log("estos son lso objetos")
console.log(object)*/