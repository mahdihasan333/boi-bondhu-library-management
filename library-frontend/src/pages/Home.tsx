import { HeroSection } from "@/components/layout/HeroSection";
import { Helmet } from "react-helmet";
import Books from "./Books";
import AboutUs from "@/components/layout/AboutUs";
import FAQ from "@/components/layout/Faq";
import TestimonialsCarousel from "@/components/layout/Testimonials";
import favIcon from '../../public/book.png'


export const Home = () => {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <Helmet>
        <title>Boi Bondhu Management System</title>
        <meta name="description" content="Books" />
        <link rel="icon" type="image/png" href={favIcon} />
      </Helmet>
      <HeroSection />
      <AboutUs/>
      <Books />
      <TestimonialsCarousel/>
      <FAQ/>
    </div>
  );
};
