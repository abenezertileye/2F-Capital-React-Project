import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { Box, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const data = [
  { month: 'Jan', money: 1000, moneySecondary: 1200 },
  { month: 'Feb', money: 2000, moneySecondary: 1800 },
  { month: 'Mar', money: 1500, moneySecondary: 1600 },
  { month: 'Apr', money: 3000, moneySecondary: 2900 },
  { month: 'May', money: 2500, moneySecondary: 2400 },
  { month: 'Jun', money: 4000, moneySecondary: 3800 },
  { month: 'Jul', money: 3500, moneySecondary: 3600 },
  { month: 'Aug', money: 4500, moneySecondary: 4300 },
  { month: 'Sep', money: 4200, moneySecondary: 4100 },
  { month: 'Oct', money: 5000, moneySecondary: 4800 },
  { month: 'Nov', money: 4800, moneySecondary: 4700 },
  { month: 'Dec', money: 5200, moneySecondary: 5000 }
];

function Header() {
  return (
    <Box sx={{ mb: 2, margin: '20px', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography sx={{ fontWeight: '700' }}>Earning Book Summary</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography variant="body2" sx={{ color: '#A3A3A3' }}>Mar 2022 - Oct 2024</Typography>
            <IconButton sx={{ color: '#A3A3A3' }}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Box sx={{ width: '12px', height: '12px', backgroundColor: '#3f51b5', borderRadius: '50%' }} />
          <Typography variant="body2">Last 6 Months</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Box sx={{ width: '12px', height: '12px', backgroundColor: '#888888', borderRadius: '50%' }} />
          <Typography variant="body2">Same Period Last Year</Typography>
        </Box>
      </Box>
        
      </Box>
      
    </Box>
  );
}

function LineGraph() {
  return (
    <Box>
      <Header />
      <ResponsiveContainer width="95%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3f51b5" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3f51b5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="money"
            stroke="#3f51b5"
            fill="url(#blueGradient)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="money"
            stroke="#3f51b5"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="moneySecondary"
            stroke="#888888"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default LineGraph;
