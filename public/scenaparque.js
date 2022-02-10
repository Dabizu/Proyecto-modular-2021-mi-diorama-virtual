import { scene, THREE } from './globales.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from './jsm/controls/PointerLockControls.js';


var arreglo = new Array()
const velocity = new THREE.Vector3();
var raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0), 0, 10);
const direction = new THREE.Vector3();
//añadimos el control del teclado
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

//contenedor de objetos
const objects = [];

//tiempo
let prevTime = performance.now();


class DetectionObejct {
    raycaster;
    INTERSECTED;
    pointer;
    div;
    camera;
    scene;
    constructor(nombreDiv, scene, camera) {
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
        this.div = document.getElementById(nombreDiv);
        this.scene = scene;
        this.camera = camera;
    }
    puntoGrafico(x, y, radio) {
        this.pointer.x = (x / window.innerWidth) * 2 - 1;
        this.pointer.y = - (y / window.innerHeight) * 2 + 1;
        this.div.style.left = x - radio + 'px';
        this.div.style.top = y - radio + 'px';
    }
    detect() {
        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children, false);
        if (intersects.length > 0) {
            if (this.INTERSECTED != intersects[0].object) {
                console.log("si detecto el objeto");
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
            }
        }
        else {
            if (this.INTERSECTED) this.INTERSECTED.material.emissive.setHex(this.INTERSECTED.currentHex);
            this.INTERSECTED = null;
        }
    }
}





//const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 50;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x021468);
document.body.appendChild(renderer.domElement);

//conrolador pointer lock
const controls = new PointerLockControls(camera, document.body);
controls.lock();
scene.add( controls.getObject() );

var blocker = document.createElement( 'div' );
blocker.setAttribute("id","blocker");

var instructions = document.createElement( 'div' );
instructions.setAttribute("id","instructions");
instructions.innerHTML="<h1>play</h1>"

blocker.append(instructions);
document.body.append(blocker);

instructions.addEventListener( 'click', function () {

    controls.lock();

} );

controls.addEventListener( 'lock', function () {

    instructions.style.display = 'none';
    blocker.style.display = 'none';

} );

controls.addEventListener( 'unlock', function () {

    blocker.style.display = 'block';
    instructions.style.display = '';

} );

/*
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.name="aguila real";
scene.add( cube );*/


var detector1 = new DetectionObejct("d1", scene, camera);
var detector2 = new DetectionObejct("d2", scene, camera);
var detector3 = new DetectionObejct("d3", scene, camera);
var detector4 = new DetectionObejct("d4", scene, camera);
var detector5 = new DetectionObejct("d5", scene, camera);
var detector6 = new DetectionObejct("d6", scene, camera);
var detector7 = new DetectionObejct("d7", scene, camera);
var detector8 = new DetectionObejct("d8", scene, camera);
var detector9 = new DetectionObejct("d9", scene, camera);
var detector10 = new DetectionObejct("d10", scene, camera);
var detector11 = new DetectionObejct("d11", scene, camera);
var detector12 = new DetectionObejct("d12", scene, camera);
var detector13 = new DetectionObejct("d13", scene, camera);
var detector14 = new DetectionObejct("d14", scene, camera);
var detector15 = new DetectionObejct("d15", scene, camera);
var detector16 = new DetectionObejct("d16", scene, camera);
var detector17 = new DetectionObejct("d17", scene, camera);
var detector18 = new DetectionObejct("d18", scene, camera);
var detector19 = new DetectionObejct("d19", scene, camera);
var detector20 = new DetectionObejct("d20", scene, camera);
var detector21 = new DetectionObejct("d21", scene, camera);
var detector22 = new DetectionObejct("d22", scene, camera);
var detector23 = new DetectionObejct("d23", scene, camera);
var detector24 = new DetectionObejct("d24", scene, camera);
var detector25 = new DetectionObejct("d25", scene, camera);
var detector26 = new DetectionObejct("d26", scene, camera);
var detector27 = new DetectionObejct("d27", scene, camera);
var detector28 = new DetectionObejct("d28", scene, camera);
var detector29 = new DetectionObejct("d29", scene, camera);
var detector30 = new DetectionObejct("d30", scene, camera);
var detector31 = new DetectionObejct("d31", scene, camera);
var detector32 = new DetectionObejct("d32", scene, camera);


