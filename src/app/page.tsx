import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IdealClient } from "@/components/IdealClient";
import { Methodology } from "@/components/Methodology";
import { ModelAgnostic } from "@/components/ModelAgnostic";
import { Philosophy } from "@/components/Philosophy";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Methodology />
        <Philosophy />
        <ModelAgnostic />
        <IdealClient />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
