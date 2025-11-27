import {
  Hero,
  Services,
  WhyUs,
  Pricing,
  ExtendedServices,
  About,
  Testimonial,
  Contact,
} from '../components/sections';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <ExtendedServices />
      <About />
      <Testimonial />
      <Contact />
    </main>
  );
}
