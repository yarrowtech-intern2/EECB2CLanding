import React, { useEffect, useState, useRef, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  FaArrowRight,
  FaBrain,
  FaGamepad,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";

/* ============================
   PARTICLE FIELD
============================ */

const ParticleField = () => {
  const points = useRef();

  const particles = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      const t = clock.getElapsedTime();
      points.current.rotation.y = t * 0.02;
      points.current.rotation.x = t * 0.01;
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
   CAMERA PARALLAX
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
   AI NEURAL NETWORK
============================ */

const NeuralNetwork = () => {
  const group = useRef();

  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 40; i++) {
      arr.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 12,
      ]);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = t * 0.1;
      group.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" />
        </mesh>
      ))}

      {/* Connections */}
      {nodes.map((a, i) =>
        nodes.map((b, j) => {
          const dist = Math.sqrt(
            (a[0] - b[0]) ** 2 +
              (a[1] - b[1]) ** 2 +
              (a[2] - b[2]) ** 2
          );

          if (dist < 3 && i < j) {
            const mid = [
              (a[0] + b[0]) / 2,
              (a[1] + b[1]) / 2,
              (a[2] + b[2]) / 2,
            ];

            return (
              <mesh key={`${i}-${j}`} position={mid}>
                <cylinderGeometry args={[0.01, 0.01, dist, 8]} />
                <meshStandardMaterial color="#fde68a" />
              </mesh>
            );
          }

          return null;
        })
      )}
    </group>
  );
};

/* ============================
   HERO
============================ */

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      {/* 3D BACKGROUND */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
          <color attach="background" args={["#fffaf0"]} />

          <ambientLight intensity={0.6} />

          <directionalLight
            position={[5, 8, 6]}
            intensity={1}
            color="#fbbf24"
          />

          <CameraController mouse={mousePosition} />

          <ParticleField />

          <NeuralNetwork />
        </Canvas>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-6">

        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-sm font-bold mb-8"
        >
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          NEXT GENERATION LEARNING
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 leading-tight"
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
          className="text-gray-700 text-xl md:text-2xl mb-10 max-w-3xl"
        >
          Gamified learning, adaptive study paths, and instant concept
          support designed to help students master subjects faster.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex gap-5 justify-center"
        >

          <button
            onClick={() => scrollToSection("contact")}
            className="px-9 py-4 text-lg bg-yellow-500 text-white rounded-xl font-bold hover:bg-yellow-600 transition flex items-center gap-2"
          >
            Start Free
            <FaArrowRight />
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="px-9 py-4 text-lg border border-yellow-500 rounded-xl font-bold hover:bg-yellow-50 transition"
          >
            Explore
          </button>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-600 text-sm">

          <div className="flex items-center gap-2">
            <FaBrain className="text-yellow-500" />
            AI Tutor
          </div>

          <div className="flex items-center gap-2">
            <FaGamepad className="text-yellow-500" />
            Gamified Learning
          </div>

          <div className="flex items-center gap-2">
            <FaRocket className="text-yellow-500" />
            Fast Progress
          </div>

          <div className="flex items-center gap-2">
            <FaTrophy className="text-yellow-500" />
            Achievements
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;