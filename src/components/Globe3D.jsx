import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe3D = ({ 
    size = 200,      // Tamaño del contenedor
    color = 0x808080, // Color gris del wireframe
    sphereSize = 7    // Radio de la esfera
}) => {
    const mountRef = useRef(null);

    useEffect(() => {
        // --- 1. Configuración de la Escena ---
        const scene = new THREE.Scene();
        // Fondo transparente para que se vea tu web detrás
        scene.background = null; 

        // --- 2. Cámara ---
        const camera = new THREE.PerspectiveCamera(75, size / size, 0.1, 1000);
        camera.position.z = 25; // Distancia de la cámara

        // --- 3. Renderizador ---
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(size, size);
        
        // Adjuntamos el canvas al div del componente
        const currentMount = mountRef.current;
        currentMount.appendChild(renderer.domElement);

        // --- 4. Objeto (Esfera Wireframe) ---
        // SphereGeometry(radio, segmentosAncho, segmentosAlto)
        const geometry = new THREE.SphereGeometry(sphereSize, 24, 24);
        const material = new THREE.MeshBasicMaterial({ 
            color: color, 
            wireframe: true,
            transparent: true,
            opacity: 0.6 // Grosisdad sutil
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // --- 5. Animación ---
        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // Rotación constante
            sphere.rotation.x += 0.002;
            sphere.rotation.y += 0.005;

            renderer.render(scene, camera);
        };
        animate();

        // --- 6. Limpieza (Cleanup) ---
        return () => {
            cancelAnimationFrame(animationId);
            currentMount.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
        };
    }, [size, color, sphereSize]); // Re-renderizar si cambian estas props

    return (
        <div 
            ref={mountRef} 
            style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
        />
    );
};

export default Globe3D;