<template>
    <div ref="container"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

export default {
    name: 'ThreeScene',
    setup() {
        const container = ref(null);
        let camera, scene, renderer, earthMesh, points;

        const init = () => {
            // Камера
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;

            // Сцена
            scene = new THREE.Scene();

            // Земной шар
            const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
            const earthTexture = new THREE.TextureLoader().load('#');
            const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
            earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
            scene.add(earthMesh);

            // Точки
            const pointsGeometry = new THREE.BufferGeometry();
            const numPoints = 2500; // Количество точек
            const positions = new Float32Array(numPoints * 3);
            for (let i = 0; i < numPoints; i++) {
                const phi = Math.random() * Math.PI * 2;
                const theta = Math.random() * Math.PI - Math.PI / 2;
                const radius = 10;
                positions[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
                positions[i * 3 + 1] = radius * Math.sin(theta);
                positions[i * 3 + 2] = radius * Math.sin(phi) * Math.cos(theta);
            }
            pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const pointsMaterial = new THREE.PointsMaterial({ color: 0x003d95, size: 0.1, fog: true });
            points = new THREE.Points(pointsGeometry, pointsMaterial);
            scene.add(points);

            // Рендерер
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.value.appendChild(renderer.domElement);

            // Обновление камеры при изменении размера окна
            window.addEventListener('resize', () => {
                const newWidth = window.innerWidth;
                const newHeight = window.innerHeight;
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(newWidth, newHeight);
            });
        };

        const animate = () => {
            requestAnimationFrame(animate);

            // Вращение Земли и точек
            earthMesh.rotation.y += 0.002;
            points.rotation.y += 0.002;

            renderer.render(scene, camera);
        };

        onMounted(() => {
            init();
            animate();
        });

        onBeforeUnmount(() => {
            container.value.removeChild(renderer.domElement);
        });

        return {
            container
        };
    }
};
</script>

<style lang="scss" scoped>

</style>