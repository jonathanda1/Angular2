// particles attempt #1
var particles = [];
for (var i = 0; i < 100; i++) {
  var geometry = new THREE.SphereGeometry( 5, 32, 32 );
  var material = new THREE.MeshNormalMaterial(  );
  var sphere = new THREE.Mesh( geometry, material );

  // Randomize starting positions
  sphere.position.x = Math.random() * 500 - 250,
  sphere.position.y = Math.random() * 500 - 250,
  sphere.position.z = Math.random() * 500 - 250,

  scene.add( sphere );
  particles.push(sphere);
}