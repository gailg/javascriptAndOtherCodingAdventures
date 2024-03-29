let camera;
let scene;
let renderer;

function init() {
    let stats = initStats();
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 0.015, 100);
    // scene.fog = new THREE.FogExp2(0xffffff, 0.001);
    scene.overrideMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xEEEEEE, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    

    let axes = new THREE.AxesHelper(20);
    scene.add(axes);

    let planeGeometry = new THREE.PlaneGeometry(60, 20);
    let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    scene.add(camera);

    let spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    let ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    document.getElementById("WebGL-output").appendChild(renderer.domElement);
    let step = 0;
    let controls = new function() {
        this.rotationSpeed = 0.02;
        this.numberOfObjects = scene.children.length;
        this.removeCube = function () {
            let allChildren = scene.children;
            let lastObject = allChildren[allChildren.length - 1];
            if (lastObject instanceof THREE.Mesh) {
                scene.remove(lastObject);
                this.numberOfObjects = scene.children.length;
            }
        }
        this.addCube = function() {
            let cubeSize = Math.ceil((Math.random() * 3));
            let cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            let cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.castShadow = true;
            cube.name = "cube-" + scene.children.length;
            cube.position.x = -30 + Math.round((Math.random() * planeGeometry.parameters.width));
            cube.position.y = Math.round((Math.random() * 5));
            cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height));
            scene.add(cube);
            this.numberOfObjects = scene.children.length;
        }
        this.outputObjects = function() {
            console.log(scene.children);
        }
    }
    let gui = new dat.GUI();
    gui.add(controls, "rotationSpeed", 0, 0.5);
    gui.add(controls, "addCube");
    gui.add(controls, "removeCube");
    gui.add(controls, "outputObjects");
    gui.add(controls, "numberOfObjects").listen();
    render();

    function render() {
        stats.update();
        scene.traverse(function(e){
            if(e instanceof THREE.Mesh && e != plane) {
                e.rotation.x += controls.rotationSpeed;
                e.rotation.y += controls.rotationSpeed;
                e.rotation.z += controls.rotationSpeed;
            }
        });
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function initStats() {
        let stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = "absolute";
        stats.domElement.style.left = "0px";
        stats.domElement.style.top = "0px";
        document.getElementById("stats-output").appendChild(stats.domElement);
        return stats;
    }
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


window.onload = init;
window.addEventListener("resize", onResize, false);