import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  FaArrowRight,
  FaChevronDown,
  FaBrain,
  FaGamepad,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";

/* ============================
   PARTICLE GALAXY BACKGROUND
============================ */

const ParticleField = () => {
  const points = useRef();

  const particles = new Float32Array(400 * 3);

  for (let i = 0; i < 400; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 40;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 40;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.02;
      points.current.rotation.x = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#fbbf24"
        size={0.12}
        transparent
        opacity={0.8}
      />
    </points>
  );
};

/* ============================
   CAMERA PARALLAX MOTION
============================ */

const CameraController = ({ mouse }) => {
  useFrame(({ camera }) => {
    camera.position.x += (mouse.x * 0.03 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.y * 0.03 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

/* ============================
   CINEMATIC SCENE DRIFT
============================ */

const SceneDrift = ({ children }) => {
  const group = useRef();

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.15) * 0.15;
      group.current.rotation.x =
        Math.cos(clock.getElapsedTime() * 0.1) * 0.08;
    }
  });

  return <group ref={group}>{children}</group>;
};

/* ============================
   FLOATING GEOMETRIC BLOCK
============================ */

const GeometricBlock = ({ position, scale, color, speed, type }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const t = clock.getElapsedTime();

    meshRef.current.rotation.x = t * speed;
    meshRef.current.rotation.y = t * speed * 0.8;

    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.7 + position[0]) * 1.2;
  });

  const getGeometry = () => {
    if (type === "cube") return <boxGeometry args={[1, 1, 1]} />;
    if (type === "pyramid") return <coneGeometry args={[0.9, 1.2, 4]} />;
    return <cylinderGeometry args={[0.6, 0.6, 1.2, 6]} />;
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.6}
      />
    </mesh>
  );
};

/* ============================
   GRID FLOOR
============================ */

const GridFloor = () => {
  return (
    <gridHelper
      args={[40, 40, "#fde68a", "#fef3c7"]}
      position={[0, -5, 0]}
    />
  );
};

/* ============================
   HERO SECTION
============================ */

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ========================= */}
      {/* 3D CANVAS BACKGROUND */}
      {/* ========================= */}

      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 18], fov: 75 }}>
          <color attach="background" args={["#fffaf0"]} />

          <CameraController mouse={mousePosition} />

          <ambientLight intensity={0.7} />

          <directionalLight
            position={[5, 8, 6]}
            intensity={1}
            color="#fbbf24"
          />

          <ParticleField />

          <SceneDrift>

            <GeometricBlock
              position={[-8, 4, -8]}
              scale={2.5}
              color="#fcd34d"
              speed={0.4}
              type="cube"
            />

            <GeometricBlock
              position={[8, -2, -10]}
              scale={2}
              color="#fbbf24"
              speed={0.3}
              type="pyramid"
            />

            <GeometricBlock
              position={[0, 5, -12]}
              scale={1.8}
              color="#f59e0b"
              speed={0.5}
              type="cylinder"
            />

            <GeometricBlock
              position={[-4, -3, -6]}
              scale={1.5}
              color="#fef3c7"
              speed={0.35}
              type="cube"
            />

          </SceneDrift>

          <GridFloor />

        </Canvas>
      </div>

      {/* ========================= */}
      {/* HERO CONTENT */}
      {/* ========================= */}

      <div className="relative z-10 text-center max-w-3xl px-6">

        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-xs font-bold mb-6"
        >
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          NEXT GENERATION LEARNING
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
        >
          Personalized Learning
          <br />

          <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            AI Guided Study
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-slate-700 mb-10 text-lg"
        >
          Gamified learning, adaptive study paths, and instant concept
          support designed to help students master subjects faster.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex gap-4 justify-center"
        >

          <button
            onClick={() => scrollToSection("contact")}
            className="px-7 py-3 bg-yellow-500 text-white rounded-lg font-bold hover:bg-yellow-600 transition flex items-center gap-2"
          >
            Start Free
            <FaArrowRight />
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="px-7 py-3 border border-yellow-500 rounded-lg font-bold hover:bg-yellow-50 transition"
          >
            Explore
          </button>

        </div>
      </div>


    </section>
  );
};

export default Hero;