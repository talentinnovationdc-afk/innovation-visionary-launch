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
            mode: ["attract", "slow"],
          },
          resize: true,
        },
        modes: {
          attract: {
            distance: 200,
            duration: 0.8,
            easing: "ease-out-cubic",
            factor: 3,
            maxSpeed: 1,
            speed: 0.5,
          },
          slow: {
            factor: 2,
            radius: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#66FCF1",
        },
        links: {
          color: "#66FCF1",
          distance: 120,
          enable: true,
          opacity: 0.2,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none" as const,
          outModes: {
            default: "out" as const,
          },
          path: {
            enable: true,
            delay: {
              value: 0,
            },
            options: {
              radius: 150,
              speed: 0.003,
            },
          },
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
          trail: {
            enable: false,
          },
        },
        number: {
          density: {
            enable: false,
          },
          value: isMobile ? 25 : 45,
          limit: isMobile ? 30 : 50,
        },
        opacity: {
          value: { min: 0.4, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
        shadow: {
          blur: 8,
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
