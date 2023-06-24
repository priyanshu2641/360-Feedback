import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { tokens } from "../themes";
import { useTheme } from '@mui/material/styles';

export default function BasicRating() {
  const [value, setValue] = React.useState(5);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
          Peer Evaluation
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
          Self Evaluation
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>Skill A:</span>
              <Rating
                name="read-only" value={value} readOnly 
              />
            </li>
          </ul>
        </Typography>
      </Box>
      
    </Box>
  );
}
