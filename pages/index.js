import Head from 'next/head';
import { useQuery } from 'urql';
import { ART_QUERY } from '@/lib/query';
import Art from '@/components/art';
import { Gallery } from '@/styles/Gallery';
import LandingPage from '@/components/landing';
import FAQ from '@/components/faq';
import TestimonialSlider from '@/components/testimonial';

export default function Home() {
  const [result] = useQuery({query: ART_QUERY});
  const{data, fetching, error} = result;

  if(fetching) return <p>Loading...</p>;
  if(error) return <p>Error occurred {error.message}</p>;

  const arts = data.arts.data;


  return (
    <>
      <Head>
        <title>MOSAIC</title>
        <meta name="description" content="Crafted with 🖤 by Naol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main>
        <LandingPage/>
        <Gallery>
        {
          arts.map((art) => (<Art key={art.attributes.slug} art={art}/>))
        }
        </Gallery>
        <TestimonialSlider/>
        <FAQ/>
      </main>
    </>
  )
}
