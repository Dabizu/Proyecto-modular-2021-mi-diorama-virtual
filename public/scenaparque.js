import { scene, THREE } from './globales.js';
//import { Ventana } from './scripts/ventana.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';

//const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33FFBB);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
//declaranbdo renderer
const renderer = new THREE.WebGLRenderer();

document.body.appendChild(renderer.domElement);

const geometry2 = new THREE.BoxGeometry(200, 100, 100);
var wireframeMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ee00, wireframe: true, transparent: false, opacity: 1, side: THREE.BackSide });

var grupo = new THREE.Group();

function pedirAve(nombre) {
    const url = '/animales?nombre=' + nombre;
    const http = new XMLHttpRequest()

    http.open("POST", url)
    http.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var resultado = JSON.parse(this.responseText)
            console.log(resultado[0].nombre)
            
        }
    }
    http.send()
}

//scene.add(cube);

/*
var cube2 = new THREE.Mesh( geometry, wireframeMaterial2 );
cube2.position.set(120, 120, 120)
cube2.name="mono";  
scene.add( cube2 );*/


const fbx = new FBXLoader();
//const grupo1=new THREE.Group();
fbx.load('3dmodels/aguila-real4.fbx', function (aguila) {
    //personaje.position.set(-100,0,-100);
    aguila.scale.set(1, 1, 1)
    aguila.position.set(200, 1000, 200);
    aguila.name = "aguila real";
    //scene.add(aguila);
    grupo.add(aguila);
    /*console.log("este es el objeto scene:");
    console.log(scene.children);
    var objetos3d = scene.children;
    console.log(objetos3d[0])
    var objetoAnimal = objetos3d[0];
    console.log("este es el objeto definido")
    console.log(objetoAnimal.name);*/
    //console.log(scene);
});
//tamaño del cubo
const geometry = new THREE.BoxGeometry(500, 300, 300);
//material del cubo
var wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ee00, wireframe: true, transparent: true, opacity: 1 });
//cubo
var cube = new THREE.Mesh(geometry, wireframeMaterial);
cube.position.set(200, 1000, 200);
cube.name = "aguila real";
scene.add(grupo);
scene.add(cube)
/*
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
*/
var posx = 0, posy = 0, posz = 0;

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
let raycaster17, raycaster18, raycaster19, raycaster20;
let raycaster21, raycaster22, raycaster23, raycaster24;
let raycaster25, raycaster26, raycaster27, raycaster28;
let raycaster29, raycaster30, raycaster31, raycaster32;

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

raycaster17 = new THREE.Raycaster();
raycaster18 = new THREE.Raycaster();
raycaster19 = new THREE.Raycaster();
raycaster20 = new THREE.Raycaster();

raycaster21 = new THREE.Raycaster();
raycaster22 = new THREE.Raycaster();
raycaster23 = new THREE.Raycaster();
raycaster24 = new THREE.Raycaster();

raycaster25 = new THREE.Raycaster();
raycaster26 = new THREE.Raycaster();
raycaster27 = new THREE.Raycaster();
raycaster28 = new THREE.Raycaster();

raycaster29 = new THREE.Raycaster();
raycaster30 = new THREE.Raycaster();
raycaster31 = new THREE.Raycaster();
raycaster32 = new THREE.Raycaster();

//variables de interseccion
var INTERSECTED, INTERSECTED2, INTERSECTED3, INTERSECTED4;
var INTERSECTED5, INTERSECTED6, INTERSECTED7, INTERSECTED8;
var INTERSECTED9, INTERSECTED10, INTERSECTED11, INTERSECTED12;
var INTERSECTED13, INTERSECTED14, INTERSECTED15, INTERSECTED16;
var INTERSECTED17, INTERSECTED18, INTERSECTED19, INTERSECTED20;
var INTERSECTED21, INTERSECTED22, INTERSECTED23, INTERSECTED24;
var INTERSECTED25, INTERSECTED26, INTERSECTED27, INTERSECTED28;
var INTERSECTED29, INTERSECTED30, INTERSECTED31, INTERSECTED32;

let theta = 0;
//declarando el array contenedor de nombres de objetos
var arreglo = new Array();
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

