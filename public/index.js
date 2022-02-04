
import * as THREE from './build/three.module.js';
import { STLLoader } from './jsm/loaders/STLLoader.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
//import { FBXLoader } from './jsm/loaders/FBXLoader.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import * as dat from './threejs/libs/dat.gui.module.js';

//Visibilidad de las fisicas
let fisicasVisibles = true;
//CONJUNTO DE OPCIONES
const debugObject = {}
//CONFIGURACION ~ MENU ~
const gui = new dat.GUI({
    width: 250
})
//CAMBIAR VISIBILIDAD DE LAS FISICAS
debugObject.mostrarFisicas = () =>{
    if (fisicasVisibles == false){
        fisicasVisibles = true        
    }else{(fisicasVisibles == true)
        fisicasVisibles = false        
    }    
}

debugObject.Teletrasportar = ()=>{
    teleport(-180, 21,  5)
}
//CREAR UNA SPHERA 
debugObject.probarFisicas = () =>{
    //createSphere(10, {x:0, y: 20, z: 50})
    createSphere(10, {x:5, y: 34, z: 5})
}
//AÑADIR AL MENU
debugObject.getPospersonaje = () =>{
    //createSphere(10, {x:0, y: 20, z: 50})
    console.log(personew.position)
}

gui.add(debugObject, 'Teletrasportar')
gui.add(debugObject, 'mostrarFisicas')
gui.add(debugObject, 'probarFisicas')
gui.add(debugObject, 'getPospersonaje')

