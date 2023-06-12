import React from 'react';
import profileImage from '../assets/Perfil.png';
interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header>
      <h1>Hoja de vida</h1>
      <h2>Nombre: {name}</h2>
      <img src={profileImage} alt="Perfil" style={{ width: '200px', height: '200px' }}/>
    </header>
  );
};

export default Header;
