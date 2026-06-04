import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import FeaturedCollection from "@/components/FeaturedCollection";
import WhyChooseZenvia from "@/components/WhyChooseZenvia";
import Lookbook from "@/components/Lookbook";
import BestSeller from "@/components/BestSeller";
import CustomerReviews from "@/components/CustomerReviews";
import StoreExperience from "@/components/StoreExperience";
import SocialFeed from "@/components/SocialFeed";
import CTABanner from "@/components/CTABanner";

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
