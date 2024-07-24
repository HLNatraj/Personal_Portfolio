import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative p-6 md:p-10 lg:p-20 bg-cover bg-center h-screen"
      style={{ backgroundColor: 'lightcyan' }}
    >
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center md:items-start">
          <img
            // src={profileImage}
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-60 lg:h-60 rounded-full border-4 border-white bg-[url('profile1.jpeg')] bg-cover"
          />
          <h1 className='text-black text-center text-2xl font-bold mt-4 md:mt-0 pl-16'>NATRAJ</h1>

        </div>
        <div className="relative text-black max-w-2xl mt-6 md:mt-0 md:ml-6">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-2xl lg:text-2xl">
            Hello! I am a passionate software developer specializing in building web applications using modern technologies.
            This portfolio showcases my work, skills, and background. Feel free to explore and learn more about me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
