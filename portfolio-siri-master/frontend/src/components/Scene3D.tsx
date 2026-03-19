import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 2000;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return [pos, vel];
  }, []);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5;
    }
    return s;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const geometry = meshRef.current.geometry;
    const posAttr = geometry.getAttribute("position");
    const posArray = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      posArray[i * 3] +=
        velocities[i * 3] + Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.001;
      posArray[i * 3 + 1] +=
        velocities[i * 3 + 1] +
        Math.cos(state.clock.elapsedTime * 0.2 + i) * 0.001;
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      // Boundaries
      if (Math.abs(posArray[i * 3]) > 10) velocities[i * 3] *= -1;
      if (Math.abs(posArray[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
      if (Math.abs(posArray[i * 3 + 2]) > 10) velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#06b6d4"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
      torusRef.current.position.y = Math.sin(t * 0.5) * 0.5;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = t * 0.2;
      icosaRef.current.rotation.z = t * 0.3;
      icosaRef.current.position.y = Math.cos(t * 0.4) * 0.3 + 1;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.4;
      octaRef.current.rotation.z = t * 0.2;
      octaRef.current.position.y = Math.sin(t * 0.6) * 0.4 - 1;
    }
  });

  return (
    <>
      <mesh ref={torusRef} position={[-3, 0, -2]}>
        <torusGeometry args={[1, 0.3, 16, 50]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={icosaRef} position={[3, 1, -3]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      <mesh ref={octaRef} position={[2, -1, -1]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}

function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const nodeCount = 30;

  const positions = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;
    }
    return pos;
  }, []);

  const linePositions = useMemo(() => {
    const lines: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 4) {
          lines.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2],
          );
        }
      }
    }
    return new Float32Array(lines);
  }, [positions]);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      lineRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linePositions.length / 3}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#06b6d4" transparent opacity={0.15} />
    </lineSegments>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#06b6d4" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#8b5cf6" />
        <FloatingParticles />
        <FloatingGeometry />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
