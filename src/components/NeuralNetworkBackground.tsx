import { useCallback, useMemo, memo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const OrbitalBackgroundComponent = () => {
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
      fpsLimit: 60,
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
            duration: 0.8,
            easing: "ease-out-cubic",
            factor: 2,
            maxSpeed: 0.5,
            speed: 0.2,
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
          opacity: 0.2,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none" as const,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          straight: false,
          attract: {
            enable: true,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          spin: {
            enable: true,
            position: {
              x: 50,
              y: 50,
            },
            acceleration: 0,
          },
        },
        number: {
          density: {
            enable: true,
            area: 1200,
          },
          value: isMobile ? 35 : 70,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  return (
    <Particles
      id="orbital-particles"
      init={particlesInit}
      options={options}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export const NeuralNetworkBackground = memo(OrbitalBackgroundComponent);
