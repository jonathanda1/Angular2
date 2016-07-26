# WebGL

---

## Learning Objectives

SWBAT:

- Render 3-D objects to a WebGL Canvas using the THREE.JS library
- Animate their 3-D objects using the requestAnimationFrame render loop
- Add interactivity to a THREE.JS rendering using jQuery

---

## WebGL

- A JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins.
- Allows for direct access to the computer's GPU (graphics card)
- Similar to Canvas, but faster and more powerful

---

## WebGL

- Difficulty: Hard
- Lots of low-level commands make it difficult to actually use
- Thankfully, there's plenty of libraries and frameworks that make WebGL easier to use

---

## ThreeJS

- A Javascript 3-D Graphics library that uses WebGL
- Difficulty: Medium (but Easy by 3-D rendering standards)
- Docs: [http://threejs.org/docs/](http://threejs.org/docs/)
- There aren't too many resources available on the internet about ThreeJS, so the docs will be your best friend

---

## Some 3-D rendering terminology

- Geometry: A series of vertices that define a shape
- Texture: detailed information about the surface of an object
- Mesh: vertices, edges, and faces that represent the 3d object (with any material mapping)
- Shader: how the shading of surface of the object responds

---

## ThreeJS terminology

- Scene: Holds all of the objects you want. The global container for all ThreeJS objects.
- Camera: Controls how we view the scene, things like perspective, field of view (FOV), and rotational axes
- Renderer: Takes all the information from the scene and camera and renders it in 3D to the screen

---

# Starter Code Walkthrough

---

## How to create a 3D object

1. Create a Geometry
2. Create a Material
3. Combine the Geometry and Material into a Mesh
4. Add the Mesh to the scene

---

## Creating a cube

```js
// Create a cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Zoom the camera out so we can see the cube
camera.position.z = 5;
```

---

## Pair Programming

1. Comment out the line where you set the camera position and reload the page. What happens?
2. Mess with the camera position and box dimensions and observe how it affects the rendering. 

---

## Rotating the cube

```js
// The cube looks like a standard div right now
// Let's rotate it a little bit every frame so that we can see it's in 3D
// Add this code within the render loop
cube.rotation.x += 0.1
cube.rotation.y += 0.1
```

---

## Independent Practice

1. Look up the documentation for MeshNormalMaterial. Why is the cube multi-colored?
2. Make the camera rotate around the y-axis. What is happening in the scene?

---

## Sphere Geometry

- Let's look up the docs for SphereGeometry
- It requires atleast 3 arguments:
  - radius, widthSegments, heightSegments
- Computers can only draw straight lines, so the "sphere" is actually a bunch of small triangles stitched together to look like a sphere. 
- The widthSegments and heightSegments specify how many lines to use for the rendering. 
- More segments == Better quality == More computations required

---

## Partner Programming

1. Let's look up the docs for SphereGeometry together
2. Add a sphere to the scene just like we added the cube earlier
3. Use MeshNormalMaterial again
4. The sphere should have a radius of 1, 32 widthSegments, and 32 heightSegments
5. Change the sphere.position.x to 2 so that the sphere doesn't overlap with the cube
BONUS: Change the widthSegments and heightSegments to a small number and see how it affects the sphere

---

## Adding Interactivity

```js
$(document).mousemove(function(event) {
    var y = event.pageX / window.innerWidth - 0.5
    var x = event.pageY / window.innerHeight - 0.5
    var scalingFactor = 1
    
    camera.rotation.y = y * scalingFactor;
    camera.rotation.x = x * scalingFactor;
});
```

---

## 1000 Particle cloud

```js
// create the particle variables
var particleCount = 1000;
var particles = new THREE.Geometry();
var pMaterial = new THREE.PointsMaterial({
	color: "#f0f",
	size: 10
});
```

---

## 1000 Particle cloud

```js
// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 500 - 250;
  var pY = Math.random() * 500 - 250;
  var pZ = Math.random() * 500 - 250;
  var particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
  particles.vertices.push(particle);
}
```

---

## 1000 Particle cloud

```js
// create the particle system
var particleSystem = new THREE.Points( particles, pMaterial);

// add it to the scene
scene.add(particleSystem);

// move the camera back, so we can see more particles
camera.position.z = 20
```

---

## Rotating particles

```js
 // Add this inside your render loop to watch your particles swirl!
particleSystem.rotation.y += .01;
```

---

## Challenge

Can you randomize the particle colors, so we have a multi-colored see of beauty floating in front of us?

---

## Play time

Take the rest of the class period to experiment with your 3-D scene. Some suggestions:

- Make your objects interactive
	- http://threejs.org/examples/#webgl_interactive_cubes
- Use the shader to add shadows to your cubes and spheres
- Add a cool background to your page
- Create interesting geometries
	- http://threejs.org/examples/#webgl_geometries




