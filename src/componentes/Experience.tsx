import React from 'react';

interface ExperienceProps {
  experiences: ExperienceData[];
}

interface ExperienceData {
  company: string;
  position: string;
  years: number;
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section>
      <h2>Dedicado a:</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <p>Compania: {experience.company}</p>
            <p>Posición: {experience.position}</p>
            <p>Años de experiencia: {experience.years}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
