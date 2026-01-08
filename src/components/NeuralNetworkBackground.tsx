import { useCallback, useMemo, memo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const OrbitalBackgroundComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Watch for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ["class"] 
    });
    
    return () => observer.disconnect();
  }, []);

  // Delay particle loading for better FCP
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Different colors for dark/light mode
  const particleColor = isDarkMode ? "#66FCF1" : "#0d9488";
  const particleOpacity = isDarkMode 
    ? (isMobile ? { min: 0.2, max: 0.5 } : { min: 0.3, max: 0.7 })
    : (isMobile ? { min: 0.15, max: 0.35 } : { min: 0.2, max: 0.45 });
  const linkOpacity = isDarkMode 
    ? (isMobile ? 0.15 : 0.2)
    : (isMobile ? 0.08 : 0.12);

  const options = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      // Lower FPS on mobile for better performance
      fpsLimit: isMobile ? 30 : 60,
      interactivity: {
        detectsOn: "window" as const,
        events: {
          onHover: {
            // Disable hover effects on mobile
            enable: !isMobile,
            mode: ["grab", "connect"],
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: isDarkMode ? 0.35 : 0.2,
              color: particleColor,
            },
          },
          connect: {
            distance: 130,
            links: {
              opacity: isDarkMode ? 0.18 : 0.1,
            },
            radius: 140,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: isMobile ? 120 : 150,
          enable: true,
          opacity: linkOpacity,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          enable: true,
          // Slower on mobile
          speed: isMobile ? 0.15 : 0.3,
          direction: "none" as const,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          straight: false,
          attract: {
            enable: !isMobile,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          spin: {
            enable: !isMobile,
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
          // Much fewer particles on mobile
          value: isMobile ? 12 : 35,
        },
        opacity: {
          value: particleOpacity,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      emitters: isMobile ? undefined : {
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
      detectRetina: !isMobile,
    }),
    [isMobile, isDarkMode, particleColor, particleOpacity, linkOpacity]
  );

  // Don't render particles until after initial paint
  if (!isVisible) {
    return null;
  }

  return (
    <Particles
      id="orbital-particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export const NeuralNetworkBackground = memo(OrbitalBackgroundComponent);
