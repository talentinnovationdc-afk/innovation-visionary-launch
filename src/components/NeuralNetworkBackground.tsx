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
        detectsOn: "window" as const,
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "connect"],
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.35,
              color: "#66FCF1",
            },
          },
          connect: {
            distance: 130,
            links: {
              opacity: 0.18,
            },
            radius: 140,
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
            area: 1000,
          },
          value: isMobile ? 18 : 35,
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
      emitters: {
        position: {
          x: 50,
          y: 45,
        },
        rate: {
          delay: 0.8,
          quantity: 1,
        },
        size: {
          width: 25,
          height: 25,
        },
        life: {
          count: 0,
          duration: 0,
          delay: 0,
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
