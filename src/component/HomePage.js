import React from 'react';

const HomePage = () => (
  <div>
    <div>
      <h1 className="font-mono text-4xl text-bold font-black mt-40 lg:ml-20 md:ml-10 sm:ml-10 xsm:ml-5">
        Choose the look
        {' '}
        <br />
        that suits
        {' '}
        <span className="text-bg_primary">you</span>
        {' '}
        best
      </h1>
      <div className="text-left w-full md:w-2/3 md:text-lg lg:w-1/3 p-2 lg:ml-20 md:ml-10 sm:ml-10 xsm:ml-5 bg-white rounded-lg shadow-md">
        <p className="text-base leading-6 text-gray-700 max-w-md">
          Whether you&apos;re looking for casual wear, formal attire, or
          something in between, our collection has something for everyone. We
          believe that fashion is not just about looking good, but also feeling
          good, so we strive to provide you with the highest quality materials
          that are comfortable and easy to wear.
        </p>
      </div>
    </div>
  </div>
);

export default HomePage;
