import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const WinnerModal = ({ hero, onClose }) => (
  <Dialog open={true} onClose={onClose}>
    <DialogTitle>Herói Vencedor</DialogTitle>
    <DialogContent>
      <img src={hero.image.url} alt={hero.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">{hero.name}</h2>
      <p className="mb-2">{hero.biography.fullName}</p>
      <p className="mb-2">Poder: {hero.powerstats.strength}</p>
      <p className="mb-2">Velocidade: {hero.powerstats.speed}</p>
      <p className="mb-2">Inteligência: {hero.powerstats.intelligence}</p>
      {/* Adicione mais detalhes conforme necessário */}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Fechar</Button>
    </DialogActions>
  </Dialog>
);

export default WinnerModal;
