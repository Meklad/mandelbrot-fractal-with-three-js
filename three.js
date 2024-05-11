console.log("Three.js Start");

var scene = new THREE.Scene();
var camera = new THREE.Camera();
camera.position.z = 1;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);