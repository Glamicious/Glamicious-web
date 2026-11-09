import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import Deals from "@/components/Deals";
import Salons from "@/components/Salons";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import AppCta from "@/components/AppCta";
import Footer from "@/components/Footer";
import { dictionaries, type Locale } from "@/lib/dictionaries";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const homeHref = locale === "my" ? "/my" : "/";

  return (
    <div lang={locale} data-locale={locale}>
      <Header t={t.header} homeHref={homeHref} />
      <main>
        <Hero t={t.hero} />
        <Treatments t={t.treatments} />
        <Deals t={t.deals} />
        <Salons t={t.salons} />
        <HowItWorks t={t.how} />
        <Partners t={t.partners} />
        <AppCta t={t.app} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
