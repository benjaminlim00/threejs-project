import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const scene = new THREE.Scene();

// create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);

// add color and texture
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  roughness: 0.4,
  // metalness: 0.5,
});

// create mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes using viewport
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// add light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
light.intensity = 1.25;
scene.add(light);

// add camera
const camera = new THREE.PerspectiveCamera(
  45, // field of view, above 50 gives distortion
  sizes.width / sizes.height, // aspect ratio,
  0.1, // near clipping plane
  100 // far clipping plane
);
camera.position.set(0, 0, 20); // set z to 20 to see the sphere
scene.add(camera);

// select canvas
const canvas = document.querySelector(".webgl");

// create renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
// set size of renderer
renderer.setSize(sizes.width, sizes.height);
// set pixel ratio
renderer.setPixelRatio(Math.max(window.devicePixelRatio, 2));
renderer.render(scene, camera);

// add controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

// add resize event listener
window.addEventListener("resize", () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // update camera
  camera.aspect = sizes.width / sizes.height;

  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const animate = () => {
  controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();

// gsap timeline
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// animate mesh scale using tl fromto
tl.fromTo(mesh.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });

// animte nav from y -100 to 0
tl.fromTo(".nav", { y: "-100" }, { y: "0" });

// animte title opacity from 0 to 1
tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });

// mouse animation
let mouseDown = false;
let rgb = [];

window.addEventListener("mousedown", () => {
  mouseDown = true;
});
window.addEventListener("mouseup", () => {
  mouseDown = false;
});

window.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.height) * 255),
      150,
    ];

    // animate using gsap
    let newColor = new THREE.Color(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    gsap.to(mesh.material.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
    });
  }
});
