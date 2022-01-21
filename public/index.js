
import * as THREE from './build/three.module.js';
import { STLLoader } from './jsm/loaders/STLLoader.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
//import CANNON from './cannon';
import * as dat from './threejs/libs/dat.gui.module.js';


let fisicasVisibles = true;
const debugObject = {}
const gui = new dat.GUI({
    width: 200
})


debugObject.mostrarFisicas = () =>{
    if (fisicasVisibles == false){
        fisicasVisibles = true
        console.log(fisicasVisibles)
    }else{(fisicasVisibles == true)
        fisicasVisibles = false
        console.log(fisicasVisibles)
    }    
}

gui.add(debugObject, 'mostrarFisicas')

const loadingBarElement = document.querySelector('.loading-bar')
const loadingManager = new THREE.LoadingManager(
    //LOADER
    ()=>
    {
        //gsap.delayedCall(0.5, ()=>{
         //   gsap.to(overlayMaterial.uniforms.uAlpha, {duration: 3, value: 0})
          //  loadingBarElement.classList.add('ended')
          //  loadingBarElement.style.transform = ''
        //})
        window.setTimeout(()=>{
            gsap.to(overlayMaterial.uniforms.uAlpha, {duration: 3, value: 0, delay:1 })
            loadingBarElement.classList.add('ended')
            loadingBarElement.style.transform = ''

       }, 500)
        
    },
    //PROGRESS
    (itemUrl, itemsLoaded, itemsTotal)=>{
        
        const progressRatio = itemsLoaded / itemsTotal
        loadingBarElement.style.transform = `scaleX(${progressRatio})`
        
    }
)
const gltfLoader = new GLTFLoader(loadingManager);



//boleanos para el uso del teclado
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

//para mover la camara
let x=100,z=100;

const raycaster = new THREE.Raycaster();
const espacio = new THREE.Vector3();
const scene = new THREE.Scene();
//creamos textura para el fondo
/*
const texture = new THREE.TextureLoader();
texture.load('atardecer.jpg', function (tex) {
    scene.background = tex;
});
*/
///DESPUES DE CREAR LA SCENA

const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
const overlayMaterial = new THREE.ShaderMaterial({
   wireframe: true,
   transparent: true,
   //transparent: false,
   uniforms:
   {
       uAlpha:{value: 1  }
   },
   vertexShader: `
       void main(){
           gl_Position = vec4(position, 1.0);

       }
   `,
   fragmentShader:`
       uniform float uAlpha;
       void main(){
           gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
       }
   `
})

const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
scene.add(overlay)


const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(100, 100, 100)
//camera.position.set(100, 40, 100);

/*
const geometry = new THREE.TextGeometry( 'Hello three.js!', {
    font: font,
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5
} );*/
//scene.add(geometry);

// AUDIO

//var audioLoader = new THREE.AudioLoader();
//var listener = new THREE.AudioListener();
//var audio = new THREE.Audio(listener);
//audioLoader.load('audio/adventures-nivel.mp3', function(buffer) {
//    audio.setBuffer(buffer);
//    audio.setLoop(true);
//    audio.play();
//});

//agregamos un modelo fbx
const fbx = new FBXLoader();
/*
fbx.load('3dmodels/aloe.fbx', function (obj1) {
    obj1.position.set(0, 0, 0);
    obj1.scale.set(20, 20, 20);
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            var copiaAloe = obj1.clone();
            copiaAloe.position.set(i * 40, 0, j * 40);
            scene.add(copiaAloe);
        }
    }

});*/
/*
fbx.load('3dmodels/rock01.fbx', function (rock1) {
    rock1.scale.set(20, 20, 20);
    rock1.position.set(-50, 0, -10);
    scene.add(rock1);

    var rocknew = rock1.clone();
    rocknew.position.set(-100, 0, 50);
    //perso2=rock1;
    scene.add(rocknew)
});*/
/*
fbx.load('3dmodels/terreno.fbx', function (tierra) {
    tierra.position.set(0, -90, 0)
    scene.add(tierra);
});*/
//var grupoPersonaje=new THREE.Group();
var objetos=new THREE.Group();
var personew=new THREE.Group();
var perso=new THREE.Object3D();
var personajeCaminando=new THREE.Object3D();
var personajeEstatico=new THREE.Object3D();