var base = window.innerWidth;
var altura = window.innerHeight;

var resultadoBase = base / 3;
var resultadoAltura = altura / 3;

var rb1 = resultadoBase / 8;

var ra1 = resultadoAltura / 8;

detector1.puntoGrafico(resultadoBase + rb1, resultadoAltura, 5);
detector2.puntoGrafico(resultadoBase + rb1 + rb1, resultadoAltura, 5);
detector3.puntoGrafico(resultadoBase + rb1 + rb1 + rb1, resultadoAltura, 5);
detector4.puntoGrafico(resultadoBase + rb1 + rb1 + rb1 + rb1, resultadoAltura, 5);
detector5.puntoGrafico(resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1, resultadoAltura, 5);
detector6.puntoGrafico(resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1, resultadoAltura, 5);
detector7.puntoGrafico(resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 + rb1, resultadoAltura, 5);
detector8.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura, 5);
//derecha
detector9.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura + ra1, 5);
detector10.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura + ra1 + ra1, 5);
detector11.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura + ra1 + ra1 + ra1, 5);
detector12.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1, 5);
detector13.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1, 5);
detector14.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1, 5);
detector15.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1, 5);
detector16.puntoGrafico(resultadoBase + resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1, 5);
//abajo
detector17.puntoGrafico(resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1 + rb1, resultadoAltura + resultadoAltura, 5);
detector18.puntoGrafico(resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1 + rb1, resultadoAltura + resultadoAltura, 5);
detector19.puntoGrafico(resultadoBase + rb1 + rb1 + rb1 + rb1 + rb1, resultadoAltura + resultadoAltura, 5);
detector20.puntoGrafico(resultadoBase + rb1 + rb1 + rb1 + rb1, resultadoAltura + resultadoAltura, 5);
detector21.puntoGrafico(resultadoBase + rb1 + rb1 + rb1, resultadoAltura + resultadoAltura, 5);
detector22.puntoGrafico(resultadoBase + rb1 + rb1, resultadoAltura + resultadoAltura, 5);
detector23.puntoGrafico(resultadoBase + rb1, resultadoAltura + resultadoAltura, 5);
detector24.puntoGrafico(resultadoBase, resultadoAltura + resultadoAltura, 5);
detector25.puntoGrafico(resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1 + ra1, 5);
detector26.puntoGrafico(resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1 + ra1, 5);
detector27.puntoGrafico(resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1 + ra1, 5);
detector28.puntoGrafico(resultadoBase, resultadoAltura + ra1 + ra1 + ra1 + ra1, 5);
detector29.puntoGrafico(resultadoBase, resultadoAltura + ra1 + ra1 + ra1, 5);
detector30.puntoGrafico(resultadoBase, resultadoAltura + ra1 + ra1, 5);
detector31.puntoGrafico(resultadoBase, resultadoAltura + ra1, 5);
detector32.puntoGrafico(resultadoBase, resultadoAltura, 5);
/*
//controlador orbital
const controlOrbital = new OrbitControls(camera, renderer.domElement);
controlOrbital.target.set(0, 100, 0);
controlOrbital.update();*/