const pointer17 = new THREE.Vector2();
const pointer18 = new THREE.Vector2();
const pointer19 = new THREE.Vector2();
const pointer20 = new THREE.Vector2();

const pointer21 = new THREE.Vector2();
const pointer22 = new THREE.Vector2();
const pointer23 = new THREE.Vector2();
const pointer24 = new THREE.Vector2();

const pointer25 = new THREE.Vector2();
const pointer26 = new THREE.Vector2();
const pointer27 = new THREE.Vector2();
const pointer28 = new THREE.Vector2();

const pointer29 = new THREE.Vector2();
const pointer30 = new THREE.Vector2();
const pointer31 = new THREE.Vector2();
const pointer32 = new THREE.Vector2();
//calculos de las posiciones de los puntos 
var base = window.innerWidth;
var altura = window.innerHeight;
//console.log("base: "+base);
//console.log("altura: "+altura);
var resultadoBase = base / 3;
var resultadoAltura = altura / 3;

var rb1 = resultadoBase / 8;

var ra1 = resultadoAltura / 8;


/*
var resultadoBaseEntre2 = base/2;
var resultadoAlturaEntre2=resultadoAltura/2;
var resultadobaseMas5=resultadoAltura+resultadoAlturaEntre2;
var resultadoAlturaEntre2=altura/2;
var resultadoEsquinaDerechaBase=resultadoBase*2;
var resultadoEsquinaDerechaAltura=resultadoAltura*2;
console.log("resultado de la division base: "+resultadoBase+"  altura: "+resultadoAltura)*/

//pedimos una referencia de los div respectivos a los puntos
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var d6 = document.getElementById("d6");
var d7 = document.getElementById("d7");
var d8 = document.getElementById("d8");

var d9 = document.getElementById("d9");
var d10 = document.getElementById("d10");
var d11 = document.getElementById("d11");
var d12 = document.getElementById("d12");
var d13 = document.getElementById("d13");
var d14 = document.getElementById("d14");
var d15 = document.getElementById("d15");
var d16 = document.getElementById("d16");

var d17 = document.getElementById("d17");
var d18 = document.getElementById("d18");
var d19 = document.getElementById("d19");
var d20 = document.getElementById("d20");
var d21 = document.getElementById("d21");
var d22 = document.getElementById("d22");
var d23 = document.getElementById("d23");
var d24 = document.getElementById("d24");

var d25 = document.getElementById("d25");
var d26 = document.getElementById("d26");
var d27 = document.getElementById("d27");
var d28 = document.getElementById("d28");
var d29 = document.getElementById("d29");
var d30 = document.getElementById("d30");
var d31 = document.getElementById("d31");
var d32 = document.getElementById("d32");

//dar posiciones a nuestros puntos de referencia
/*
d1.style.width=60+'px';
d1.style.height=60+'px';*/
//d1.style.position = "absolute";

//cuadro selection
var selection = document.getElementById("selection");

//luz
const directionalLight = new THREE.DirectionalLight('#ffffff', 4)
directionalLight.castShadow = true
directionalLight.shadow.camera.far = 15
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(3.5, 2, - 1.25)
scene.add(directionalLight)