fbx.load('3dmodels/chibi.fbx',function(personaje){
    personaje.position.set(-100,0,-100);
    perso=personaje;
    //grupoPersonaje.add(personaje);
    //sessionStorage.setItem('personaje',personaje);
    scene.add(personaje);
});
//grupoPersonaje.add(sessionStorage.getItem('personaje'));
scene.add(perso);
//const gltfLoader = new GLTFLoader();
gltfLoader.load("3dmodels/Escenario3.gltf", function (obj) {
    obj.scene.scale.set(20,20,20);
    scene.add(obj.scene);
    //objetos.add(obj);
});
//scene.add(objetos);



//FISICAS-------------------------------------------------
const world = new CANNON.World()
const objetsToUpdate = []

world.broadphase = new CANNON.SAPBroadphase(world)
world.allowSleep = true
world.gravity.set(0, -9.82, 0)
//MATERIAL
const defaultMaterial = new CANNON.Material('default')
//
//const concretePlasticContactMaterial = new CANNON.ContactMaterial(
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.1,
        restitution: 0.7
    }
)
world.addContactMaterial(defaultContactMaterial)
world.defaultContactMaterial = defaultContactMaterial
//MOSTRAR MALLA DEL PISO
// PISO:1 

const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshStandardMaterial({
    wireframe: true,
    color: '#ff0000', 
})

const floorMaterial = new THREE.MeshStandardMaterial({
    wireframe: true,
    color: '#00ff00', 
})

const createBox = (width, height, depth, position) =>{
    const mesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
    mesh.scale.set(width,height,depth)
    mesh.castShadow = true
    mesh.position.copy(position)
    scene.add(mesh)

    const shape = new CANNON.Box(new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5))
    const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 3, 0),
    shape,
    })
    body.position.copy(position)
    world.addBody(body)

    objetsToUpdate.push({
        mesh,
        body        
    })
}
const createFloor = (width, height, depth, position) =>{
    const mesh = new THREE.Mesh(cubeGeometry,floorMaterial)
    mesh.scale.set(width,height,depth)

    //mesh.castShadow = true
    mesh.rotation.x = - Math.PI * 0.5
    mesh.position.copy(position)
    scene.add(mesh)

    const shape = new CANNON.Box(new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5))
    const body = new CANNON.Body({
        mass: 0,        
        position: new CANNON.Vec3(0, 3, 0),
        shape,
        material: defaultMaterial
    })
    body.linearDamping = 0.1
    body.position.copy(position)
    body.quaternion.setFromAxisAngle(
        new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5
    )
    world.addBody(body)

    objetsToUpdate.push({
        mesh,
        body        
    })
}

createBox(20, 30, 20,{x: 0 ,y: 15 ,z: 90})

createFloor(150,385, 5,{x: 0 ,y: -2 ,z: -40})

