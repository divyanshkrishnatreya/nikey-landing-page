


import { useState } from "react";
import "./App.css";
import {
  CustomerReviews,
  PopularProduct,
  SuperProduct,
  Services,
  SuperQuality,
  SpecialOffers,
  Subscribe,
  Footer,
  Nav,
  Hero,
} from "./sections";

const App = () => (
<main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b padding'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProduct />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
);

export default App;
