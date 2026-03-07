import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Billboard } from "@react-three/drei";
import { Menu, X, ChevronRight, Brain, Zap, Trophy } from "lucide-react";

/* =============================
   IMPORT IMAGES
============================= */

import aiImg from "../assets/AI.jpg";
import trophyImg from "../assets/Trophy.jpg";
import studentImg from "../assets/cap.jpg";

/* =============================
   PARTICLES
============================= */

const Particles = () => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0005;
  });

  const particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    );
  }

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(particles)}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.04} color="#fbbf24" />
    </points>
  );
};

/* =============================
   IMAGE SLIDESHOW SYSTEM
============================= */

const ImageSlider3D = () => {

  const groupRef = useRef();

  const aiRef = useRef();
  const trophyRef = useRef();
  const studentRef = useRef();

  const aiTexture = useTexture(aiImg);
  const trophyTexture = useTexture(trophyImg);
  const studentTexture = useTexture(studentImg);

  const planeSize = (texture, base = 1) => {
    if (!texture.image) return [base, base];
    const ratio = texture.image.width / texture.image.height;
    return [base * ratio, base];
  };

  useFrame(({ clock }) => {

    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.7) * 0.05;
    }

    const step = Math.floor(t % 6);

    if (aiRef.current) aiRef.current.visible = step < 2;
    if (trophyRef.current) trophyRef.current.visible = step >= 2 && step < 4;
    if (studentRef.current) studentRef.current.visible = step >= 4;

  });

  return (
    <group ref={groupRef}>

      {/* AI IMAGE */}
      <Billboard>
        <mesh ref={aiRef} position={[0,0,0]}>
          <planeGeometry args={planeSize(aiTexture,1.8)} />
          <meshBasicMaterial map={aiTexture} transparent />
        </mesh>
      </Billboard>

      {/* TROPHY IMAGE */}
      <Billboard>
        <mesh ref={trophyRef} position={[0,0,0]}>
          <planeGeometry args={planeSize(trophyTexture,1.8)} />
          <meshBasicMaterial map={trophyTexture} transparent />
        </mesh>
      </Billboard>

      {/* STUDENT IMAGE */}
      <Billboard>
        <mesh ref={studentRef} position={[0,0,0]}>
          <planeGeometry args={planeSize(studentTexture,1.8)} />
          <meshBasicMaterial map={studentTexture} transparent />
        </mesh>
      </Billboard>

    </group>
  );
};

/* =============================
   SCENE
============================= */

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <pointLight position={[0, 2, 2]} intensity={1.3} color="#ffb300" />

      <Particles />
      <ImageSlider3D />
    </Canvas>
  );
};

/* =============================
   HEADER
============================= */

const Header = () => {

  const [mobileOpen,setMobileOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  useEffect(()=>{

    const handleScroll = ()=>{
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll",handleScroll)

    return ()=>window.removeEventListener("scroll",handleScroll)

  },[])

  return(
    <header className={`fixed w-full z-50 transition ${
      scrolled
      ? "bg-amber-950/90 backdrop-blur border-b border-amber-700"
      : "bg-transparent"
    }`}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <Brain className="text-amber-300"/>
          <span className="text-white font-bold text-xl">EEC</span>
        </div>

        <button
        className="md:hidden text-white"
        onClick={()=>setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X/> : <Menu/>}
        </button>

      </div>

    </header>
  )
}

/* =============================
   HERO
============================= */

const Hero = () => {

  const scrollToContact = ()=>{
    const section = document.getElementById("contact")

    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }

  return(

    <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-amber-950 overflow-hidden pt-20">

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"/>
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"/>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-screen">

        {/* TEXT */}
        <div className="space-y-8">

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Personalized
            <br/>
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Learning With AI
            </span>
          </h1>

          <p className="text-amber-100 text-lg max-w-lg">
            AI-powered tutoring, gamified learning, and adaptive study paths
            helping students master subjects faster.
          </p>

          <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-300 to-orange-400 text-amber-900 font-bold rounded-xl hover:scale-105 transition"
          >
            Start Free Trial
            <ChevronRight/>
          </button>

          <div className="flex gap-4 pt-6">

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Brain size={16} className="text-amber-300"/>
              <span className="text-white text-sm">AI Tutor</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Zap size={16} className="text-amber-300"/>
              <span className="text-white text-sm">Fast Progress</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Trophy size={16} className="text-amber-300"/>
              <span className="text-white text-sm">Achievements</span>
            </div>

          </div>

        </div>

        {/* 3D HERO */}

        <div className="relative h-[600px]">
          <Scene/>
        </div>

      </div>

    </section>
  )
}

/* =============================
   MAIN
============================= */

export default function EECLanding(){

  return(
    <div className="bg-black min-h-screen">
      <Header/>
      <Hero/>
    </div>
  )
}