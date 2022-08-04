import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import Badges from './Badges';

export default function Toggle(props) {

  const [achievement, setAchievement] = useState('');
  const [badges, setBadges] = useState([])

  const handleChange = (event, badge) => {
    setAchievement(badge);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={achievement}
      exclusive
      onChange={handleChange}
      sx={{display: 'flex', flexWrap: 'wrap', maxWidth: '30em'}}
    >
      <Badges {...props}/>
    </ToggleButtonGroup>
  );
}
