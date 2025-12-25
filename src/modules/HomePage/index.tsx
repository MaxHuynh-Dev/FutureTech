import type React from "react";
import Blogs from "./Blogs";
import Features from "./Features";
import Hero from "./Hero";
import HomeCta from "./HomeCta";
import Resources from "./Resources";
import Testimonials from "./Testimonials";

function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <Features />
      <Blogs />
      <Resources />
      <Testimonials />
      <HomeCta />
    </>
  );
}

export default HomePage;
