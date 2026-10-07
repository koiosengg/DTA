import Banner from "@/components/Home/Banner";
import Champions from "@/components/Home/Champions";
import Authority from "@/components/Home/Authority";
// import AudienceBanner from "@/components/Home/AudienceBanner";
import Learn from "@/components/Home/Learn";
import Reels from "@/components/About/Reels";
import Journey from "@/components/Home/Journey";
import PhotoScrollSection from "@/components/Home/PhotoScrollSection";
import Testimonial from "@/components/Home/Testimonial";
import aboutBannerImg from "@/public/assets/About/Banner/AboutBanner.jpg";
import { AboutPageStructuredData } from "@/components/structured-data";

export default function About() {
  return (
    <div className="relative isolate overflow-x-clip bg-primary transition-colors duration-300">
      <AboutPageStructuredData />
      {/* Banner Section */}
      <Banner
        title={<>More than Martial Arts, a</>}
        subtitle={<span className="block text-accent">Journey of Growth.</span>}
        desc="Since 2008, DTA has empowered students of all ages through expert Korean martial arts training focused on strength, focus, discipline, and personal development."
        image={aboutBannerImg}
      />
      <Champions
        showCta={false}
        className="lg:rounded-t-[64px] rounded-t-[36px]"
        subtitle="Deccan Taekwondo Academy has been shaping lives through the power of Korean martial arts for over 18 years."
        paragraphs={[
          "Deccan Taekwondo Academy has been shaping lives through the power of Korean martial arts for over 18 years.",
          "Founded under the expert guidance of Grand Master H.L. Muthappa Huderi, a 7th Dan Black Belt and internationally recognized martial arts expert, our academy has trained over 10,000 students across Bangalore.",
          "From young children taking their first kick to adults transforming their fitness and confidence, our mission remains the same: To create stronger bodies, sharper minds, and fearless individuals.",
        ]}
      />
      <Learn />
      <Authority />
      {/* <AudienceBanner /> */}
      <Reels />
      <Journey />
      <PhotoScrollSection />
      <Testimonial />
    </div>
  );
}
