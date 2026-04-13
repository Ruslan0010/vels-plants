import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import styles from './Hero.module.css';

function FloatingCactus() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 2, 16]} />
        <meshStandardMaterial color="#3B6B3B" roughness={0.8} />
      </mesh>
      {/* Top dome */}
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#4A7A4A" roughness={0.8} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-0.7, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.2, 0.25, 1, 12]} />
        <meshStandardMaterial color="#3B6B3B" roughness={0.8} />
      </mesh>
      <mesh position={[-1.05, 1, 0]}>
        <sphereGeometry args={[0.2, 12, 12]} />
        <meshStandardMaterial color="#4A7A4A" roughness={0.8} />
      </mesh>
      {/* Right arm */}
      <mesh position={[0.6, 0.2, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <cylinderGeometry args={[0.18, 0.22, 0.8, 12]} />
        <meshStandardMaterial color="#3B6B3B" roughness={0.8} />
      </mesh>
      <mesh position={[0.85, 0.65, 0]}>
        <sphereGeometry args={[0.18, 12, 12]} />
        <meshStandardMaterial color="#4A7A4A" roughness={0.8} />
      </mesh>
      {/* Pot */}
      <mesh position={[0, -1.3, 0]}>
        <cylinderGeometry args={[0.55, 0.45, 0.7, 16]} />
        <meshStandardMaterial color="#8B6B4A" roughness={0.6} />
      </mesh>
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.12, 16]} />
        <meshStandardMaterial color="#9B7B5A" roughness={0.6} />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 80;
  const meshRef = useRef();

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
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
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#C8A96E"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#F5F0E8" />
      <directionalLight position={[-3, 3, -3]} intensity={0.3} color="#4A7A4A" />
      <FloatingCactus />
      <Particles />
    </>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="hero">
      {/* Decorative leaf silhouettes */}
      <div className={styles.leafDecor1} />
      <div className={styles.leafDecor2} />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#products" className="btn btn-primary">
              {t('hero.cta')}
            </a>
          </motion.div>
        </motion.div>

        <div className={styles.canvasWrapper}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Scene />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
