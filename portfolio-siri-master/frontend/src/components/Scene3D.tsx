import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 2000;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#06b6d4");
    const violet = new THREE.Color("#8b5cf6");
    const blue = new THREE.Color("#3b82f6");

    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const color = t < 0.33 ? cyan : t < 0.66 ? blue : violet;
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return col;
  }, []);

  useEffect(() => {
    if (!meshRef.current) return;
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 4 + Math.random() * 20; // Hollow center
      const x = Math.cos(theta) * radius;
      const y = Math.sin(theta) * radius;
      const z = (Math.random() - 0.5) * 200; // z spread
      
      dummy.position.set(x, y, z);
      
      // Random rotation and scale for 3D feel
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      const scale = 0.05 + Math.random() * 0.15;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [dummy]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {/* Using a 3D octahedron/diamond shape instead of flat squares */}
      <octahedronGeometry args={[1, 0]} />
      <instancedBufferAttribute attach="instanceColor" args={[colors, 3]} />
      <meshBasicMaterial 
        vertexColors 
        transparent 
        opacity={0.4} 
        wireframe={true}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  geometry: React.ReactNode;
}

function FloatingGeometry({ position, color, geometry }: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + position[0];
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + position[1];
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = scrollY / maxScroll;
    
    // Much deeper Z travel for a more "powerful" effect (from Z=30 to Z=-200)
    const targetZ = 30 - scrollProgress * 230;
    
    // Slightly faster interpolation
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1);
    
    // More intense wobble and barrel roll based on scroll
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, Math.sin(scrollY * 0.002) * 5, 0.1);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, Math.cos(scrollY * 0.0015) * 5, 0.1);
    
    // Add a slight tilt/roll to the camera to feel like banking in a spaceship
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, Math.sin(scrollY * 0.001) * 0.2, 0.1);
    
    camera.lookAt(0, 0, camera.position.z - 30);
  });

  return null;
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none bg-[#030014]">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 70 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false }}
      >
        <fog attach="fog" args={['#030014', 10, 60]} />
        <Particles />
        {/* Scatter geometries along the Z path */}
        <FloatingGeometry position={[5, 3, 10]} color="#8b5cf6" geometry={<icosahedronGeometry args={[2, 1]} />} />
        <FloatingGeometry position={[-6, -4, -5]} color="#06b6d4" geometry={<torusGeometry args={[3, 0.1, 16, 100]} />} />
        <FloatingGeometry position={[7, -3, -25]} color="#3b82f6" geometry={<octahedronGeometry args={[2.5]} />} />
        <FloatingGeometry position={[-5, 5, -45]} color="#ec4899" geometry={<icosahedronGeometry args={[2, 0]} />} />
        <FloatingGeometry position={[4, -5, -65]} color="#eab308" geometry={<torusGeometry args={[2.5, 0.2, 16, 100]} />} />
        <FloatingGeometry position={[-7, 3, -85]} color="#8b5cf6" geometry={<icosahedronGeometry args={[3, 1]} />} />
        <FloatingGeometry position={[6, 4, -105]} color="#06b6d4" geometry={<octahedronGeometry args={[2.5]} />} />
        
        <CameraRig />
      </Canvas>
    </div>
  );
}
