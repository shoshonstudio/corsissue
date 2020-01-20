var scene = new THREE.Scene();
var ratio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
  0.1, 50);
camera.position.z = 30;

var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);

var canvas = renderer.domElement;
canvas.style.display = 'block';

document.body.appendChild(canvas);

var lights = [];
lights[0] = new THREE.PointLight(0xffffff, 1, 0);
lights[1] = new THREE.PointLight(0xffffff, 1, 0);
lights[2] = new THREE.PointLight(0xffffff, 1, 0);

lights[0].position.set(0, 200, 0);
lights[1].position.set(100, 200, 100);
lights[2].position.set(-100, -200, -100);

scene.add(lights[0]);
scene.add(lights[1]);
scene.add(lights[2]);

/**
 * Will be called when load completes.
 * The argument will be the loaded texture.
 */
var onLoad = function (texture) {
  var objGeometry = new THREE.BoxGeometry(20, 20, 20);
  var objMaterial = new THREE.MeshPhongMaterial({
    map: texture,
    shading: THREE.FlatShading
  });

  var mesh = new THREE.Mesh(objGeometry, objMaterial);

  scene.add(mesh);

  var render = function () {
    requestAnimationFrame(render);

    mesh.rotation.x += 0.010;
    mesh.rotation.y += 0.010;

    renderer.render(scene, camera);
  };

  render();
}

// Function called when download progresses
var onProgress = function (xhr) {
  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
};

// Function called when download errors
var onError = function (xhr) {
  console.log('An error happened');
};
// var loader = new THREE.TextureLoader();

var earthImage = new Image();
// earthImage.crossOrigin = "anonymous";

const imageContainer = document.getElementById('imageContainer');

earthImage.onload = function(texture) {
  // whatever you usually to do load WebGL textures
  console.log(texture);

  

  const img = document.createElement('img');
  
  //img.Image = texture;
  img.src = "https://firebasestorage.googleapis.com/v0/b/georeality-c05a1.appspot.com/o/geoprojects%2FZGVmYXVsdA%3D%3D%2F1%2FtourAnnotations%2Fuser_Lines_1_0?alt=media&token=e3e4dff1-052c-49d7-aa42-09eec29b6990";

  imageContainer.appendChild(img);
};
earthImage.src = "https://firebasestorage.googleapis.com/v0/b/georeality-c05a1.appspot.com/o/geoprojects%2FZGVmYXVsdA%3D%3D%2F1%2FtourAnnotations%2Fmaster_Lines_0_0?alt=media&token=5bff319d-0aef-4411-9ef0-9dac17f92f78";


// loader.crossOrigin = 'anonymous';
// // loader.setCrossOrigin('');

// const firstPath = "https://firebasestorage.googleapis.com/v0/b/georeality-c05a1.appspot.com/o/geoprojects%2FZGVmYXVsdA%3D%3D%2F1%2FtourAnnotations%2Fmaster_Lines_0_0?alt=media&token=5bff319d-0aef-4411-9ef0-9dac17f92f78";
// const secondPath = "http://www.imagestock.us/images/2447_FountainPl_345pxl.jpg";
// const thirdPath = "texture.jpg";

// // loader.load('texture.jpg', onLoad, onProgress, onError);
// loader.load(firstPath, onLoad, onProgress, onError);