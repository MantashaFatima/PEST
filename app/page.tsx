import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TermiteTreatment from "./components/TermiteTreatment";
import OnSiteAndSafety from "./components/OnSiteAndSafety";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceAreasContact from "./components/ServiceAreasContact";
import BottomCTA from "./components/BottomCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <TermiteTreatment />
        <OnSiteAndSafety />
        <WhyChooseUs />
        <ServiceAreasContact />
        <BottomCTA />
      </main>
    </>
  );
}
