import React from 'react';
import { render, screen } from '@testing-library/react';
import WalkingCat from './WalkingCat.js';


test('verifica se a imagem é renderizada', () => {
  render(<WalkingCat />);
 
  const imgElement = screen.getByAltText('minha imagem');
 
  expect(imgElement).toBeInTheDocument();
}
);


export default jest;