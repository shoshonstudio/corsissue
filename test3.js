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
  var objGeometry = new THREE.BoxGeometry(10, 5, 20);
  var objMaterial = new THREE.MeshPhongMaterial({
    map: texture,
    shading: THREE.FlatShading
  });

  var mesh = new THREE.Mesh(objGeometry, objMaterial);

  mesh.position.x = 10;

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
var loader = new THREE.TextureLoader();

var earthImage = new Image();
// earthImage.crossOrigin = "anonymous";

const imageContainer = document.getElementById('imageContainer');

const firstPath = "https://firebasestorage.googleapis.com/v0/b/georeality-c05a1.appspot.com/o/geoprojects%2FZGVmYXVsdA%3D%3D%2F1%2FtourAnnotations%2Fmaster_Lines_0_0?alt=media&token=5bff319d-0aef-4411-9ef0-9dac17f92f78";
const secondPath = "http://www.imagestock.us/images/2447_FountainPl_345pxl.jpg";
const thirdPath = "texture.jpg";
const fourthPath = 'https://firebasestorage.googleapis.com/v0/b/georeality-c05a1.appspot.com/o/Viking_01.png?alt=media&token=26b44b8e-a462-4300-9435-b09930eb8327';
const fifthPath = 'https://firebasestorage.googleapis.com/v0/b/georeality-c05a1.appspot.com/o/texture.jpg?alt=media&token=43aa0f5b-1bf5-48f5-bd27-142e2d947f97';
const sixthPath = 'http://localhost/petramode/texture.jpg';
const seventhPath = 'https://firebasestorage.googleapis.com/v0/b/test-df95f.appspot.com/o/texture.jpg?alt=media&token=629a7155-f3c9-4e57-a69f-d937aed9f274';

function drawDataURIOnCanvas(strDataURI, canvas) {
    "use strict";
    var img = new window.Image();
    img.addEventListener("load", function () {
        canvas.getContext("2d").drawImage(img, 0, 0);
    });
    img.setAttribute("src", strDataURI);
}


const img = document.createElement('img');

earthImage.onload = function(texture) {
  // whatever you usually to do load WebGL textures



  // img.crossorigin = 'anonymous';
  
  //img.Image = texture;
  img.src = thirdPath;



  imageContainer.appendChild(img);

  console.log(imageContainer);

  // var heightMap = texture;
  // var canvas2 = document.createElement('canvas');
  // var context = canvas2.getContext('2d');

// canvas.width = this.image.width;
// canvas.height = this.image.height;

  // canvas2.width = 200;
  // canvas2.height = 200;

  // context.drawImage(texture.image, 0, 0 );

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");


  ctx.drawImage(img, 0, 0);

  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 50, 50);

  // var dataURL = c.toDataURL();
  // console.log(dataURL);
  // var imgData = ctx.getImageData(0, 0, 250, 250);

  // 
  
  // copy();

  function copy() {
    var imgData = ctx.getImageData(0, 0, 256, 256);

    console.log(imgData);

    ctx.putImageData(imgData, 10, 70);

    var texture = new THREE.Texture(imgData);

    texture.needsUpdate = true;    

    var newGeo = new THREE.BoxGeometry(10, 5, 20);

    var newMat = new THREE.MeshBasicMaterial({ map: texture })

    var newMesh = new THREE.Mesh(newGeo, newMat);

    scene.add(newMesh)
  }

  // var myData = context.getImageData(0, 0, texture.image.width, texture.image.height);
};
earthImage.src = thirdPath;


// loader.crossOrigin = 'anonymous';
// // loader.setCrossOrigin('');


// loader.load('texture.jpg'  + '?' + new Date().getTime(), onLoad, onProgress, onError);
// loader.load(firstPath, onLoad, onProgress, onError);