//especificamos las posiciones de todos los puntos
function onPointerMove() {
    //calculos de las posiciones de los puntos 
    var base = window.innerWidth;
    var altura = window.innerHeight;
    //console.log("base: "+base);
    //console.log("altura: "+altura);
    var resultadoBase = base / 3;
    var resultadoAltura = altura / 3;

    var rb1 = resultadoBase / 8;

    var ra1 = resultadoAltura / 8;

    //arriba
    d1.style.left = resultadoBase + rb1 - 5 + 'px';
    d1.style.top = resultadoAltura - 5 + 'px';

    d2.style.left = resultadoBase + rb1 + rb1 - 5 + 'px';
    d2.style.top = resultadoAltura - 5 + 'px';

    d3.style.left = resultadoBase + rb1 + rb1 + rb1 - 5 + 'px';
    d3.style.top = resultadoAltura - 5 + 'px';

    d4.style.left = resultadoBase + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    d4.style.top = resultadoAltura - 5 + 'px';

    d5.style.left = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    d5.style.top = resultadoAltura - 5 + 'px';

    d6.style.left = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    d6.style.top = resultadoAltura - 5 + 'px';

    d7.style.left = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    d7.style.top = resultadoAltura - 5 + 'px';

    //posicion en x 
    d8.style.left = resultadoBase + resultadoBase - 5 + 'px';
    //posicion en y
    d8.style.top = resultadoAltura - 5 + 'px';

    //derecha
    d9.style.left = resultadoBase + resultadoBase - 5 + 'px';
    d9.style.top = resultadoAltura + ra1 - 5 + 'px';


    d10.style.left = resultadoBase + resultadoBase - 5 + 'px';
    d10.style.top = resultadoAltura + ra1 + ra1 - 5 + 'px';

    d11.style.left = resultadoBase + resultadoBase - 5 + 'px';
    d11.style.top = resultadoAltura + ra1 + ra1 + ra1 - 5 + 'px';

    d12.style.left = resultadoBase + resultadoBase - 5 + 'px';
    d12.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    d13.style.left = resultadoBase + resultadoBase - 5 + 'px';
    d13.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    d14.style.left = resultadoBase + resultadoBase - 5 + 'px';
    d14.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    d15.style.left = resultadoBase + resultadoBase - 5 + 'px';
    d15.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    d16.style.left = resultadoBase + resultadoBase - 5 + 'px';
    d16.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    //abajo
    d17.style.left = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    d17.style.top = resultadoAltura + resultadoAltura - 5 + 'px';

    d18.style.left = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    d18.style.top = resultadoAltura + resultadoAltura - 5 + 'px';

    d19.style.left = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    d19.style.top = resultadoAltura + resultadoAltura - 5 + 'px';

    d20.style.left = resultadoBase + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    d20.style.top = resultadoAltura + resultadoAltura - 5 + 'px';

    d21.style.left = resultadoBase + rb1 + rb1 + rb1 - 5 + 'px';
    d21.style.top = resultadoAltura + resultadoAltura - 5 + 'px';

    d22.style.left = resultadoBase + rb1 + rb1 - 5 + 'px';
    d22.style.top = resultadoAltura + resultadoAltura - 5 + 'px';

    d23.style.left = resultadoBase + rb1 - 5 + 'px';
    d23.style.top = resultadoAltura + resultadoAltura - 5 + 'px';

    d24.style.left = resultadoBase - 5 + 'px';
    d24.style.top = resultadoAltura + resultadoAltura - 5 + 'px';

    //izquierda
    d25.style.left = resultadoBase - 5 + 'px';
    d25.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    d26.style.left = resultadoBase - 5 + 'px';
    d26.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    d27.style.left = resultadoBase - 5 + 'px';
    d27.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    d28.style.left = resultadoBase - 5 + 'px';
    d28.style.top = resultadoAltura + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    d29.style.left = resultadoBase - 5 + 'px';
    d29.style.top = resultadoAltura + ra1 + ra1 + ra1 - 5 + 'px';

    d30.style.left = resultadoBase - 5 + 'px';
    d30.style.top = resultadoAltura + ra1 + ra1 - 5 + 'px';

    d31.style.left = resultadoBase - 5 + 'px';
    d31.style.top = resultadoAltura + ra1 - 5 + 'px';

    d32.style.left = resultadoBase - 5 + 'px';
    d32.style.top = resultadoAltura - 5 + 'px';

    //tamaño de selection 
    selection.style.width = resultadoBase + 'px';
    selection.style.height = resultadoAltura + 'px';
    //posicion donde se encuentra
    selection.style.left = resultadoBase + 'px';
    selection.style.top = resultadoAltura + 'px';

    //arriba
    pointer.x = resultadoBase + rb1 - 5 + 'px';
    pointer.y = resultadoAltura - 5 + 'px';

    pointer2.x = resultadoBase + rb1 + rb1 - 5 + 'px';
    pointer2.y = resultadoAltura - 5 + 'px';

    pointer3.x = resultadoBase + rb1 + rb1 + rb1 - 5 + 'px';
    pointer3.y = resultadoAltura - 5 + 'px';

    pointer4.x = resultadoBase + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    pointer4.y = resultadoAltura - 5 + 'px';

    pointer5.x = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    pointer5.y = resultadoAltura - 5 + 'px';

    pointer6.x = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    pointer6.y = resultadoAltura - 5 + 'px';

    pointer7.x = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    pointer7.y = resultadoAltura - 5 + 'px';

    //posicion en x 
    pointer8.x = resultadoBase + resultadoBase - 5 + 'px';
    //posicion en y
    pointer8.y = resultadoAltura - 5 + 'px';

    //derecha
    pointer9.x = resultadoBase + resultadoBase - 5 + 'px';
    pointer9.y = resultadoAltura + ra1 - 5 + 'px';

    pointer10.x = resultadoBase + resultadoBase - 5 + 'px';
    pointer10.y = resultadoAltura + ra1 + ra1 - 5 + 'px';

    pointer11.x = resultadoBase + resultadoBase - 5 + 'px';
    pointer11.y = resultadoAltura + ra1 + ra1 + ra1 - 5 + 'px';

    pointer12.x = resultadoBase + resultadoBase - 5 + 'px';
    pointer12.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    pointer13.x = resultadoBase + resultadoBase - 5 + 'px';
    pointer13.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    pointer14.x = resultadoBase + resultadoBase - 5 + 'px';
    pointer14.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    pointer15.x = resultadoBase + resultadoBase - 5 + 'px';
    pointer15.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    pointer16.x = resultadoBase + resultadoBase - 5 + 'px';
    pointer16.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    //abajo
    pointer17.x = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    pointer17.y = resultadoAltura + resultadoAltura - 5 + 'px';

    pointer18.x = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    pointer18.y = resultadoAltura + resultadoAltura - 5 + 'px';

    pointer19.x = resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    pointer19.y = resultadoAltura + resultadoAltura - 5 + 'px';

    pointer20.x = resultadoBase + rb1 + rb1 + rb1 + rb1 - 5 + 'px';
    pointer20.y = resultadoAltura + resultadoAltura - 5 + 'px';

    pointer21.x = resultadoBase + rb1 + rb1 + rb1 - 5 + 'px';
    pointer21.y = resultadoAltura + resultadoAltura - 5 + 'px';

    pointer22.x = resultadoBase + rb1 + rb1 - 5 + 'px';
    pointer22.y = resultadoAltura + resultadoAltura - 5 + 'px';

    pointer23.x = resultadoBase + rb1 - 5 + 'px';
    pointer23.y = resultadoAltura + resultadoAltura - 5 + 'px';

    pointer24.x = resultadoBase - 5 + 'px';
    pointer24.y = resultadoAltura + resultadoAltura - 5 + 'px';

    //izquierda
    pointer25.x = resultadoBase - 5 + 'px';
    pointer25.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    pointer26.x = resultadoBase - 5 + 'px';
    pointer26.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    pointer27.x = resultadoBase - 5 + 'px';
    pointer27.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    pointer28.x = resultadoBase - 5 + 'px';
    pointer28.y = resultadoAltura + ra1 + ra1 + ra1 + ra1 - 5 + 'px';

    pointer29.x = resultadoBase - 5 + 'px';
    pointer29.y = resultadoAltura + ra1 + ra1 + ra1 - 5 + 'px';

    pointer30.x = resultadoBase - 5 + 'px';
    pointer30.y = resultadoAltura + ra1 + ra1 - 5 + 'px';

    pointer31.x = resultadoBase - 5 + 'px';
    pointer31.y = resultadoAltura + ra1 - 5 + 'px';

    pointer32.x = resultadoBase - 5 + 'px';
    pointer32.y = resultadoAltura - 5 + 'px';

    /*
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
    pointer8.y = resultadobaseMas5;*/

}

