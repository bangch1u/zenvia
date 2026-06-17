import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const BrandIntro = dynamic(() => import("@/components/BrandIntro"));
const FeaturedCollection = dynamic(() => import("@/components/FeaturedCollection"));
const WhyChooseZenvia = dynamic(() => import("@/components/WhyChooseZenvia"));
const Lookbook = dynamic(() => import("@/components/Lookbook"));
const BestSeller = dynamic(() => import("@/components/BestSeller"));
const CustomerReviews = dynamic(() => import("@/components/CustomerReviews"));
const StoreExperience = dynamic(() => import("@/components/StoreExperience"));
const SocialFeed = dynamic(() => import("@/components/SocialFeed"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedCollection />
      <WhyChooseZenvia />
      <Lookbook />
      <BestSeller />
      <CustomerReviews />
      <StoreExperience />
      <SocialFeed />
      <CTABanner />
    </>
  );
}
