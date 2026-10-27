import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Star } from 'lucide-react';

interface ThreeArcadeTokenProps {
  tierColor?: string;
  tierName?: string;
  points?: number;
}

function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export const ThreeArcadeToken: React.FC<ThreeArcadeTokenProps> = ({
  tierColor = '#F59E0B',
  tierName = 'Standard Tier',
  points = 38
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isSpinningFast, setIsSpinningFast] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const coinMeshRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const supported = checkWebGLSupport();
    if (!supported) {
      setWebGLSupported(false);
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;

    // Disposables tracker for safe teardown
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    try {
      const width = currentMount.clientWidth || 300;
      const height = currentMount.clientHeight || 300;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 4.2;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'default'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.shadowMap.enabled = true;
      currentMount.appendChild(renderer.domElement);

      // Handle context lost
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        cancelAnimationFrame(animationFrameId);
      };
      renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);

      // Group for the Coin
      const coinGroup = new THREE.Group();
      coinMeshRef.current = coinGroup;
      scene.add(coinGroup);

      // Coin Base Geometry
      const coinGeometry = new THREE.CylinderGeometry(1.4, 1.4, 0.22, 64);
      geometries.push(coinGeometry);

      const baseColor = new THREE.Color(tierColor);

      const coinMaterial = new THREE.MeshStandardMaterial({
        color: baseColor,
        metalness: 0.85,
        roughness: 0.25,
        bumpScale: 0.05
      });
      materials.push(coinMaterial);

      const rimMaterial = new THREE.MeshStandardMaterial({
        color: baseColor.clone().offsetHSL(0, 0.1, -0.05),
        metalness: 0.95,
        roughness: 0.2
      });
      materials.push(rimMaterial);

      const coinMesh = new THREE.Mesh(coinGeometry, coinMaterial);
      coinMesh.rotation.x = Math.PI / 2;
      coinGroup.add(coinMesh);

      // Outer Ring
      const torusGeometry = new THREE.TorusGeometry(1.42, 0.06, 16, 64);
      geometries.push(torusGeometry);
      const torusMesh = new THREE.Mesh(torusGeometry, rimMaterial);
      coinGroup.add(torusMesh);

      // Inner Ring
      const innerTorus = new THREE.TorusGeometry(1.15, 0.03, 16, 48);
      geometries.push(innerTorus);
      const innerRingMesh = new THREE.Mesh(innerTorus, rimMaterial);
      coinGroup.add(innerRingMesh);

      // 3D Star shape in the center (Front & Back)
      const starShape = new THREE.Shape();
      const pointsCount = 5;
      const outerRadius = 0.55;
      const innerRadius = 0.25;

      for (let i = 0; i < pointsCount * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / pointsCount - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) starShape.moveTo(x, y);
        else starShape.lineTo(x, y);
      }
      starShape.closePath();

      const starExtrudeSettings = {
        depth: 0.08,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.02,
        bevelThickness: 0.02
      };

      const starGeometry = new THREE.ExtrudeGeometry(starShape, starExtrudeSettings);
      geometries.push(starGeometry);

      const starMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFFBEB,
        metalness: 0.7,
        roughness: 0.3
      });
      materials.push(starMaterial);

      const frontStar = new THREE.Mesh(starGeometry, starMaterial);
      frontStar.position.z = 0.11;
      coinGroup.add(frontStar);

      const backStar = new THREE.Mesh(starGeometry, starMaterial);
      backStar.position.z = -0.19;
      backStar.rotation.y = Math.PI;
      coinGroup.add(backStar);

      // Particles
      const particlesCount = 35;
      const particlePositions = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 5;
        particlePositions[i + 1] = (Math.random() - 0.5) * 4;
        particlePositions[i + 2] = (Math.random() - 0.5) * 3;
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      geometries.push(particleGeometry);

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.06,
        color: 0xFDE68A,
        transparent: true,
        opacity: 0.8
      });
      materials.push(particleMaterial);

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xFFFBEB, 1.2);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xFFFFFF, 2.5);
      dirLight1.position.set(4, 5, 5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xF59E0B, 1.5);
      dirLight2.position.set(-4, -3, -2);
      scene.add(dirLight2);

      const pointLight = new THREE.PointLight(baseColor, 3, 8);
      pointLight.position.set(0, 0, 3);
      scene.add(pointLight);

      // Mouse Lerp
      let targetRotationX = 0;
      let targetRotationY = 0;
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        if (!currentMount) return;
        const rect = currentMount.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationY = mouseX * 0.7;
        targetRotationX = mouseY * 0.4;
      };

      currentMount.addEventListener('mousemove', handleMouseMove);

      // Animation Loop
      const spinSpeed = 0.015;

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        coinGroup.rotation.y += spinSpeed + (targetRotationY * 0.02);
        coinGroup.rotation.x += (targetRotationX - coinGroup.rotation.x) * 0.05;
        coinGroup.rotation.z = Math.sin(Date.now() * 0.002) * 0.05;
        coinGroup.position.y = Math.sin(Date.now() * 0.003) * 0.12;

        particles.rotation.y += 0.002;

        renderer.render(scene, camera);
      };

      animate();

      // ResizeObserver
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = entry.contentRect.width;
          const h = entry.contentRect.height;
          if (w > 0 && h > 0 && camera && renderer) {
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
          }
        }
      });
      resizeObserver.observe(currentMount);

      return () => {
        resizeObserver.disconnect();
        currentMount.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);

        // Safe disposal
        geometries.forEach(g => g.dispose());
        materials.forEach(m => m.dispose());
        renderer.dispose();
        if (currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      console.warn('WebGL init error, falling back to 2.5D token:', err);
      setWebGLSupported(false);
    }
  }, [tierColor]);

  const handleFlipCoin = () => {
    if (isSpinningFast) return;
    setIsSpinningFast(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EA580C', '#10B981', '#FBBF24']
    });

    if (coinMeshRef.current) {
      const startRot = coinMeshRef.current.rotation.y;
      const targetRot = startRot + Math.PI * 4;
      const startTime = performance.now();
      const duration = 1000;

      const spinInterval = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        if (coinMeshRef.current) {
          coinMeshRef.current.rotation.y = startRot + (targetRot - startRot) * ease;
        }
        if (progress < 1) {
          requestAnimationFrame(spinInterval);
        } else {
          setIsSpinningFast(false);
        }
      };

      requestAnimationFrame(spinInterval);
    } else {
      setTimeout(() => setIsSpinningFast(false), 800);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE] rounded-3xl border border-[#EADBCE] shadow-soft">
      {/* 3D Canvas Mount or 2.5D Fallback */}
      {webGLSupported ? (
        <div
          ref={mountRef}
          onClick={handleFlipCoin}
          className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 max-w-full cursor-pointer transition-transform active:scale-95 relative group flex items-center justify-center"
          title="Click to spin the 3D Arcade Medallion!"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-stone-900/80 text-stone-50 text-xs px-3 py-1 rounded-full font-mono shadow-md backdrop-blur-sm -translate-y-24">
              Click to Flip
            </span>
          </div>
        </div>
      ) : (
        /* Graceful 2.5D Medallion Fallback */
        <div
          onClick={handleFlipCoin}
          className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center cursor-pointer relative group"
          title="Click to flip medallion"
        >
          <div
            className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[#B45309] shadow-arcade-amber flex items-center justify-center transition-all ${
              isSpinningFast ? 'animate-spin scale-105' : 'hover:scale-105'
            }`}
            style={{
              background: `radial-gradient(circle at 35% 35%, #FFFDF9, ${tierColor})`
            }}
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-[#FFFBEB] flex flex-col items-center justify-center shadow-inner">
              <Star className="w-10 h-10 sm:w-12 sm:h-12 text-[#FFFBEB] fill-[#FFFBEB] drop-shadow-md animate-pulse" />
              <span className="font-pixel text-[9px] sm:text-[10px] text-[#78350F] font-bold mt-1">
                ARCADE
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Info Badge below 3D Model */}
      <div className="flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-white border border-[#EADBCE] shadow-sm">
        <Sparkles className="w-4 h-4 text-arcade-amber animate-spin" style={{ animationDuration: '6s' }} />
        <span className="text-xs font-semibold text-stone-700 tracking-wide font-sans">
          {tierName} Medallion
        </span>
        <span className="text-xs font-mono font-bold text-arcade-amber px-2 py-0.5 rounded-full bg-[#FEF3C7]">
          {points} pts
        </span>
        <button
          onClick={handleFlipCoin}
          disabled={isSpinningFast}
          className="p-1 hover:bg-[#F4ECE1] rounded-full transition text-stone-500 hover:text-stone-800"
          title="Flip Coin"
        >
          <RotateCcw className={`w-3.5 h-3.5 ${isSpinningFast ? 'animate-spin' : ''}`} />
        </button>
      </div>
    </div>
  );
};
