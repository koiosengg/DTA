import Banner from "@/components/Home/Banner";
import Stats from "@/components/Home/Stats";
import MartialArts from "@/components/Home/MartialArts";
// import AudienceBanner from "@/components/Home/AudienceBanner";
import Authority from "@/components/Home/Authority";
import Champions from "@/components/Home/Champions";
import Bangalore from "@/components/Home/Bangalore";
import Learn from "@/components/Home/Learn";
import Legacy from "@/components/Home/Legacy";
import Journey from "@/components/Home/Journey";
import Timings from "@/components/Home/Timings";
import Moments from "@/components/Home/Moments";
import Testimonial from "@/components/Home/Testimonial";
import Programs from "@/components/Home/Programs";
import { HomePageStructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-[#111] transition-colors duration-300">
      <HomePageStructuredData />
      <Banner />
      <Stats />
      {/* <AudienceBanner /> */}
      <Authority />
      <Champions />
      <Bangalore />
      <Learn />
      <Legacy />
      <Programs />
      <MartialArts />
      <Journey />
      <Timings />
      <Moments />
      <Testimonial />
    </div>
  );
}
