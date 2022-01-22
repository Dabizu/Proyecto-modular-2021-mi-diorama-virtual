
import * as THREE from './build/three.module.js';
import { STLLoader } from './jsm/loaders/STLLoader.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import * as dat from './threejs/libs/dat.gui.module.js';

let fisicasVisibles = true;

const debugObject = {}
const gui = new dat.GUI({
    width: 250
})


debugObject.mostrarFisicas = () =>{
    if (fisicasVisibles == false){
        fisicasVisibles = true        
    }else{(fisicasVisibles == true)
        fisicasVisibles = false        
    }    
}

debugObject.probarFisicas = () =>{
    createSphere(10, {x:0, y: 20, z: 50})
}
gui.add(debugObject, 'mostrarFisicas')
gui.add(debugObject, 'probarFisicas')

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
camera.position.set(190, 120, 100)

//camera.position.set(100, 100, 100)
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
/*
fbx.load('3dmodels/chibi.fbx',function(personaje){
    personaje.position.set(-100,0,-100);
    perso=personaje;
    //grupoPersonaje.add(personaje);
    //sessionStorage.setItem('personaje',personaje);
    scene.add(personaje);
});*/
//grupoPersonaje.add(sessionStorage.getItem('personaje'));

const gltfLoader2 = new GLTFLoader();
gltfLoader.load("3dmodels/Escenario3.gltf", function (obj) {
    obj.scene.scale.set(20,20,20);
    scene.add(obj.scene);
    //objetos.add(obj);
});
gltfLoader2.load("3dmodels/Fox/gltf/Fox2.gltf",function(objfox){
    objfox.scene.scale.set(0.2,0.2,0.2);
    personew.add(objfox.scene)
});
scene.add(personew);
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
    mass: 0,
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

const sphereGeometry = new THREE.SphereBufferGeometry(1, 10, 10)
const sphereMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,    
})
const createSphere = (radius, position) =>
{
    //THREE.JS MESH
    const mesh = new THREE.Mesh(sphereGeometry,sphereMaterial)
    mesh.scale.set(radius, radius, radius)
    mesh.castShadow = true
    mesh.position.copy(position)
    scene.add(mesh)

    // Cannon.js body
    const shape = new CANNON.Sphere(radius)
    const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 30, 0),
    shape,
    material: defaultMaterial
})
body.position.copy(position)
world.addBody(body)
    //SAVE OBJECTS TO UPDATE
    objetsToUpdate.push({
        mesh,
        body        
    })
}

//ARBOL:1 
createBox(20, 30, 20,{x: 0 ,y: 15 ,z: 90})

//PISO:1
//| Atras | Ancho | Volumen|
createFloor(150,385, 5,{x: 0 ,y: -2 ,z: -40})       //| +Adelante ,  | -Atras
//PISO:2                                           // | +izquierda , | -Derecha 
createFloor(2346,3400, 5,{x: -1280 ,y: 20 ,z: -90}) //X:Profundidad, Y:Altura, Z:Lados
//PISO:3
//createFloor(1600,1656, 5,{x: -1644 ,y: 30 ,z: -550}) 
//PISO:4
//createFloor(1550,1250, 5,{x: 400 ,y: -12 ,z: -800})


//agregamos luz
const directionalLight = new THREE.DirectionalLight('#ffffff', 4)
directionalLight.castShadow = true
directionalLight.shadow.camera.far = 30 // 15
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
            personew.position.x -= 5;
            x-=5;
            camera.position.x=x;
            
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = true;
            console.log("izquierda");
            personew.position.z += 5;
            z+=5;
            camera.position.z=z;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = true;
            console.log("atras");
            personew.position.x += 5;
            x+=5;
            camera.position.x=x;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = true;
            console.log("derecha");
            personew.position.z -= 5;
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

    for(const object of objetsToUpdate)
    {
        object.mesh.visible = fisicasVisibles
        object.mesh.position.copy(object.body.position)
        object.mesh.quaternion.copy(object.body.quaternion)
    }
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
   // colisionBloques();
    
};

animate();