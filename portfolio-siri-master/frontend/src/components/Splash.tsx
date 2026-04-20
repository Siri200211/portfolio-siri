import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 3D Morphing Sphere for loading
function LoadingSphere({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uColor1: { value: new THREE.Color("#06b6d4") },
      uColor2: { value: new THREE.Color("#8b5cf6") },
      uColor3: { value: new THREE.Color("#3b82f6") },
    }),
    [],
  );

  useFrame((state) => {
    if (!materialRef.current || !meshRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uProgress.value = progress / 100;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
  });

  const vertexShader = `
    uniform float uTime;
    uniform float uProgress;
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;

    //	Simplex 3D Noise
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
    float snoise(vec3 v){
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod(i, 289.0);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 1.0/7.0;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x2_ = x_ * ns.x + ns.yyyy;
      vec4 y2_ = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x2_) - abs(y2_);
      vec4 b0 = vec4(x2_.xy, y2_.xy);
      vec4 b1 = vec4(x2_.zw, y2_.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vUv = uv;
      vNormal = normal;
      float noise = snoise(position * 2.0 + uTime * 0.5) * 0.3 * uProgress;
      float noise2 = snoise(position * 4.0 - uTime * 0.3) * 0.15 * uProgress;
      vec3 newPos = position + normal * (noise + noise2);
      vDisplacement = noise + noise2;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform float uProgress;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;

    void main() {
      float mixFactor = vDisplacement * 3.0 + 0.5;
      vec3 color = mix(uColor1, uColor2, smoothstep(0.0, 0.5, mixFactor));
      color = mix(color, uColor3, smoothstep(0.5, 1.0, mixFactor));
      
      // Fresnel effect
      vec3 viewDir = normalize(cameraPosition - vNormal);
      float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);
      color += fresnel * 0.3;
      
      float alpha = 0.7 + fresnel * 0.3;
      gl_FragColor = vec4(color, alpha * uProgress);
    }
  `;

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        wireframe={false}
      />
    </mesh>
  );
}

// Orbiting particles
function OrbitParticles({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const count = 80;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2;
      const radius = 2.2 + Math.random() * 0.5;
      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      pos[i * 3 + 2] = Math.sin(theta) * radius;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#06b6d4"
          transparent
          opacity={progress / 100}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading");
  const containerRef = useRef<HTMLDivElement>(null);

  const stableOnComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    let current = 0;
    const intervals = [
      { target: 30, speed: 40, increment: 2 },
      { target: 60, speed: 55, increment: 1 },
      { target: 85, speed: 35, increment: 2 },
      { target: 95, speed: 70, increment: 1 },
      { target: 100, speed: 25, increment: 5 },
    ];

    let intervalIdx = 0;
    const timer = setInterval(() => {
      const config = intervals[intervalIdx];
      if (!config) {
        clearInterval(timer);
        return;
      }

      current = Math.min(current + config.increment, config.target);
      setProgress(current);

      if (current >= config.target) {
        intervalIdx++;
        if (current >= 100) {
          clearInterval(timer);
          setPhase("reveal");
          setTimeout(() => {
            setPhase("exit");
            setTimeout(stableOnComplete, 900);
          }, 700);
        }
      }
    }, intervals[intervalIdx]?.speed || 40);

    return () => clearInterval(timer);
  }, [stableOnComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "rgb(2, 2, 8)" }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* 3D Scene */}
          <div className="absolute inset-0">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.2} />
              <pointLight
                position={[5, 5, 5]}
                intensity={0.5}
                color="#06b6d4"
              />
              <pointLight
                position={[-5, -5, 3]}
                intensity={0.3}
                color="#8b5cf6"
              />
              <LoadingSphere progress={progress} />
              <OrbitParticles progress={progress} />
            </Canvas>
          </div>

          {/* Radial glow behind sphere */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[400px] h-[400px] rounded-full blur-[120px] transition-opacity duration-1000"
              style={{
                background: `radial-gradient(circle, rgba(6,182,212,${progress * 0.002}) 0%, rgba(139,92,246,${progress * 0.001}) 50%, transparent 70%)`,
              }}
            />
          </div>

          {/* UI Overlay */}
          <div className="relative z-10 flex flex-col items-center pointer-events-none">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: -80 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl font-black tracking-tighter"
            >
              <span className="text-gradient">VS</span>
            </motion.div>

            {/* Progress display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[calc(50%+100px)] flex flex-col items-center gap-4"
            >
              {/* Percentage */}
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black font-mono text-white/80 tabular-nums">
                  {progress}
                </span>
                <span className="text-lg font-mono text-white/30">%</span>
              </div>

              {/* Progress bar */}
              <div className="w-64 h-[1px] bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                    boxShadow: "0 0 20px rgba(6,182,212,0.5)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Status text */}
              <p className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
                {progress < 30
                  ? "Loading Assets"
                  : progress < 60
                    ? "Building Scene"
                    : progress < 90
                      ? "Preparing Experience"
                      : "Almost Ready"}
              </p>
            </motion.div>
          </div>

          {/* Scan lines effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            }}
          />

          {/* Corner frames */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l-[1px] border-t-[1px] border-cyan-500/20" />
          <div className="absolute top-8 right-8 w-12 h-12 border-r-[1px] border-t-[1px] border-cyan-500/20" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-l-[1px] border-b-[1px] border-violet-500/20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r-[1px] border-b-[1px] border-violet-500/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
