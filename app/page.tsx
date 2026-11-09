import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import Deals from "@/components/Deals";
import Salons from "@/components/Salons";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import AppCta from "@/components/AppCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Treatments />
        <Deals />
        <Salons />
        <HowItWorks />
        <Partners />
        <AppCta />
      </main>
      <Footer />
    </>
  );
}
