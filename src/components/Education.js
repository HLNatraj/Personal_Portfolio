// src/components/Education.js
import React from 'react';
import { FaUniversity } from 'react-icons/fa'; // Icons for visual appeal
// import backgroundImage from '../assets/education-background.jpg'; // Adjust the path as needed

const Education = () => {
  return (
    <section
      id="education"
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundColor:'lightcyan'}}
    >
      <div className="bg-black bg-no-repeat bg-opacity-55 p-6 md:p-10 lg:p-20 rounded-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center ">Education</h1>
        <div className="space-y-8">
          {/* Educational Item 1 */}
          <div className="flex items-start space-x-4">
            <FaUniversity className="text-4xl md:text-5xl lg:text-6xl text-yellow-500" />
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Bachelor Of Engineering</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-medium">VTU University</p>
              <p className="text-sm md:text-base lg:text-lg italic">[2016] - [2020]</p>
              {/* <p className="text-lg md:text-xl lg:text-2xl">[Brief Description or Achievements]</p> */}
            </div>
          </div>

          {/* Educational Item 2 */}
          <div className="flex items-start space-x-4">
            <FaUniversity className="text-4xl md:text-5xl lg:text-6xl text-blue-500" />
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">PUC</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-medium">ABC PU College</p>
              <p className="text-sm md:text-base lg:text-lg italic">[2015] - [2016]</p>
              {/* <p className="text-lg md:text-xl lg:text-2xl">[Brief Description or Achievements]</p> */}
            </div>
          </div>

          
          <div className="flex items-start space-x-4">
            <FaUniversity className="text-4xl md:text-5xl lg:text-6xl text-orange-500" />
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">SSLC</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-medium"> MVK</p>
              <p className="text-sm md:text-base lg:text-lg italic">[2014]</p>
              {/* <p className="text-lg md:text-xl lg:text-2xl">[Brief Description or Achievements]</p> */}
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Education;
