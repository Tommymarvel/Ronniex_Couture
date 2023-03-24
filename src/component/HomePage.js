import React from 'react';
import '../assets/styles/HomePage.css';
import Outfit from '../assets/image/outfit.png';

const HomePage = () => (
  <div className="home flex flex-col sm:flex-row">
    <div className="md:w-2/4 lg:w-2/3 p-2 md:ml-10 rounded-lg shadow-md">
      <h1 className="font-gloock text-4xl font-black mt-40 md:mt-40">
        Choose the look
        {' '}
        <br />
        that suits
        {' '}
        <span className="text-bg_primary">you</span>
        {' '}
        best
      </h1>
      <p className="text-base leading-6 text-white-700 max-w-md">
        Whether you&apos;re looking for casual wear, formal attire, or something
        in between, our collection has something for everyone. We believe that
        fashion is not just about looking good, but also feeling good, so we
        strive to provide you with the highest quality materials that are
        comfortable and easy to wear.
      </p>
      <button
        className="rounded-full mt-5 smx:p-3 bg-bg_secondary p-5 text-white hover:text-red-800 hover:bg-white"
        type="button"
      >
        Shop Now
      </button>
    </div>
    <div className="md:w-2/4 flex sm:ml-2 mt-2 sm:mt-0">
      <img src={Outfit} alt="Dress outfit" className="" />
    </div>
  </div>
);

export default HomePage;
