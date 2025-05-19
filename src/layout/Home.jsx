
import { useState } from 'react';

import Banner from '../components/Home/Banner';
import LeftSide from '../components/Home/LeftSide';

import Slider from '../components/Home/Slider';
import { useLoaderData } from 'react-router-dom';
import Service from '../components/Home/service';
import { Helmet } from 'react-helmet';



const Home = () => {

  const category = useLoaderData();

  return (
    <>
      <Helmet>
        <title>CareerGuidePro|Home</title>
      </Helmet>
      <section>
        <div className=" flex gap-2 mb-8 ml-2">
          <LeftSide></LeftSide>
          <Banner></Banner>
        </div>
        <Slider></Slider>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              category.map(category => <Service key={category.id} service={category}></Service>)
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;