//BARRA DE CARGA
const loadingBarElement = document.querySelector('.loading-bar')
const loadingManager = new THREE.LoadingManager(
    //CARGADO
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

//CAMARA 
let x=83,z=24;
//
const raycaster = new THREE.Raycaster();

const scene = new THREE.Scene();

debugObject.fondoPaisaje = () =>{
    const texture = new THREE.TextureLoader();
    texture.load('./img/atardecer.jpg', function (tex) {
    scene.background = tex;
});
}
gui.add(debugObject, 'fondoPaisaje')
/*FONDO CON IMAGEN
const texture = new THREE.TextureLoader();
texture.load('atardecer.jpg', function (tex) {
    scene.background = tex;
});
*/

///DESPUES DE CARGAR LA ESCENA
const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
const overlayMaterial = new THREE.ShaderMaterial({
   //Comentar WIREFRAMA
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
document.body.appendChild(renderer.domElement);
//camera.position.set(100, 80, 100)
camera.position.set(83, 42, 24)

gui.add(camera.position, 'x')
gui.add(camera.position, 'y')
gui.add(camera.position, 'z')

debugObject.posicioncamara = () =>{
    //createSphere(10, {x:0, y: 20, z: 50})
    console.log("-------POSICION-------------------------------");
    console.log(personew.position);
    console.log(camera.position)
    console.log("---------------------------------------");
}
gui.add(debugObject, 'posicioncamara')

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
//const fbx = new FBXLoader();
//var grupoPersonaje=new THREE.Group();
//var objetos=new THREE.Group();
var personew=new THREE.Group();
//var perso=new THREE.Object3D();

/*
fbx.load('3dmodels/chibi.fbx',function(personaje){
    personaje.position.set(-100,0,-100);
    perso=personaje;
    //grupoPersonaje.add(personaje);
    //sessionStorage.setItem('personaje',personaje);
    scene.add(personaje);
});*/
//grupoPersonaje.add(sessionStorage.getItem('personaje'));

//ESCENARIO
const gltfLoader2 = new GLTFLoader();
gltfLoader.load("3dmodels/Escenario3.gltf", function (obj) {
    obj.scene.scale.set(20,20,20);
    scene.add(obj.scene);    
});

//ANIMACIONES PERSONAJE
let mixer = null
let action = null
const actualizarMovimientos = []
///---------------------------------------------------------------------------------------------------------------------------------------
gltfLoader2.load("3dmodels/Fox/gltf/Fox1.gltf",function(objfox){
    mixer = new THREE.AnimationMixer(objfox.scene)        
    action = mixer.clipAction(objfox.animations[2])
    objfox.scene.scale.set(0.2,0.2,0.2);
    personew.add(objfox.scene)
});
scene.add(personew);

//FISICAS-------------------------------------------------
const world = new CANNON.World()
const objetsToUpdate = []
//world.broadphase = new CANNON.SAPBroadphase(world)
//world.allowSleep = true
world.gravity.set(0, -9.82, 0)
//MATERIAL
const defaultMaterial = new CANNON.Material('default')
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

//FISICAS PERSONAJE

const personajeGeometry = new THREE.BoxBufferGeometry(10, 10, 10)
const personajeMaterial = new THREE.MeshStandardMaterial({
    
    wireframe: true,
    color: '#ffff00', 
})
const pMesh = new THREE.Mesh(personajeGeometry,personajeMaterial)
pMesh.castShadow = true
pMesh.position.copy({x:5 ,y: 15 ,z: 5})
//pMesh.position.copy(personew.position)
scene.add(pMesh)

const pShape = new CANNON.Box(new CANNON.Vec3(5, 5, 5))
const pBody = new CANNON.Body({
    mass: 1,
    shape:pShape,
    linearDamping: 0.9
    //
})
pBody.position.copy(pMesh.position)
actualizarMovimientos.push({
    pMesh,
    pBody  
})
world.addBody(pBody)
//TELEPORT- Invisible
const TPShape = new CANNON.Box(new CANNON.Vec3(10 ,10 ,10))
const TPBody = new CANNON.Body({
    mass: 0,
    shape:TPShape,
    linearDamping: 0.9,
    position: new THREE.Vector3({x: -75 ,y: 5 ,z: 5})
    //
})
TPBody.position.copy({x: -75 ,y: 5 ,z: 5})
world.addBody(TPBody)

//MOSTRAR MALLA FISICAS
//ARBOLES MAPA: 1
createBox(20, 30, 20,{x: 0 ,y: 15 ,z: 90})//Arbol 1
createBox(20, 30, 20,{x: 6 ,y: 15 ,z: -223})//Arbol 2
createBox(20, 30, 20,{x: -48 ,y: 15 ,z: -195})//Pino
//Letrero
createBox(20, 30, 20,{x: -213 ,y: 36 ,z: 8})
//ARBOLES MAPA: 2
createBox(20, 30, 20,{x: -195 ,y: 36 ,z: -142}) //Arbol 1
createBox(20, 30, 20,{x: -420 ,y: 36 ,z: -343}) //Arbol 2
createBox(20, 30, 20,{x: -468 ,y: 36 ,z: -295}) //Arbol 3
createBox(20, 30, 20,{x: -597 ,y: 36 ,z: -295}) //Arbol 4
createBox(20, 30, 20,{x: -534 ,y: 36 ,z: -391}) //Arbol 5
createBox(20, 30, 20,{x: -180 ,y: 36 ,z: -910}) //Arbol 6
createBox(20, 30, 20,{x: -234 ,y: 36 ,z: -916}) //Arbol 7

//Cerca Izquierda Mapa: 2
createBox(510, 30, 20,{x: -380 ,y: 36 ,z: 150})
createBox(20, 30, 1950,{x: -130 ,y: 36 ,z: -787}) //Cerca Inferior Mapa: 2
//createBox(20, 20, 20,{x: -75 ,y: 5 ,z: 5})
//PISO:1
//| Atras | Ancho | Volumen|
createFloor(150,385, 5,{x: 0 ,y: -2 ,z: -40})       //| +Adelante ,  | -Atras
//PISO:2                                           // | +izquierda , | -Derecha 
createFloor(2346,3400, 5,{x: -1280 ,y: 19 ,z: -90}) //X:Profundidad, Y:Altura, Z:Lados
//PISO:3
//createFloor(10,10, 10,{x: 0 ,y: 30 ,z: -100}) 
//PISO:4
//createFloor(1550,1250, 5,{x: 400 ,y: -12 ,z: -800})


//agregamos luz
const directionalLight = new THREE.DirectionalLight('#ffffff', 4)
directionalLight.castShadow = true
directionalLight.shadow.camera.far = 15 // 15
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



//Añadimos el controlador orbital
let frenteLibre = true 
const colision = (colision) =>{
    console.log("Choco")
    if ( personew.position.x == -63 && personew.position.y == 0){
        teleport(-180, 21,  5)
    }
    frenteLibre = false
}
const controls = new OrbitControls(camera, renderer.domElement);

const teleport = (x2,y2,z2) => {
    personew.position.copy({x:x2 ,y: y2 ,z: z2})  //Cambiar por x2, y2,z2
    camera.position.set(x2+80, y2+42, z2+24) //THREE.Vector3({x:5, y: 34, z: 5}
    camera.lookAt(personew.position)
    controls.target.set(personew.position.x-10,50,personew.position.z-10);
    controls.update();
    x = x2 + 83
    z = z2 + 24
    //console.log("TP")
}
//const velocidadMovimientoZorro = 3
const velocidadMovimientoZorro = 6

//añadimos el control del teclado
const onKeyDown = function (event) {
    //console.log(event.code);
    camera.lookAt(personew.position)
    controls.target.set(personew.position.x,42,personew.position.z);
    controls.update();
    //console.log(camera.position)
    
    //console.log(pBody.collisionResponse)

    if(frenteLibre){
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                moveForward = true;                    
                action.play()                               
                personew.position.x -= velocidadMovimientoZorro;
                x-=velocidadMovimientoZorro;
                personew.rotation.y =  0            
                camera.position.x=x+velocidadMovimientoZorro;
                break;
    
            case 'ArrowLeft':
            case 'KeyA':
                moveLeft = true;
                action.play()            
                personew.rotation.y = Math.PI / 2
                personew.position.z += velocidadMovimientoZorro;
                z+=velocidadMovimientoZorro;
                camera.position.z=z-velocidadMovimientoZorro;
                break;
    
            case 'ArrowDown':
            case 'KeyS':
                moveBackward = true;
                action.play()            
                personew.position.x += velocidadMovimientoZorro;
                x+=velocidadMovimientoZorro;
                personew.rotation.y = Math.PI
                camera.position.x=x+velocidadMovimientoZorro;           
                break;
    
            case 'ArrowRight':
            case 'KeyD':
                moveRight = true;
                action.play()        
                personew.rotation.y = - Math.PI / 2
                personew.position.z -= velocidadMovimientoZorro;
                z-=velocidadMovimientoZorro;
                camera.position.z=z+velocidadMovimientoZorro;
                break;
    
            case 'Space':
                if (canJump === true) velocity.y += 350;
                canJump = false;
                break;
        }
    }
};

const onKeyUp = function (event) {
    frenteLibre = true
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            mixer.stopAllAction()            
            moveForward = false;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            mixer.stopAllAction()  
            moveLeft = false;
            break;

        case 'ArrowDown':
        case 'KeyS':
            mixer.stopAllAction()  
            moveBackward = false;
            break;

        case 'ArrowRight':
        case 'KeyD':
            mixer.stopAllAction()  
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
//TIEMPOs Y Actualizacion
const clock = new THREE.Clock()
let oldElapsedTime = 0

const animate = function () {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime
    oldElapsedTime = elapsedTime

    world.step(1/60, deltaTime, 3)
    //MIXER ZORRO
    if(mixer != null){
        mixer.update(deltaTime)
    }
    //pMesh.position.copy(personew.position)
    
    //pMesh.position.copy(pBody.position)
    //pMesh.quaternion.copy(pBody.quaternion)
    //pMesh.position.copy({x: personew.position.x ,y: 6 ,z: personew.position.z})
    //meshPersonaje.position.copy(personajeBody.position)
    pBody.position.copy({x:personew.position.x  ,y:personew.position.y + 10 ,z:personew.position.z})
    //pBody.position.copy(personew.position)
    
    pBody.addEventListener("collide",colision)
    //Teleport position
    //TPBody.addEventListener("collide", teleport(-180, 20, 5))
    for(const obj of actualizarMovimientos){
        obj.pMesh.visible = fisicasVisibles
        obj.pMesh.position.copy(obj.pBody.position)
        //obj.pMesh.quaternion.copy(obj.pBody.quaternion)
    }
    
    for(const object of objetsToUpdate)
    {
        object.mesh.visible = fisicasVisibles
        object.mesh.position.copy(object.body.position)
        object.mesh.quaternion.copy(object.body.quaternion)
    }
    
    requestAnimationFrame(animate);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    // colisionBloques();
    //colision()
    
};

animate();
/*
function colision(){
    var raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector3();
    var INTERSECTED;
    pointer.x=personew.position.x;
    pointer.y=personew.position.y;
    pointer.z=personew.position.z;
    raycaster.setFromCamera( pointer, camera );
    const intersects = raycaster.intersectObjects( scene.children, true);
    if(intersects.length > 0){
        if(INTERSECTED != intersects[ 0 ].object){
            console.log("colisiono");
            //personew.position.y += 1;
        }
    }
    /*else{
        personew.position.y -= 1;
    }
}
*/