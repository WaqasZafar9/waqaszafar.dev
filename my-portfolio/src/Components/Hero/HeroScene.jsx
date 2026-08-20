import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  BufferAttribute,
  Color,
  DoubleSide,
  LatheGeometry,
  MathUtils,
  Vector2,
} from "three";

// Radius within which cursor triggers proximity reaction
const NOTICE_RADIUS = 0.85;

/**
 * Builds the mascot body geometry matching the reference design:
 * Smooth rounded dome silhouette fading into a flared skirt hem.
 */
function useGhostGeometry() {
  const geometry = useMemo(() => {
    const profile = [];

    // Smooth semi-spherical head dome
    const DOME = 28;
    for (let i = 0; i <= DOME; i++) {
      const angle = (i / DOME) * (Math.PI / 2);
      profile.push(
        new Vector2(Math.sin(angle) * 0.94, 0.98 - (1 - Math.cos(angle)) * 0.72)
      );
    }

    // Body with subtle curve towards hem
    const BODY = 22;
    for (let i = 1; i <= BODY; i++) {
      const t = i / BODY;
      profile.push(
        new Vector2(0.94 + Math.sin(t * Math.PI) * 0.05, 0.26 - t * 1.22)
      );
    }

    const geo = new LatheGeometry(profile, 108);

    const position = geo.attributes.position;
    const top = new Color("#ffffff");
    const middle = new Color("#c0cafa");
    const bottom = new Color("#7488d6");
    const shade = new Color();
    const colors = new Float32Array(position.count * 3);

    const HEM_START = -0.32;
    const HEM_DEPTH = 0.64;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z = position.getZ(i);

      // Soft hem wave
      if (y < HEM_START) {
        const depth = MathUtils.clamp((HEM_START - y) / HEM_DEPTH, 0, 1);
        const theta = Math.atan2(z, x);
        const ease = depth * depth;
        position.setY(i, y + Math.sin(theta * 5) * 0.12 * ease);
      }

      // Smooth vertical 3-stop gradient
      const t = MathUtils.clamp((y + 0.96) / 1.94, 0, 1);
      if (t > 0.5) {
        shade.copy(middle).lerp(top, (t - 0.5) * 2);
      } else {
        shade.copy(bottom).lerp(middle, t * 2);
      }

      colors[i * 3] = shade.r;
      colors[i * 3 + 1] = shade.g;
      colors[i * 3 + 2] = shade.b;
    }

    geo.setAttribute("color", new BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    return geo;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return geometry;
}

function Ghost({ pointer, compact, scrollProgress, onHoverChange, onPoke, onFloatUpdate }) {
  const group = useRef(null);
  const body = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const geometry = useGhostGeometry();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    const step = Math.min(delta, 0.1);
    const time = state.clock.elapsedTime;
    const root = group.current;
    if (!root) return;

    const { x, y } = pointer.current;
    const distance = Math.hypot(x, y);
    const attention = MathUtils.clamp(1 - distance / NOTICE_RADIUS, 0, 1);

    // 1. Idle Floating (smooth vertical bobbing)
    const floatY = Math.sin(time * 0.72) * 0.14;
    const swayX = Math.sin(time * 0.38) * 0.08;

    // 2. Continuous 3-axis micro rotation
    const idleRotX = Math.sin(time * 0.48) * 0.04;
    const idleRotY = Math.sin(time * 0.34) * 0.08;
    const idleRotZ = Math.cos(time * 0.42) * 0.04;

    // 3. Subtle breathing scale
    const breath = 1 + Math.sin(time * 1.4) * 0.015;

    // 4. Scroll interaction
    const scrollOffsetY = scrollProgress * 1.5;
    const scrollScaleMult = Math.max(0.55, 1 - scrollProgress * 0.45);

    // Damped position tracking
    root.position.x = MathUtils.damp(
      root.position.x,
      swayX + x * 0.36 * attention,
      2.4,
      step
    );
    root.position.y = MathUtils.damp(
      root.position.y,
      floatY - y * 0.22 * attention + scrollOffsetY,
      2.4,
      step
    );

    // Damped rotation tracking (leaning toward mouse)
    root.rotation.y = MathUtils.damp(
      root.rotation.y,
      idleRotY + x * 0.52 * attention,
      2.6,
      step
    );
    root.rotation.x = MathUtils.damp(
      root.rotation.x,
      idleRotX + y * 0.3 * attention,
      2.6,
      step
    );
    root.rotation.z = MathUtils.damp(
      root.rotation.z,
      idleRotZ - x * 0.12 * attention,
      2.4,
      step
    );

    // Damped eye tracking (eyes shift on face to look directly at cursor)
    const targetEyeX = x * 0.12 * attention;
    const targetEyeY = -y * 0.08 * attention;

    if (leftEyeRef.current) {
      leftEyeRef.current.position.x = MathUtils.damp(
        leftEyeRef.current.position.x,
        -0.26 + targetEyeX,
        3.5,
        step
      );
      leftEyeRef.current.position.y = MathUtils.damp(
        leftEyeRef.current.position.y,
        0.3 + targetEyeY,
        3.5,
        step
      );
    }

    if (rightEyeRef.current) {
      rightEyeRef.current.position.x = MathUtils.damp(
        rightEyeRef.current.position.x,
        0.26 + targetEyeX,
        3.5,
        step
      );
      rightEyeRef.current.position.y = MathUtils.damp(
        rightEyeRef.current.position.y,
        0.3 + targetEyeY,
        3.5,
        step
      );
    }

    // Scale calculation
    const targetScale = (compact ? 0.78 : 1.0) * (hovered ? 1.06 : 1) * breath * scrollScaleMult;
    const scale = MathUtils.damp(root.scale.x, targetScale, 4, step);
    root.scale.setScalar(scale);

    // Pass float Y up to update ground shadow
    if (onFloatUpdate) {
      onFloatUpdate(floatY);
    }
  });

  const setHover = (next) => {
    setHovered(next);
    onHoverChange(next);
    document.body.style.cursor = next ? "pointer" : "";
  };

  useEffect(() => () => {
    document.body.style.cursor = "";
  }, []);

  return (
    <group ref={group}>
      <mesh
        ref={body}
        geometry={geometry}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHover(true);
        }}
        onPointerOut={() => setHover(false)}
        onClick={(event) => {
          event.stopPropagation();
          onPoke();
        }}
      >
        <meshStandardMaterial
          vertexColors
          roughness={0.35}
          metalness={0.04}
          emissive="#3b4699"
          emissiveIntensity={0.2}
          side={DoubleSide}
        />
      </mesh>

      {/* Left Eye (Capsule shape tracking mouse) */}
      <mesh
        ref={leftEyeRef}
        position={[-0.26, 0.3, 0.82]}
        scale={[0.42, 0.88, 0.38]}
      >
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshBasicMaterial color="#08090f" />
      </mesh>

      {/* Right Eye (Capsule shape tracking mouse) */}
      <mesh
        ref={rightEyeRef}
        position={[0.26, 0.3, 0.82]}
        scale={[0.42, 0.88, 0.38]}
      >
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshBasicMaterial color="#08090f" />
      </mesh>
    </group>
  );
}

function HeroScene({
  compact = false,
  active = true,
  scrollProgress = 0,
  onHoverChange = () => {},
  onPoke = () => {},
  onFloatUpdate = () => {},
}) {
  const pointer = useRef({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
      y: ((event.clientY - bounds.top) / bounds.height) * 2 - 1,
    };
  };

  const resetPointer = () => {
    pointer.current = { x: 0, y: 0 };
  };

  return (
    <div
      className="absolute inset-0"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={active ? "always" : "never"}
      >
        <ambientLight intensity={0.85} />
        {/* Soft key light */}
        <directionalLight position={[2.5, 4, 5]} intensity={2.2} color="#ffffff" />
        {/* Rim lights, retuned to the theme's primary green */}
        <pointLight position={[-4, -1, 2.5]} intensity={24} color="#34a85a" />
        <pointLight position={[4, -2.5, -2]} intensity={16} color="#7ed9a0" />

        <Ghost
          pointer={pointer}
          compact={compact}
          scrollProgress={scrollProgress}
          onHoverChange={onHoverChange}
          onPoke={onPoke}
          onFloatUpdate={onFloatUpdate}
        />
      </Canvas>
    </div>
  );
}

export default HeroScene;
