import  { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import styles from './Panorama360.module.scss';

interface Panorama360Props {
  imageUrl: string;
}

const Panorama360 = (props: Panorama360Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    const texture = new THREE.TextureLoader().load(props.imageUrl);
    texture.mapping = THREE.EquirectangularReflectionMapping;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.set(0, 0, 0.1);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.rotateSpeed = 0.5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.0005;
      renderer.render(scene, camera);
      controls.update();
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [props.imageUrl]);

  return <div className={styles.container} ref={containerRef} />;
};

export default Panorama360;
