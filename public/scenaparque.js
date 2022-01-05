import {scene, THREE} from './globales.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';
//const scene = new THREE.Scene();
scene.background=new THREE.Color(0x591405);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//declaranbdo renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const fbx = new FBXLoader();
//const grupo1=new THREE.Group();
fbx.load('3dmodels/chibi.fbx',function(personaje){
    //personaje.position.set(-100,0,-100);
    personaje.name="personaje122312";
    scene.add(personaje);
    
    //grupo1.add(personaje);
    
});

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
//creamos la instancian de raycaster
raycaster = new THREE.Raycaster();
raycaster2 = new THREE.Raycaster();
raycaster3 = new THREE.Raycaster();
raycaster4 = new THREE.Raycaster();

raycaster5 = new THREE.Raycaster();
raycaster6 = new THREE.Raycaster();
raycaster7 = new THREE.Raycaster();
raycaster8 = new THREE.Raycaster();

//variables de interseccion
var INTERSECTED, INTERSECTED2, INTERSECTED3, INTERSECTED4;
var INTERSECTED5, INTERSECTED6, INTERSECTED7, INTERSECTED8;
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

    const intersects = raycaster.intersectObjects( scene.children, false );
    const intersects2 = raycaster2.intersectObjects( scene.children, false );
    const intersects3 = raycaster3.intersectObjects( scene.children, false );
    const intersects4 = raycaster4.intersectObjects( scene.children, false );

    const intersects5 = raycaster5.intersectObjects( scene.children, false );
    const intersects6 = raycaster6.intersectObjects( scene.children, false );
    const intersects7 = raycaster7.intersectObjects( scene.children, false );
    const intersects8 = raycaster8.intersectObjects( scene.children, false );

    if ( intersects.length > 0 ) {
        if ( INTERSECTED != intersects[ 0 ].object ) {
            const found = arreglo.find(element => element === intersects[ 0 ].object.name);

            if(found===undefined){
                var contenedor=document.getElementById('contenedorObjetos');
                var div=document.createElement('div');
                div.setAttribute("id","dato");
                div.innerText=intersects[ 0 ].object.name;
                contenedor.append(div);
                arreglo.push(intersects[ 0 ].object.name);
                if(arreglo.length===5){
                    alert("haz encontrado todos los objetos");
                }
            }
            
            console.log("cambio de color 1");
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
    else {

        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

        INTERSECTED = null;

    }

    renderer.render( scene, camera );

}

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 100, 0);
controls.update();

function animate() {
    requestAnimationFrame( animate );
    
    render();
    onPointerMove()
};
animate();
console.log(scene.children);