camera.position.set(100, 200, 300);

//construccion de panel
//var y = window.innerHeight / 3;
//var x = window.innerWidth / 3;
/*
const geometryPanel=new THREE.PlaneGeometry(5,5);
const materialPanel=new THREE.MeshBasicMaterial({color:0x11E10A});
const plane = new THREE.Mesh(geometryPanel, materialPanel);
scene.add(plane);*/

function render() {
    // find intersections
    raycaster.setFromCamera(pointer, camera);
    raycaster2.setFromCamera(pointer2, camera);
    raycaster3.setFromCamera(pointer3, camera);
    raycaster4.setFromCamera(pointer4, camera);

    raycaster5.setFromCamera(pointer5, camera);
    raycaster6.setFromCamera(pointer6, camera);
    raycaster7.setFromCamera(pointer7, camera);
    raycaster8.setFromCamera(pointer8, camera);

    raycaster9.setFromCamera(pointer9, camera);
    raycaster10.setFromCamera(pointer10, camera);
    raycaster11.setFromCamera(pointer11, camera);
    raycaster12.setFromCamera(pointer12, camera);

    raycaster13.setFromCamera(pointer13, camera);
    raycaster14.setFromCamera(pointer14, camera);
    raycaster15.setFromCamera(pointer15, camera);
    raycaster16.setFromCamera(pointer16, camera);

    raycaster17.setFromCamera(pointer17, camera);
    raycaster18.setFromCamera(pointer18, camera);
    raycaster19.setFromCamera(pointer19, camera);
    raycaster20.setFromCamera(pointer20, camera);

    raycaster21.setFromCamera(pointer21, camera);
    raycaster22.setFromCamera(pointer22, camera);
    raycaster23.setFromCamera(pointer23, camera);
    raycaster24.setFromCamera(pointer24, camera);

    raycaster25.setFromCamera(pointer25, camera);
    raycaster26.setFromCamera(pointer26, camera);
    raycaster27.setFromCamera(pointer27, camera);
    raycaster28.setFromCamera(pointer28, camera);

    raycaster29.setFromCamera(pointer29, camera);
    raycaster30.setFromCamera(pointer30, camera);
    raycaster31.setFromCamera(pointer31, camera);
    raycaster32.setFromCamera(pointer32, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    const intersects2 = raycaster2.intersectObjects(scene.children, true);
    const intersects3 = raycaster3.intersectObjects(scene.children, true);
    const intersects4 = raycaster4.intersectObjects(scene.children, true);

    const intersects5 = raycaster5.intersectObjects(scene.children, true);
    const intersects6 = raycaster6.intersectObjects(scene.children, true);
    const intersects7 = raycaster7.intersectObjects(scene.children, true);
    const intersects8 = raycaster8.intersectObjects(scene.children, true);

    const intersects9 = raycaster9.intersectObjects(scene.children, true);
    const intersects10 = raycaster10.intersectObjects(scene.children, true);
    const intersects11 = raycaster11.intersectObjects(scene.children, true);
    const intersects12 = raycaster12.intersectObjects(scene.children, true);

    const intersects13 = raycaster13.intersectObjects(scene.children, true);
    const intersects14 = raycaster14.intersectObjects(scene.children, true);
    const intersects15 = raycaster15.intersectObjects(scene.children, true);
    const intersects16 = raycaster16.intersectObjects(scene.children, true);

    const intersects17 = raycaster17.intersectObjects(scene.children, true);
    const intersects18 = raycaster18.intersectObjects(scene.children, true);
    const intersects19 = raycaster19.intersectObjects(scene.children, true);
    const intersects20 = raycaster20.intersectObjects(scene.children, true);

    const intersects21 = raycaster21.intersectObjects(scene.children, true);
    const intersects22 = raycaster22.intersectObjects(scene.children, true);
    const intersects23 = raycaster23.intersectObjects(scene.children, true);
    const intersects24 = raycaster24.intersectObjects(scene.children, true);

    const intersects25 = raycaster25.intersectObjects(scene.children, true);
    const intersects26 = raycaster26.intersectObjects(scene.children, true);
    const intersects27 = raycaster27.intersectObjects(scene.children, true);
    const intersects28 = raycaster28.intersectObjects(scene.children, true);

    const intersects29 = raycaster29.intersectObjects(scene.children, true);
    const intersects30 = raycaster30.intersectObjects(scene.children, true);
    const intersects31 = raycaster31.intersectObjects(scene.children, true);
    const intersects32 = raycaster32.intersectObjects(scene.children, true);

    /*
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
    }*/
    console.log(intersects.length);
    if (intersects.length > 0) {
        if (INTERSECTED != intersects[0].object) {
            //intersects[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects[0].object.name);
                pedirAve(intersects[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 2");
        }
    }
    if (intersects2.length > 0) {
        if (INTERSECTED2 != intersects2[0].object) {
            const found = arreglo.find(element => element === intersects2[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects2[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects2[0].object.name);
                pedirAve(intersects2[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 2");
        }
    }
    if (intersects3.length > 0) {
        if (INTERSECTED3 != intersects3[0].object) {
            const found = arreglo.find(element => element === intersects3[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects3[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects3[0].object.name);
                pedirAve(intersects3[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 3");
        }
    }
    if (intersects4.length > 0) {
        if (INTERSECTED4 != intersects4[0].object) {
            const found = arreglo.find(element => element === intersects4[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects4[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects4[0].object.name);
                pedirAve(intersects4[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 4");
        }
    }
    if (intersects5.length > 0) {
        if (INTERSECTED5 != intersects5[0].object) {
            const found = arreglo.find(element => element === intersects5[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects5[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects5[0].object.name);
                pedirAve(intersects5[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 5");
        }
    }
    if (intersects6.length > 0) {
        if (INTERSECTED6 != intersects6[0].object) {
            const found = arreglo.find(element => element === intersects6[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects6[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects6[0].object.name);
                pedirAve(intersects6[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 6");
        }
    }
    if (intersects7.length > 0) {
        if (INTERSECTED7 != intersects7[0].object) {
            const found = arreglo.find(element => element === intersects7[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects7[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects7[0].object.name);
                pedirAve(intersects7[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 7");
        }
    }
    if (intersects8.length > 0) {
        if (INTERSECTED8 != intersects8[0].object) {
            const found = arreglo.find(element => element === intersects8[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects8[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects8[0].object.name);
                pedirAve(intersects8[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }
            //console.log("cambio de color 8");
        }
    }
    if (intersects9.length > 0) {
        if (INTERSECTED9 != intersects9[0].object) {
            const found = arreglo.find(element => element === intersects9[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects9[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects9[0].object.name);
                pedirAve(intersects9[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 9");
        }
    }
    if (intersects10.length > 0) {
        if (INTERSECTED10 != intersects10[0].object) {
            const found = arreglo.find(element => element === intersects10[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects10[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects10[0].object.name);
                pedirAve(intersects10[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 10");
        }
    }
    if (intersects11.length > 0) {
        if (INTERSECTED11 != intersects11[0].object) {
            const found = arreglo.find(element => element === intersects11[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects11[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects11[0].object.name);
                pedirAve(intersects11[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 11");
        }
    }
    if (intersects.length > 0) {
        if (INTERSECTED12 != intersects12[0].object) {
            const found = arreglo.find(element => element === intersects12[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects12[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects12[0].object.name);
                pedirAve(intersects12[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 12");
        }
    }
    if (intersects13.length > 0) {
        if (INTERSECTED13 != intersects13[0].object) {
            const found = arreglo.find(element => element === intersects13[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects13[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects13[0].object.name);
                pedirAve(intersects13[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 13");
        }
    }
    if (intersects14.length > 0) {
        if (INTERSECTED14 != intersects14[0].object) {

            const found = arreglo.find(element => element === intersects14[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects14[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects14[0].object.name);
                pedirAve(intersects14[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 14");
        }
    }
    if (intersects15.length > 0) {
        if (INTERSECTED15 != intersects15[0].object) {
            const found = arreglo.find(element => element === intersects15[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects15[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects15[0].object.name);
                pedirAve(intersects15[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 15");
        }
    }
    if (intersects16.length > 0) {
        if (INTERSECTED16 != intersects16[0].object) {
            const found = arreglo.find(element => element === intersects16[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects16[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects16[0].object.name);
                pedirAve(intersects16[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 16");
        }
    }
    if (intersects17.length > 0) {
        if (INTERSECTED17 != intersects17[0].object) {
            //intersects17[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects17[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects17[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects17[0].object.name);
                pedirAve(intersects17[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 17");
        }
    }
    if (intersects18.length > 0) {
        if (INTERSECTED18 != intersects18[0].object) {
            //intersects18[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects18[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects18[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects18[0].object.name);
                pedirAve(intersects18[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 18");
        }
    }
    if (intersects19.length > 0) {
        if (INTERSECTED19 != intersects19[0].object) {
            //intersects19[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects19[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects19[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects19[0].object.name);
                pedirAve(intersects19[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 19");
        }
    }
    if (intersects20.length > 0) {
        if (INTERSECTED20 != intersects20[0].object) {
            //intersects20[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects20[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects20[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects20[0].object.name);
                pedirAve(intersects20[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 20");
        }
    }
    if (intersects21.length > 0) {
        if (INTERSECTED21 != intersects21[0].object) {
            //intersects21[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects21[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects21[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects21[0].object.name);
                pedirAve(intersects21[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 21");
        }
    }
    if (intersects22.length > 0) {
        if (INTERSECTED22 != intersects22[0].object) {
            //intersects22[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects22[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects22[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects22[0].object.name);
                pedirAve(intersects22[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 22");
        }
    }
    if (intersects23.length > 0) {
        if (INTERSECTED23 != intersects23[0].object) {
            //intersects23[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects23[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects23[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects23[0].object.name);
                pedirAve(intersects23[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 23");
        }
    }
    if (intersects24.length > 0) {
        if (INTERSECTED24 != intersects24[0].object) {
            //intersects24[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects24[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects24[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects24[0].object.name);
                pedirAve(intersects24[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 24");
        }
    }
    if (intersects25.length > 0) {
        if (INTERSECTED25 != intersects25[0].object) {
            //intersects25[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects25[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects25[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects25[0].object.name);
                pedirAve(intersects25[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 25");
        }
    }
    if (intersects26.length > 0) {
        if (INTERSECTED26 != intersects26[0].object) {
            //intersects26[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects26[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects26[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects26[0].object.name);
                pedirAve(intersects26[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 26");
        }
    }
    if (intersects27.length > 0) {
        if (INTERSECTED27 != intersects27[0].object) {
            //intersects27[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects27[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects27[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects27[0].object.name);
                pedirAve(intersects27[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 27");
        }
    }
    if (intersects28.length > 0) {
        if (INTERSECTED28 != intersects28[0].object) {
            //intersects28[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects28[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects28[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects28[0].object.name);
                pedirAve(intersects28[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 28");
        }
    }
    if (intersects29.length > 0) {
        if (INTERSECTED29 != intersects29[0].object) {
            //intersects29[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects29[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects29[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects29[0].object.name);
                pedirAve(intersects29[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 29");
        }
    }
    if (intersects30.length > 0) {
        if (INTERSECTED30 != intersects30[0].object) {
            //intersects30[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects30[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects30[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects30[0].object.name);
                pedirAve(intersects30[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 30");
        }
    }
    if (intersects31.length > 0) {
        if (INTERSECTED31 != intersects31[0].object) {
            //intersects31[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects31[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects31[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects31[0].object.name);
                pedirAve(intersects31[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 31");
        }
    }
    if (intersects32.length > 0) {
        if (INTERSECTED32 != intersects32[0].object) {
            //intersects32[0].layers.enable(1);
            const found = arreglo.find(element => element === intersects32[0].object.name);

            if (found === undefined) {
                var contenedor = document.getElementById('contenedorObjetos');
                var div = document.createElement('div');
                div.setAttribute("id", "dato");
                div.innerText = intersects32[0].object.name;
                contenedor.append(div);
                arreglo.push(intersects32[0].object.name);
                pedirAve(intersects32[0].object.name);
                if (arreglo.length === 5) {
                    alert("haz encontrado todos los objetos");
                }
            }

            //console.log("cambio de color 32");
        }
    }
    else {

        if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
        if (INTERSECTED2) INTERSECTED2.material.emissive.setHex(INTERSECTED2.currentHex);
        if (INTERSECTED3) INTERSECTED3.material.emissive.setHex(INTERSECTED3.currentHex);
        if (INTERSECTED4) INTERSECTED4.material.emissive.setHex(INTERSECTED4.currentHex);
        if (INTERSECTED5) INTERSECTED5.material.emissive.setHex(INTERSECTED5.currentHex);
        if (INTERSECTED6) INTERSECTED6.material.emissive.setHex(INTERSECTED6.currentHex);
        if (INTERSECTED7) INTERSECTED7.material.emissive.setHex(INTERSECTED7.currentHex);
        if (INTERSECTED8) INTERSECTED8.material.emissive.setHex(INTERSECTED8.currentHex);
        if (INTERSECTED9) INTERSECTED9.material.emissive.setHex(INTERSECTED9.currentHex);
        if (INTERSECTED10) INTERSECTED10.material.emissive.setHex(INTERSECTED10.currentHex);
        if (INTERSECTED11) INTERSECTED11.material.emissive.setHex(INTERSECTED11.currentHex);
        if (INTERSECTED12) INTERSECTED12.material.emissive.setHex(INTERSECTED12.currentHex);
        if (INTERSECTED13) INTERSECTED13.material.emissive.setHex(INTERSECTED13.currentHex);
        if (INTERSECTED14) INTERSECTED14.material.emissive.setHex(INTERSECTED14.currentHex);
        if (INTERSECTED15) INTERSECTED15.material.emissive.setHex(INTERSECTED15.currentHex);
        if (INTERSECTED16) INTERSECTED16.material.emissive.setHex(INTERSECTED16.currentHex);
        if (INTERSECTED17) INTERSECTED17.material.emissive.setHex(INTERSECTED17.currentHex);
        if (INTERSECTED18) INTERSECTED18.material.emissive.setHex(INTERSECTED18.currentHex);
        if (INTERSECTED19) INTERSECTED19.material.emissive.setHex(INTERSECTED19.currentHex);
        if (INTERSECTED20) INTERSECTED20.material.emissive.setHex(INTERSECTED20.currentHex);
        if (INTERSECTED20) INTERSECTED20.material.emissive.setHex(INTERSECTED20.currentHex);
        if (INTERSECTED21) INTERSECTED21.material.emissive.setHex(INTERSECTED21.currentHex);
        if (INTERSECTED22) INTERSECTED22.material.emissive.setHex(INTERSECTED22.currentHex);
        if (INTERSECTED23) INTERSECTED23.material.emissive.setHex(INTERSECTED23.currentHex);
        if (INTERSECTED24) INTERSECTED24.material.emissive.setHex(INTERSECTED24.currentHex);
        if (INTERSECTED25) INTERSECTED25.material.emissive.setHex(INTERSECTED25.currentHex);
        if (INTERSECTED26) INTERSECTED26.material.emissive.setHex(INTERSECTED26.currentHex);
        if (INTERSECTED27) INTERSECTED27.material.emissive.setHex(INTERSECTED27.currentHex);
        if (INTERSECTED28) INTERSECTED28.material.emissive.setHex(INTERSECTED28.currentHex);
        if (INTERSECTED29) INTERSECTED29.material.emissive.setHex(INTERSECTED29.currentHex);
        if (INTERSECTED30) INTERSECTED30.material.emissive.setHex(INTERSECTED30.currentHex);
        if (INTERSECTED31) INTERSECTED31.material.emissive.setHex(INTERSECTED31.currentHex);
        if (INTERSECTED32) INTERSECTED32.material.emissive.setHex(INTERSECTED32.currentHex);

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
        INTERSECTED17 = null;
        INTERSECTED18 = null;
        INTERSECTED19 = null;
        INTERSECTED20 = null;
        INTERSECTED21 = null;
        INTERSECTED22 = null;
        INTERSECTED23 = null;
        INTERSECTED24 = null;
        INTERSECTED25 = null;
        INTERSECTED26 = null;
        INTERSECTED27 = null;
        INTERSECTED28 = null;
        INTERSECTED29 = null;
        INTERSECTED30 = null;
        INTERSECTED31 = null;
        INTERSECTED32 = null;
    }

    renderer.render(scene, camera);

}
//control orbital
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 100, 0);
controls.update();


//nuclq de animacion infinita
function animate() {
    requestAnimationFrame(animate);

    render();
    onPointerMove();
    renderer.setSize(window.innerWidth, window.innerHeight);
    /*
    var object = scene.getObjectByName("p");
    console.log("estos son lso objetos")
    console.log(object)*/
};
animate();
console.log(scene.children);
var objetos3d = scene.children;
console.log(objetos3d)

/*
var object = scene.getObject();
console.log("estos son lso objetos")
console.log(object)*/









