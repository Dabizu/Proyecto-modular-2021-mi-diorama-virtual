

/*
import * as THREE from './build/three.module.js';
const scene = new THREE.Scene();
scene.background=new THREE.Color(0x591405);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x0AE1C7  } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//construccion de panel
//var y = window.innerHeight / 3;
//var x = window.innerWidth / 3;
const geometryPanel=new THREE.PlaneGeometry(5,5);
const materialPanel=new THREE.MeshBasicMaterial({color:0x11E10A});
const plane = new THREE.Mesh(geometryPanel, materialPanel);
scene.add(plane);



function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    //if(Math.sqrt(Math.pow((cube.position.x - cube.position.x), 2) + Math.pow((cube.position.z - cube[i].position.z), 2)) < 100){
    

    renderer.render( scene, camera );
};

animate();
*/