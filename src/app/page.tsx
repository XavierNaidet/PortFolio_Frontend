'use client';

import React from 'react';
import Image from 'next/image';
import AboutPage from './about/page';
import SkillsPage from './skills/page';
import ProjectsPage from './projects/page';
import ContactPage from './contact/page';

const HomePage: React.FC = () => {
  return (
    <div className="container space-y-8">
      <div className="bg-neutral-variant text-neutral p-6 rounded-md">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 lg:gap-16 my-12">
          {/* Photo + Name */}
          <div className="flex flex-col items-center lg:items-center flex-shrink-0">
            <Image
              src="/profile-photo.jpg"
              alt="Photo de Xavier"
              width={150}
              height={150}
              className="rounded-full bg-primary shadow-lg"
            />
            <p className="text-xl font-semibold text-tertiary mt-4">
              Xavier
            </p>
          </div>

          {/* Title */}
          <div className="text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-4xl font-bold text-primary leading-snug">
              Développeur Web / Web Mobile<br />
              <span className="text-tertiary">&</span> <br />
              Créateur de Solutions Modernes
            </h1>
          </div>
        </header>

      </div>
      <AboutPage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-neutral mt-4">
          Toujours prêt à relever de nouveaux défis.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