function animate() {
    requestAnimationFrame(animate);
    detector1.detect();
    detector2.detect();
    detector3.detect();
    detector4.detect();
    detector5.detect();
    detector6.detect();
    detector7.detect();
    detector8.detect();
    detector9.detect();
    detector10.detect();
    detector11.detect();
    detector12.detect();
    detector13.detect();
    detector14.detect();
    detector15.detect();
    detector16.detect();
    detector17.detect();
    detector18.detect();
    detector19.detect();
    detector20.detect();
    detector21.detect();
    detector22.detect();
    detector23.detect();
    detector24.detect();
    detector25.detect();
    detector26.detect();
    detector27.detect();
    detector28.detect();
    detector29.detect();
    detector30.detect();
    detector31.detect();
    detector32.detect();

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //controlOrbital.update();
/*
    if (moveForward === true) { camera.position.x -= 5; }
    if (moveLeft === true) { camera.position.z -= 5; }
    if (moveBackward === true) { camera.position.x += 5; }
    if (moveRight === true) { camera.position.z += 5; }*/

    const time = performance.now();

    raycaster.ray.origin.copy(controls.getObject().position);
    raycaster.ray.origin.y -= 10;

    const intersections = raycaster.intersectObjects(scene.children, true);

    const onObject = intersections.length > 0;

    const delta = (time - prevTime) / 1000;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize(); // this ensures consistent movements in all directions

    if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

    if (onObject === true) {

        velocity.y = Math.max(0, velocity.y);
        canJump = true;

    }

    controls.moveRight(- velocity.x * delta);
    controls.moveForward(- velocity.z * delta);

    controls.getObject().position.y += (velocity.y * delta); // new behavior

    if (controls.getObject().position.y < 10) {

        velocity.y = 0;
        controls.getObject().position.y = 10;

        canJump = true;

    }
    prevTime = time;

    renderer.render(scene, camera);
};

animate();

//aqui se carga el modelo 
const fbx = new FBXLoader();
//const grupo1=new THREE.Group();
fbx.load('3dmodels/aguila-real4.fbx', function (personaje) {
    //personaje.position.set(-100,0,-100);
    personaje.scale.set(1, 1, 1)
    personaje.position.set(700, 700, 700);
    personaje.name = "p";
    scene.add(personaje);
    console.log("este es el objeto scene:");
    console.log(scene.children);
    var objetos3d = scene.children;
    console.log(objetos3d[0])
    var objetoAnimal = objetos3d[0];
    console.log("este es eo objeto definiti")
    console.log(objetoAnimal.name);
    //console.log(scene);
    const geometry = new THREE.BoxGeometry(800, 300, 300);
    var wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ee00, wireframe: true, transparent: true, opacity: 1 });
    var cube = new THREE.Mesh(geometry, wireframeMaterial);
    cube.position.set(700, 700, 700);
    cube.name = "aguila real";
    scene.add(cube);
});



//cargamos luz para los modelos
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

//pedimos la ventana
function dameVentana(nombre) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    overlay.classList.add('active');
    popup.classList.add('active');
    var h1nombre = document.getElementById('nombre');
    h1nombre.innerText = nombre;
}
//pedimos informacion del animal a la base de datos
function pedirAve(nombre) {
    const url = '/animales?nombre=' + nombre;
    const http = new XMLHttpRequest()

    http.open("POST", url)
    http.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var resultado = JSON.parse(this.responseText)
            console.log(resultado[0].nombre)
            dameVentana(resultado[0].nombre)

        }
    }
    http.send()
}

//control de personaje





const onKeyDown = function (event) {
    //console.log(event.code);
    switch (event.code) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = true;
            console.log("adelante");
            //camera.position.x-=20;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = true;
            console.log("izquierda");
            //camera.position.z-=1;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = true;
            console.log("atras");
            //camera.position.x+=20;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = true;
            console.log("derecha");
            //camera.position.z+=1;
            break;

        case 'Space':
            if (canJump === true) velocity.y += 350;
            canJump = false;
            break;

    }

};

const onKeyUp = function (event) {

    switch (event.code) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = false;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = false;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = false;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = false;
            break;

    }

};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);



const gltfLoader = new GLTFLoader();
gltfLoader.load("3dmodels/playa.gltf", function (obj) {
    obj.scene.scale.set(20, 20, 20);
    scene.add(obj.scene);
});

