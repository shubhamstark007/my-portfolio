import { Leva } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import HackerRoom from '../components/HackerRoom.jsx';

const Hero = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1000); // 1s delay
        return () => clearTimeout(timer);
    }, []);

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <AnimatePresence>
            {visible && (
                <motion.section
                    className="min-h-screen w-full flex flex-col relative"
                    id="home"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                            Hi, I am Shubham <span className="waving-hand">👋</span>
                        </p>
                        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
                    </div>

                    <div className="w-full h-full absolute inset-0">
                        <Canvas className="w-full h-full">
                            <Leva hidden />
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                            <HeroCamera isMobile={isMobile}>
                                <Suspense fallback={<CanvasLoader />}>
                                    <HackerRoom
                                        scale={sizes.deskScale}
                                        position={sizes.deskPosition}
                                        rotation={[0.1, -Math.PI, 0]}
                                    />
                                </Suspense>
                            </HeroCamera>
                            

                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Rings position={sizes.ringPosition} />
                                <Cube position={sizes.cubePosition} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Canvas>
                    </div>

                    <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                        <a href="#about" className="w-fit">
                            <Button
                                name="Let's work together"
                                isBeam
                                containerClass="sm:w-fit w-full sm:min-w-96"
                            />
                        </a>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Hero;
