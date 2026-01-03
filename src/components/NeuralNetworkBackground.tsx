import { useCallback, useMemo, memo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const NeuralNetworkBackgroundComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract",
          },
          resize: true,
        },
        modes: {
          attract: {
            distance: 150,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 0.5,
            maxSpeed: 0.3,
            speed: 0.1,
          },
        },
      },
      particles: {
        color: {
          value: "#66FCF1",
        },
        links: {
          color: "#66FCF1",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 0.5,
          triangles: {
            enable: false,
          },
          consent: false,
          frequency: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "out" as const,
          },
          random: true,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: false,
          },
          value: isMobile ? 20 : 50,
          limit: isMobile ? 25 : 60,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 1.5,
        },
      },
      detectRetina: true,
      smooth: true,
    }),
    [isMobile]
  );

  return (
    <Particles
      id="neural-network"
      init={particlesInit}
      options={options}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export const NeuralNetworkBackground = memo(NeuralNetworkBackgroundComponent);
