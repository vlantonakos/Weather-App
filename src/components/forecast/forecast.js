import { Grid, Typography } from '@mui/material';
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
} from "react-accessible-accordion";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#2980b9',
    background: '-webkit-linear-gradient(to right, #2980b9, #2c3e50)',
    background: 'linear-gradient(to right, #2980b9, #2c3e50)',
    padding: 0,
    textAlign: 'center',
    color: 'white',
  }));

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  
    return (
        <>
      <Typography variant='h2'>Daily</Typography>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <Box sx={{
                    width: '400px',
                    m: '10px auto 5px auto',
                    p: '20px 20px 20px 20px',
                    borderRadius: '6px', 
                    boxShadow: '10px -2px 20px 2px #72A0C1',
                    backgroundColor: '#00b4db',
                    background: '-webkit-linear-gradient(to bottom, #00b4db, #0083b0)',
                    background: 'linear-gradient(to bottom, #00b4db, #0083b0)',
                    display:'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                  <WbSunnyIcon />
                  <Typography className="day">{forecastDays[idx]}</Typography>
                  <Typography className="description">{item.weather[0].description}</Typography>
                  <Typography className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</Typography>
                </Box>
              </AccordionItemButton>
            </AccordionItemHeading>

            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>
                        <Typography>Pressure:</Typography>
                        <Typography>{item.main.pressure}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography>Humidity:</Typography>
                        <Typography>{item.main.humidity}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography>Clouds:</Typography>
                        <Typography>{item.clouds.all}%</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography>Wind speed:</Typography>
                        <Typography>{item.wind.speed} m/s</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography>Sea level:</Typography>
                        <Typography>{item.main.sea_level}m</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography>Feels like:</Typography>
                        <Typography>{item.main.feels_like}°C</Typography>
                    </Item>
                </Grid>
              </Grid>
              </Box>

          </AccordionItem>
        ))}
      </Accordion>
    </>
    )
}

export default Forecast