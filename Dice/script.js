// Initialize Three.js variables
var scene, camera, renderer, cube;

// Initialize device motion variables
var accelerationX = 0;
var accelerationY = 0;
var accelerationZ = 0;

// Initialize gyroscope event handler
window.addEventListener('devicemotion', function(event) {
  // Extract acceleration data
  accelerationX = event.accelerationIncludingGravity.x;
  accelerationY = event.accelerationIncludingGravity.y;
  accelerationZ = event.accelerationIncludingGravity.z;
});

// Initialize Three.js scene
function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

// Update cube position based on device motion
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += accelerationX / 100;
  cube.rotation.y += accelerationY / 100;
  cube.rotation.z += accelerationZ / 100;

  renderer.render(scene, camera);
}

// Initialize scene and start animation
init();
animate();
