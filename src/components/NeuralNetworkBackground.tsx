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
            mode: "grab",
            parallax: {
              enable: true,
              force: 40,
              smooth: 10,
            },
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.6,
              color: "#66FCF1",
            },
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
          opacity: 0.25,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: true,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1200,
          },
          value: 80,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.5, max: 2.5 },
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
    []
  );

  return (
    <Particles
      id="neural-network"
      init={particlesInit}
      options={options}
      className="fixed inset-0 z-0"
    />
  );
};
