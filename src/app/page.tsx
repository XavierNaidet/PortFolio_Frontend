'use client';

import React from 'react';
import Image from 'next/image';
import AboutPage from './about/page';
import SkillsPage from './skills/page';
import ProjectsPage from './projects/page';
import ContactPage from './contact/page';

const HomePage: React.FC = () => {
  return (
    <div className="container space-y-4">
      <div className="bg-gray-100 text-gray-800 p-6 rounded-md">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 lg:gap-16 my-12">
          {/* Photo + Name */}
          <div className="flex flex-col items-center lg:items-center flex-shrink-0">
            <Image
              src="/profile-photo.jpg"
              alt="Photo de Xavier"
              width={150}
              height={150}
              className="rounded-full bg-black"
            />
            <p className="text-center text-xl font-semibold text-gray-800 mt-4">
              Xavier
            </p>
          </div>

          {/* Title */}
          <div className="text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-4xl font-bold text-gray-900 leading-snug">
              Développeur Web / Web Mobile<br />
              <span className="text-blue-500">&</span> <br />
              Créateur de Solutions Modernes
            </h1>
          </div>
        </header>

        {/* Footer Section */}
        <footer className="text-center mt-12">
          <p className="text-gray-600 mt-4">
            Toujours prêt à relever de nouveaux défis.
          </p>
        </footer>

      </div>
      <AboutPage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
      <div className='h-2'></div>
    </div>
  );
};

export default HomePage;
