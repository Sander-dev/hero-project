import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const calculateWinner = (hero1, hero2) => {
  const sum1 = Object.values(hero1.powerstats).reduce((a, b) => a + b, 0);
  const sum2 = Object.values(hero2.powerstats).reduce((a, b) => a + b, 0);
  return sum1 > sum2 ? hero1 : hero2;
};

const HeroWinnerModal = ({ open, onClose, heroes }) => {
  if (heroes.length !== 2) return null;

  const [hero1, hero2] = heroes;
  const winner = calculateWinner(hero1, hero2);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          borderRadius: 4,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: '90%',
          bgcolor: 'gray',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" align="center" gutterBottom color="black">
          Disputa de Heróis
        </Typography>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 p-2 relative">
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', bgcolor: 'rgba(0, 0, 0, 0.7)', color: 'green', p: 1, borderRadius: 1 }}
            >
              {winner === hero1 ? 'Vencedor' : ''}
            </Typography>
            <img src={hero1.images.md} alt={hero1.name} style={{ width: '100%', height: '40%', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="mt-2">
              <Typography variant="body1" gutterBottom color='black'>
                Nome: {hero1.name}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Inteligência: {hero1.powerstats.intelligence}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Força: {hero1.powerstats.strength}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Velocidade: {hero1.powerstats.speed}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Durabilidade: {hero1.powerstats.durability}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Poder: {hero1.powerstats.power}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Combate: {hero1.powerstats.combat}
              </Typography>
            </div>
          </div>
          <div className="w-1/2 p-2 relative height-auto">
            <Typography
              variant="h6"
              component="div"
              align="center"
              sx={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', bgcolor: 'rgba(0, 0, 0, 0.7)', color: 'green', p: 1, borderRadius: 1 }}
            >
              {winner === hero2 ? 'Vencedor' : ''}
            </Typography>
            <img src={hero2.images.md} alt={hero2.name} style={{ width: '100%', height: '40%', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="mt-2">
              <Typography variant="body1" gutterBottom color='black'>
                Nome: {hero2.name}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Inteligência: {hero2.powerstats.intelligence}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Força: {hero2.powerstats.strength}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Velocidade: {hero2.powerstats.speed}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Durabilidade: {hero2.powerstats.durability}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Poder: {hero2.powerstats.power}
              </Typography>
              <Typography variant="body1" gutterBottom color='black'>
                Combate: {hero2.powerstats.combat}
              </Typography>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default HeroWinnerModal;
