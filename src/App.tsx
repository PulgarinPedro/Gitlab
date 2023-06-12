import React from 'react';
import './App.css';

import Header from './componentes/Header';
import Experience from './componentes/Experience';
import Education from './componentes/Education';

interface ExperienceData {
  company: string;
  position: string;
  years: number;
}

interface EducationData {
  institution: string;
  degree: string;
  year: number;
}

const App: React.FC = () => {
  const experiences: ExperienceData[] = [
    {
      company: 'Etapa EP',
      position: 'Desarrollador de Software',
      years: 3,
    },
    {
      company: 'Etapa EP',
      position: 'Python',
      years: 2,
    },
  ];

  const education: EducationData[] = [
    {
      institution: 'Tecnológico Sudamericano',
      degree: "4to Ciclo",
      year: 2023-2024,
    },
  ];

  return (
    <div className="App">
      <Header name="Pedro Pulgarin" />
      <Experience experiences={experiences} />
      <Education education={education} />
    </div>
  );
};

export default App;
