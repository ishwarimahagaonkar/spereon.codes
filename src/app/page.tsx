import { Hero } from "@/components/sections/hero";
// Sections kept for later — re-enable by uncommenting the import + JSX below.
// import { TrustedBy } from "@/components/sections/trusted-by";
// import { ServicesGrid } from "@/components/sections/services-grid";
// import { WhyChoose } from "@/components/sections/why-choose";
// import { Process } from "@/components/sections/process";
// import { TechStack } from "@/components/sections/tech-stack";
// import { Testimonials } from "@/components/sections/testimonials";
// import { Faq } from "@/components/sections/faq";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Stats } from "@/components/sections/stats";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustedBy /> */}
      {/* <ServicesGrid /> */}
      {/* <WhyChoose /> */}
      {/* <Process /> */}
      <FeaturedProducts />
      {/* <TechStack /> */}
      <Stats />
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      <Cta />
    </>
  );
}
