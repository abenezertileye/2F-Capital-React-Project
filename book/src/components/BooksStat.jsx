import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { CssBaseline, Box, Card, Divider, Typography } from '@mui/material';
import StaticButton from './StaticButton';
import { dataForPie } from '../data/DataForPie';

function BooksStat() {
  return (
    <Card sx={{ margin: '20px 20px', paddingBottom:'10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', margin: '10px 0px' }}>
                <Typography variant="body2" sx={{color: '#525256'}}>Available Books</Typography>
                <StaticButton text='Today'></StaticButton>
            </Box>

              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={dataForPie}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={0}
                    startAngle={0}
                    endAngle={360}
                  >
                    {dataForPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                    ))}
                  </Pie>
                  <Legend
      align="center"
      verticalAlign="bottom"
      layout="vertical"
      payload={dataForPie.map((item, index) => ({
        value: `${item.name}: ${item.value}`,
        type: 'circle',
        id: item.name,
        color: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4],
      }))}
    />
                </PieChart>
              </ResponsiveContainer>
            </Card>
  )
}

export default BooksStat