import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#06b6d4");
    const violet = new THREE.Color("#8b5cf6");
    const blue = new THREE.Color("#3b82f6");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Mix between three colors
      const t = Math.random();
      const color = t < 0.33 ? cyan : t < 0.66 ? blue : violet;
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.008;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.005) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        vertexColors
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.04;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.4;
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -5]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.04;
    meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.6;
  });

  return (
    <mesh ref={meshRef} position={[-4, 1.5, -6]}>
      <torusGeometry args={[1.5, 0.02, 16, 100]} />
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.06} />
    </mesh>
  );
}

function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.3 + 0.8;
    meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[0, -2, -4]}>
      <torusGeometry args={[2, 0.008, 16, 128]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.05} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <Particles />
        <FloatingMesh />
        <FloatingTorus />
        <FloatingRing />
      </Canvas>
    </div>
  );
}
