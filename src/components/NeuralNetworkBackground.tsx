import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const NeuralNetworkBackground = () => {
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
            mode: ["grab", "attract"],
            parallax: {
              enable: true,
              force: 20,
              smooth: 20,
            },
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.4,
              color: "#66FCF1",
            },
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 0.2,
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
          distance: 200,
          enable: true,
          opacity: 0.3,
          width: 1,
          warp: true,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "out" as const,
          },
          random: true,
          speed: 0.6,
          straight: false,
          warp: true,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 60,
        },
        opacity: {
          value: 0.6,
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.15,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.5, max: 3 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 1,
            sync: false,
          },
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
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.03,
            opacity: 0.8,
            color: {
              value: "#66FCF1",
            },
          },
          lines: {
            enable: true,
            frequency: 0.01,
            opacity: 0.5,
            color: {
              value: "#66FCF1",
            },
          },
        },
      },
      detectRetina: true,
      smooth: true,
    }),
    []
  );

  return (
    <Particles
      id="neural-network"
      init={particlesInit}
      options={options}
      className="fixed inset-0 z-0 pointer-events-auto"
    />
  );
};
