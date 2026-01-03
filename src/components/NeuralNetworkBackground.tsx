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
            distance: 120,
            duration: 0.6,
            easing: "ease-out-quad",
            factor: 1.5,
            maxSpeed: 0.8,
            speed: 0.3,
          },
        },
      },
      particles: {
        color: {
          value: "#66FCF1",
        },
        links: {
          color: "#66FCF1",
          distance: 80,
          enable: true,
          opacity: 0.1,
          width: 0.3,
          frequency: 0.8,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none" as const,
          outModes: {
            default: "bounce" as const,
          },
          attract: {
            enable: true,
            rotate: {
              x: 2000,
              y: 2000,
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
            area: 600,
          },
          value: isMobile ? 30 : 60,
          limit: isMobile ? 35 : 65,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.3,
            minimumValue: 0.2,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.8, max: 2 },
        },
        shadow: {
          blur: 6,
          color: {
            value: "#66FCF1",
          },
          enable: true,
          offset: {
            x: 0,
            y: 0,
          },
        },
      },
      detectRetina: true,
      smooth: true,
      emitters: {
        position: {
          x: 50,
          y: 50,
        },
        rate: {
          delay: 0.5,
          quantity: 1,
        },
        size: {
          width: 30,
          height: 30,
        },
        life: {
          count: 0,
          duration: 0,
          delay: 0,
        },
      },
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
