import Head from "next/head";

import arts from "../lib/dummy-data.json";
import Art from "@/components/art";
import FAQ from "@/components/faq";
import { Gallery } from "@/styles/Gallery";
import LandingPage from "@/components/landing";
import TestimonialSlider from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>MOSAIC</title>
        <meta name="description" content="Crafted with 🖤 by Naol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main>
        <LandingPage />
        <Gallery id="gallery">
          {arts.map((art) => (
            <Art key={art.slug} art={art} />
          ))}
        </Gallery>
        <TestimonialSlider />
        <FAQ />
      </main>
    </>
  );
}
