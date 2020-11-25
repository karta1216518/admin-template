<template>
  <div id="canvas-container"></div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OutlineEffect } from "three/examples/jsm/effects/OutlineEffect.js";
import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader.js";
import { MMDAnimationHelper } from "three/examples/jsm/animation/MMDAnimationHelper.js";

class IHtmlContainer extends Element {
  offsetWidth = 0;
  offsetHeight = 0;
}

const Ammo = require("three/examples/js/libs/ammo.js");

// const modelFile = 'mmd/redMiku/redMiku.pmx'
const modelFile = "mmd/pink/pink.pmx";

const vmdFiles = "mmd/wavefile_v2.vmd";
// const cameraFiles = 'mmd/wavefile_camera.vmd'
// const audioFile = 'mmd/wavefile_short.mp3'
// const audioParams = { delayTime: (160 * 1) / 30 }

const WIDTH = 800;
const HEIGHT = 600;

@Component({ components: {} })
export default class Canvas extends Vue {
  container?: HTMLElement | null;
  camera?: THREE.PerspectiveCamera;
  scene?: THREE.Scene;
  listener?: THREE.AudioListener;
  renderer?: THREE.WebGLRenderer;
  loader?: MMDLoader;
  mesh?: THREE.SkinnedMesh<
    THREE.Geometry | THREE.BufferGeometry,
    THREE.Material | THREE.Material[]
  >;
  effect?: OutlineEffect;
  helper?: MMDAnimationHelper;
  controls = null;

  clock = new THREE.Clock();
  ready = false;

  view = {
    width: 800,
    height: 600
  };

  async mounted() {
    this.getViewSize();

    await this.init();
    this.start();
  }

  async init() {
    // *container
    this.container = document.getElementById("canvas-container");

    // *scene
    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.scene.add(new THREE.PolarGridHelper(30, 10, 5, 30, "#aaa", "#aaa"));

    // *camera
    this.camera = new THREE.PerspectiveCamera(39, 800 / 600, 1, 800);
    this.camera.position.z = 60;
    this.camera.position.y = 30;
    this.camera.position.x = 0;

    this.listener = new THREE.AudioListener();
    this.camera.add(this.listener);
    this.scene.add(this.camera);

    // *renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(WIDTH, HEIGHT);
    this.container?.appendChild(this.renderer.domElement);

    // *effect
    this.effect = new OutlineEffect(this.renderer, {});

    const ambient = new THREE.AmbientLight("pink", 0.1);
    this.scene.add(ambient);

    const directionalLight = new THREE.DirectionalLight("pink");
    directionalLight.position.set(-1, 1, 1).normalize();
    this.scene.add(directionalLight);

    // *mesh
    this.loader = new MMDLoader();
    this.helper = new MMDAnimationHelper();

    await this.loader.loadWithAnimation(modelFile, vmdFiles, mmd => {
      this.mesh = mmd.mesh;
      this.scene?.add(this.mesh);
      this.helper?.add(this.mesh, {
        animation: mmd.animation,
        physics: true
      });
    });

    // new THREE.AudioLoader().load(
    //   audioFile,
    //   (buffer) => {
    //     const audio = new THREE.Audio(this.listener).setBuffer(buffer)
    //     this.helper.add(audio, audioParams)
    //     this.scene.add(this.mesh)
    //   },
    //   null,
    //   null
    // )
    //   }
    // )

    this.ready = true;

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 80;

    window.addEventListener("resize", this.onWindowResize, false);
  }

  animate() {
    const vm = this;
    requestAnimationFrame(vm.animate);
    vm.randerCanvas();
  }

  randerCanvas() {
    if (this.ready && this.scene) {
      this.helper?.update(this.clock.getDelta());
    }
    const { width, height } = this.view;

    this.effect?.setSize(width, height);

    this.effect?.render(
      <THREE.Scene>this.scene,
      <THREE.PerspectiveCamera>this.camera
    );
  }

  start() {
    Ammo().then(() => {
      this.animate();
    });
  }

  onWindowResize() {
    if (this.camera instanceof THREE.PerspectiveCamera) {
      const { width, height } = this.view;

      this.camera.aspect = 1;
      this.camera?.updateProjectionMatrix();

      this.effect?.setSize(width, height);
    }
  }

  getViewSize() {
    const wrap: IHtmlContainer | null = document.querySelector(
      "#canvas-container"
    );

    if (wrap) {
      this.view.width = wrap.offsetWidth;
      this.view.height = wrap.offsetHeight;
    }
  }
}
</script>

<style lang="sass">

#canvas-container
  height: calc(100vh - 120px)
  canvas
    &:focus
      outline: none !important
</style>
