'use client';

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container bg-surfaceContainerLow text-primary p-6 rounded-md">
      <h1 className="text-3xl font-bold text-center mb-8">A propos de Moi</h1>
      
      {/* Who Am I Section */}
      <section className="bg-surfaceContainerHigh rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Qui suis-je ?</h2>
        <p className="text-secondary leading-7">
          Après plusieurs années dans le support informatique où j'ai toujours mis mes compétences de développeur 
          au service de l'amélioration des processus, je me suis lancé dans une reconversion en développement web.
          Mon parcours m'a permis de développer des compétences solides en <strong>HTML</strong>, <strong>CSS</strong>, <strong>PHP</strong>, <strong>JavaScript</strong>, 
          et d'explorer des frameworks modernes comme <strong>React</strong> et <strong>Next.js</strong>.
        </p>
        <p className="text-secondary leading-7 mt-4">
          Toujours curieux et motivé, j'adore apprendre de nouvelles technologies et relever des défis.
        </p>
      </section>

      {/* Why Me Section */}
      <section className="bg-surfaceContainerHigh rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Pourquoi me choisir ?</h2>
        <p className="text-secondary leading-7">
          Mon expérience unique en support informatique combinée à mes compétences en développement web 
          me permet d'aborder les projets avec une double vision technique et utilisateur.
        </p>
        <p className="text-secondary leading-7 mt-4">
          Je suis organisé, rigoureux, et j'adore collaborer avec des équipes pour créer des solutions efficaces et élégantes.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
