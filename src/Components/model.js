import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { MtlObjBridge } from 'three/examples/jsm/loaders/obj2/bridge/MtlObjBridge'
import * as firebase from "firebase";




const addMarker = (positionX, positionY, positionZ, rotationX, rotationY, rotationZ) => {

    firebase.firestore().collection("Markers").add({
        positionX: positionX,
        positionY: positionY,
        positionZ: positionZ,
        rotationX: rotationX,
        rotationY: rotationY,
        rotationZ: rotationZ
    }).then(() => {
        console.log("MarkerAdded: ", { positionX, positionY, positionZ, rotationX, rotationY, rotationZ });
    }).catch(e => {
        console.log("error: ", e)
    })

}


const width = window.innerWidth;
const height = window.innerHeight;

//Scene
const scene = new THREE.Scene();

//Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setClearColor("#263238");
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement)

//Camera
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 20, 20)
camera.lookAt(scene.position)


//controls
const controls = new OrbitControls(camera, renderer.domElement);

var arrowHelper = new THREE.ArrowHelper(new THREE.Vector3(), new THREE.Vector3(), 1, 0xffff00);
scene.add(arrowHelper);
const material = new THREE.MeshNormalMaterial();
const ringGeometry = new THREE.RingGeometry(0.1, 0.2, 32);
const raycaster = new THREE.Raycaster();
const sceneMeshes = new Array();

//Lights
const light = new THREE.AmbientLight();
light.intensity = 1 // soft white light
scene.add(light);




//Axes Helper
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);

//Loader

const mtlLoader = new MTLLoader()
mtlLoader.load("/models/Room/interior.mtl", (materials) => {
    materials.preload()

    const loader = new OBJLoader()

    loader.setMaterials(materials)
    loader.load("/models/Room/interior.obj", (model) => {
        model.traverse((child) => {
            if (child.isMesh) {
                let m = child;
                m.receiveShadow = true;
                m.castShadow = true;
                m.material.flatShading = true;
                sceneMeshes.push(m);
            }
            if (child.isLight) {
                let l = child;
                l.castShadow = true;
                l.shadow.bias = -0.003;
                l.shadow.mapSize.width = 2048;
                l.shadow.mapSize.height = 2048;
            }
        });
        model.scale.set(0.05, 0.05, 0.05)

        model.castShadow = true
        scene.add(model);
    })
})



//Get markers
const getMarkers = async () => {
    //var List = []
    await firebase.firestore().collection("Markers").get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const marker = doc.data()

            const ring = new THREE.Mesh(ringGeometry, material);
            ring.position.set(marker.positionX, marker.positionY, marker.positionZ)
            ring.rotation.set(marker.rotationX, marker.rotationY, marker.rotationZ);

            scene.add(ring)
        })
    })
}

const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}
window.addEventListener('resize', onWindowResize, false);
let intersects = new Array();

const onMouseMove = (event) => {
    const mouse = {
        x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
    }
    raycaster.setFromCamera(mouse, camera);
    intersects = raycaster.intersectObjects(sceneMeshes, false);
    if (intersects.length > 0) {
        let n = new THREE.Vector3();
        n.copy(intersects[0].face.normal);
        n.transformDirection(intersects[0].object.matrixWorld);
        arrowHelper.setDirection(n);
        arrowHelper.position.copy(intersects[0].point);
    }
}

const onDoubleClick = (event) => {
    const mouse = {
        x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
    };
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(sceneMeshes, false);
    if (intersects.length > 0) {
        let n = new THREE.Vector3();
        n.copy(intersects[0].face.normal);
        n.transformDirection(intersects[0].object.matrixWorld);
        const ring = new THREE.Mesh(ringGeometry, material);
        ring.lookAt(n);
        ring.position.copy(intersects[0].point);
        ring.position.addScaledVector(n, .1);

        if (scene.add(ring)) {
            console.log(ring)
            addMarker(
                ring.position.x,
                ring.position.y,
                ring.position.z,
                ring.rotation.x,
                ring.rotation.y,
                ring.rotation.z

            )
        }
        sceneMeshes.push(ring);
    }
}
renderer.domElement.addEventListener('dblclick', onDoubleClick, false)
renderer.domElement.addEventListener('mousemove', onMouseMove, false);

var animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    render();
};
const render = () => {
    renderer.render(scene, camera);
}
animate();

const Model = () => {


    useEffect(() => {
        getMarkers()
    }, [])

    return (
        <React.Fragment></React.Fragment>
    )

}


export default Model;