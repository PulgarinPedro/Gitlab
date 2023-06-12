import React from 'react';

interface EducationProps {
  education: EducationData[];
}

interface EducationData {
  institution: string;
  degree: string;
  year: number;
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section>
      <h2>Educación:</h2>
      <ul>
        {education.map((educationItem, index) => (
          <li key={index}>
            <p>Institución: {educationItem.institution}</p>
            <p>Ciclo: {educationItem.degree}</p>
            <p>Año lectivo: {educationItem.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
