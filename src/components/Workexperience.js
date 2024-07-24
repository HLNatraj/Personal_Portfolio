// src/components/WorkExperience.js
import React from 'react';

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundColor:'lightcyan'}}
    >
      <div className="bg-black bg-no-repeat bg-opacity-55 p-6 md:p-10 lg:p-20 rounded-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Work Experience</h1>
        <div className="space-y-8">
          <div className="text-lg md:text-xl lg:text-2xl mb-4 text-center">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">techno</h2>
            <p className="italic text-lg md:text-xl lg:text-2xl">Start Date: 26-05-2023 - End Date: 28-07-2024</p>
            <p>Worked as a software engineer, developing various projects in React.</p>
          </div>
          <div className="text-lg md:text-xl lg:text-2xl mb-4 text-center">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">abc-techno</h2>
            <p className="italic text-lg md:text-xl lg:text-2xl">Start Date: 10-03-2020 - End Date: 24-05-2023</p>
            <p>Worked as a software engineer, developing various projects in React.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
