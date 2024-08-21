import { AppBar } from "@/components/app-bar";
import ParticlesBackground from "@/components/particles";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <ParticlesBackground/>
    <AppBar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="about-section">
        <h1 className="text-4xl font-bold text-center">Welcome to my website</h1>
      </section>
      <section>

      </section>
      
    </main>
    </>
  );
}
