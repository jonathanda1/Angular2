// Set up scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create the canvas element and add it to the page
// Setting alpha: true creates a transparent bg
var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


/////////////////////////////////////////////////////////
// Code starts here

// Create a cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

var geometry = new THREE.SphereGeometry( 2, 32, 32 );
var material = new THREE.MeshNormalMaterial();
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

var geometry = new THREE.SphereGeometry( 1, 32, 32 );
var material = new THREE.MeshNormalMaterial();
var sphere2 = new THREE.Mesh( geometry, material );
scene.add( sphere2 );

var geometry = new THREE.SphereGeometry( 0.9, 32, 32 );
var material = new THREE.MeshNormalMaterial();
var sphere3 = new THREE.Mesh( geometry, material );
scene.add( sphere3 );

var geometry = new THREE.SphereGeometry( 0.75, 32, 32 );
var material = new THREE.MeshNormalMaterial();
var sphere4 = new THREE.Mesh( geometry, material );
scene.add( sphere4 );

// Zoom the camera out so we can see the cube
camera.position.z = 10;
camera.position.x = 1;
camera.position.y = 1;

// sphere.position.x = 0;
// sphere.position.y = 0;
// sphere.position.z = 0;


sphere2.position.y = 5;
sphere2.position.x = 10;
sphere2.position.z = 2;

sphere3.position.y = 25;
sphere3.position.x = 7;
sphere3.position.z = 5;

sphere4.position.y = 40;
sphere4.position.x = 20;
sphere4.position.z = 5;



// create the particle variables
var particleCount = 3000;
var particles = new THREE.Geometry();
var pMaterial = new THREE.PointsMaterial({
    vertexColors: THREE.VertexColors,
    size: 0.2
});

// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 500 - 250;
  var pY = Math.random() * 500 - 250;
  var pZ = Math.random() * 500 - 250;
  var particle = new THREE.Vector3(pX, pY, pZ);
  var color = new THREE.Color('white')

  // add it to the geometry
  particles.colors.push(color)
  particles.vertices.push(particle);
}

// create the particle system
var particleSystem = new THREE.Points( particles, pMaterial);

// add it to the scene
scene.add(particleSystem);

// add interactivity to page
$(document).mousemove(function(event) {
    var y = event.pageX / window.innerWidth - 0.5
    var x = event.pageY / window.innerHeight - 0.5
    var scalingFactor = 3

    camera.rotation.y = y * scalingFactor;
    camera.rotation.x = x * scalingFactor;
});

// The render loop
// Loop that executes at 60fps
function render() {
    requestAnimationFrame( render );

// The cube looks like a standard div right now
// Let's rotate it a little bit every frame so that we can see it's in 3D
cube.rotation.x += 0.1
cube.rotation.y += 0.1

particleSystem.rotation.y += 0.001

// sphere2.rotation.x += 0.1
// sphere2.rotation.y += 0.1

// rotate the camera
// camera.rotation.y += 0.03
// camera.rotation.x += 0.01


    // Any updates to scene, camera, or objects go here
    // That is, this is where the animation happens!

    renderer.render( scene, camera );
}
render();

function degreesToRadians () {
  return degrees / 100 * Math.PI
}
