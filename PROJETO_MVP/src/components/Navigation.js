import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ 
      width: 250,
      height: 50,
      backgroundColor: '#f0f0f0',
      borderRadius: 60,
      boxShadow: 0,
      p: 2,
    }}>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* Ícone do Instagram clicável */}
        <a href="https://www.instagram.com/ikesobera" target="_blank" rel="noopener noreferrer">
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        </a>

        {/* Ícone do Spotify clicável */}
        <a href="https://open.spotify.com/intl-pt/artist/6ksSbDzkAY8SkrljuzrFu5" target="_blank" rel="noopener noreferrer">
          <BottomNavigationAction label="Spotify" icon={<LibraryMusicIcon />} />
        </a>

        {/* Ícone YouTube clicável (exemplo: redirecionando para o youtube) */}
        <a href="https://www.youtube.com/@DJikesobera" target="_blank" rel="noopener noreferrer">
          <BottomNavigationAction label="YouTube" icon={<YouTubeIcon />} />
        </a>
      </BottomNavigation>
    </Box>
  );
}
