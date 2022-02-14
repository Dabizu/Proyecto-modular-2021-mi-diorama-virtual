import { scene, THREE } from './globales.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
/*
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const gltfLoader = new GLTFLoader();
gltfLoader.load("3dmodels/Escenario3.gltf", function (obj) {
  obj.scene.scale.set(20,20,20);
  scene.add(obj.scene);
});

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.y=38;
scene.add(cube);

camera.position.z = 10;
camera.position.y = 40;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();*/
function eliminacionNodo(){
  document.body.innerHTML="";
  /*var element = document.getElementById("imagen");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
    console.log("se ejecuto el removedor");
  }*/
}

import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { Octree } from './jsm/math/Octree.js';
//document.getElementById("imagen").style.background="url(./img/mi-diorama-virtual.png)";
var img=document.createElement('img');
img.setAttribute("id","imagen");
img.setAttribute("src","./img/mi-diorama-virtual2.png");
img.setAttribute("style","width: 100%; height: 100%; margin: 0;");
document.body.appendChild(img);
//document.body.innerHTML = '<img id="imagen" src="./img/mi-diorama-virtual2.png" style="width: 100%; height: 100%; margin: 0;" />';
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,50,0);
const renderer = new THREE.WebGLRenderer();
const worldOctree = new Octree();

const loader = new GLTFLoader().setPath('./3dmodels/');

loader.load('Escenario3.gltf', (gltf) => {
  eliminacionNodo();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  scene.add(gltf.scene);

  worldOctree.fromGraphNode(gltf.scene);

  gltf.scene.traverse(child => {

    if (child.isMesh) {

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material.map) {

        child.material.map.anisotropy = 8;

      }

    }

  });

  //cargamos la escena

  animate();

});

function animate() {
  requestAnimationFrame(animate);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
};

const ambientlight = new THREE.AmbientLight(0x6688cc);
scene.add(ambientlight);

const fillLight1 = new THREE.DirectionalLight(0xff9999, 0.5);
fillLight1.position.set(- 1, 1, 2);
scene.add(fillLight1);

const fillLight2 = new THREE.DirectionalLight(0x8888ff, 0.2);
fillLight2.position.set(0, - 1, 0);
scene.add(fillLight2);

const directionalLight = new THREE.DirectionalLight(0xffffaa, 1.2);
directionalLight.position.set(- 5, 25, - 1);
directionalLight.castShadow = true;
directionalLight.shadow.camera.near = 0.01;
directionalLight.shadow.camera.far = 500;
directionalLight.shadow.camera.right = 30;
directionalLight.shadow.camera.left = - 30;
directionalLight.shadow.camera.top = 30;
directionalLight.shadow.camera.bottom = - 30;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.radius = 4;
directionalLight.shadow.bias = - 0.00006;
scene.add(directionalLight);

//añadimos el controlador orbital
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 100, 0);
controls.update();


/*
function limpiarScena() {
  for (var i = 0; scene.children.length>i; i++) {
    scene.remove(scene.children[i]);
  }
}*/
/*
  //limpiarScena();
  var boton=document.createElement("button");
  boton.onclick=()=>{ limpiarScena(); }
  boton.innerText="eliminar";
  document.body.append(boton);*/

//mal no sirve
/*
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function limpiarScena() {
  for (var i = 0; scene.children.length>i; i++) {
    scene.remove(scene.children[i]);
  }
}

//limpiarScena();
var boton=document.createElement("button");
boton.onclick=()=>{ limpiarScena(); }
boton.innerText="eliminar";
document.body.append(boton);
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

const gltfLoader = new GLTFLoader();
gltfLoader.load("3dmodels/Escenario3.gltf", function (obj) {
  obj.scene.scale.set(20,20,20);
  scene.add(obj.scene);
  //objetos.add(obj);
});
*/























/*
var contador=0;
var divCarga=document.createElement("div");
divCarga.setAttribute('id',"contenedor");
var h1=document.createElement("h1");
h1.innerText="Cargando";
var h1punto=document.createElement("h1");
divCarga.append(h1);
divCarga.append(h1punto);
document.body.appendChild(divCarga);
function carga(){
    var h1punto2=document.createElement("h1");
    h1punto2.innerText=".";
    h1punto.append(h1punto2);
    contador++;
}
let identificador;
function temporizadorDeRetrasoPuntos() {
    identificador = setTimeout(carga, 3000);

}

while(contador!=3){
    temporizadorDeRetrasoPuntos();
}
*/


/*
let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
  identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
  alert("Han pasado 3 segundos.");
}
temporizadorDeRetraso();*/