"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes"

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const {theme} = useTheme();
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const ParticlesConfig = useMemo(
    () => ({
      fullScreen: { enable: false },
      particles: {
        number: { value: 80, density: { enable: true } },
        color: { value: theme === "dark" ? "#ffffff" : "#121212" },
        links: {
          enable: true,
          distance: 150,
          color: theme === "dark" ? "#ffffff" : "#808080",
          opacity: 0.5,
          width: 1,
        },
        shape: { type: "circle" },
        move: { enable: true, speed: 1.234 },
      },
    }),
    [theme]
  );

  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 dark:bg-gradient-to-b dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
      {init && (
        <Particles
          id={"tsparticles-bg"}
          options={ParticlesConfig}
          className="absolute inset-0"
        />
      )}
    </div>
  );
};

export default ParticlesBackground;
