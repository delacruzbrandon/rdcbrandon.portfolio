import * as THREE from 'three';

// 1. Add Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add Camera
const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5

// 3. Create Objects
const geometry = new THREE.CylinderGeometry();
const material = new THREE.MeshBasicMaterial({color: '#468585'})
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add Lighting
const light = new THREE.DirectionalLight(
    0x9CDBA6,
    10
);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Add Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animate Scene
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
