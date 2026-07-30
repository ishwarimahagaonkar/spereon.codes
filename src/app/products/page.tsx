import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Products",
  description:
    "StaffTrack HRMS, Parlour Management System, and MEP Project Management — ready-to-deploy products built by Spereon.codes.",
};

export default function ProductsPage() {
  return (
    <>
      {/* <PageHero
        eyebrow="Our Products"
        title="Ready-made platforms, customized for you"
        subtitle="Skip months of development. Our products are proven in production and can be tailored, branded, and extended for your business."
      /> */}
      <div className="-mt-20">
        <FeaturedProducts />
      </div>
      <Cta />
    </>
  );
}