/*
const piso1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(150,385, 5), // SUSTITUIR AQUI
    new THREE.MeshStandardMaterial({
        wireframe: true,
        color: '#0000ff', 
    })
)
piso1.rotation.x = - Math.PI * 0.5
piso1.position.y = -2
piso1.position.z = -40
scene.add(piso1)

//FISICAS PISO:1
const piso1Shape = new CANNON.Box(new CANNON.Vec3(150,385, 5))
const piso1Body = new CANNON.Body()
piso1Body.position = new CANNON.Vec3(0 ,-2 ,-40)
piso1Body.linearDamping = 0.1
piso1Body.mass = 0
piso1Body.material = defaultMaterial
piso1Body.addShape(piso1Shape)
piso1Body.quaternion.setFromAxisAngle(
    new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5
)
world.addBody(piso1Body)
/*
//FISICAS PISO:2
const piso2Shape = new CANNON.Box(new CANNON.Vec3(150,385, 5))
const piso2Body = new CANNON.Body()
piso2Body.position = new CANNON.Vec3(0 ,-2 ,-40)
piso2Body.linearDamping = 0.1
piso2Body.mass = 0
piso2Body.material = defaultMaterial
piso2Body.addShape(piso2Shape)
piso2Body.quaternion.setFromAxisAngle(
    new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5
)
world.addBody(piso2Body)
*/
//FISICAS ARBOL:1
/*
const arbol1 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(20,20, 30),
    new THREE.MeshStandardMaterial({
         
        wireframe: fisicasVisibles,
        color: '#0000ff', 
    })
)
arbol1.visible = fisicasVisibles
arbol1.rotation.x = - Math.PI * 0.5
arbol1.position.x = 0
arbol1.position.y = 15
arbol1.position.z = 90
scene.add(arbol1)

//FISICAS Arbol 1
const arbol1Shape = new CANNON.Box(new CANNON.Vec3(20,20, 30))
const arbol1Body = new CANNON.Body()
arbol1Body.position = new CANNON.Vec3(0 ,15 ,90)
arbol1Body.linearDamping = 0.1
arbol1Body.mass = 0
arbol1Body.material = defaultMaterial
arbol1Body.addShape(arbol1Shape)
arbol1Body.quaternion.setFromAxisAngle(
    new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5
)
world.addBody(arbol1Body)
*/
//-----------------------
//Pruebas

const sphereShape = new CANNON.Sphere(10)  // DIAMETRO
const sphereBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0 ,50 ,70), //x, y, z //POS ARBOL 0 ,50 ,90
    shape: sphereShape,
    material: defaultMaterial
    
})
world.addBody(sphereBody)

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(10, 10, 10), // DIAMETRO
    new THREE.MeshStandardMaterial({
        metalness: 0.3,
        roughness: 0.4,
    })
)
sphere.castShadow = true
sphere.position.y = 40
scene.add(sphere)
//__

//agregamos luz
const directionalLight = new THREE.DirectionalLight('#ffffff', 4)
directionalLight.castShadow = true
directionalLight.shadow.camera.far = 15
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(3.5, 2, - 1.25)
scene.add(directionalLight)


renderer.physicallyCorrectLights = true
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.CineonToneMapping
renderer.toneMappingExposure = 1.75
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setClearColor('#211d20')

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//COLORFONDO

debugObject.clearColor = '#211d20'
renderer.setClearColor(debugObject.clearColor)
gui
    .addColor(debugObject,'clearColor')
    .onChange(()=>{
        renderer.setClearColor(debugObject.clearColor)
    })

//añadimos el controlador orbital
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 100, 0);
controls.update();

//añadimos el control del teclado
const onKeyDown = function (event) {
    //console.log(event.code);
    switch (event.code) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = true;
            console.log("adelante");
            console.log(perso.position.x);
            perso.position.x -= 5;
            x-=5;
            camera.position.x=x;
            
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = true;
            console.log("izquierda");
            perso.position.z += 5;
            z+=5;
            camera.position.z=z;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = true;
            console.log("atras");
            perso.position.x += 5;
            x+=5;
            camera.position.x=x;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = true;
            console.log("derecha");
            perso.position.z -= 5;
            z-=5;
            camera.position.z=z;
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
/*
function colisionBloques(){
	for (var i = 0; i < numeroCosas; i++) {
		if(Math.sqrt(Math.pow((posx - cubos[i].position.x), 2) + Math.pow((posz - cubos[i].position.z), 2)) < 100){
			 cubos[i].material.color.set( 0xff00ff );
		}
	}
}
*/
const clock = new THREE.Clock()
let oldElapsedTime = 0


const animate = function () {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime
    oldElapsedTime = elapsedTime

    world.step(1/60, deltaTime, 3)
    sphere.position.copy(sphereBody.position)

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
   // colisionBloques();
    
};

animate();