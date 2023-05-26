import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Grid from '@mui/material/Grid';


const CurrentWeather = ({data}) => {
  return (
    <Box sx={{
        width: '300px',
        m: '20px auto 0 auto',
        p: '0 20px 20px 20px',
        borderRadius: '6px', 
        boxShadow: '10px -2px 20px 2px #72A0C1',
        backgroundColor: '#00b4db',
        background: '-webkit-linear-gradient(to bottom, #00b4db, #0083b0)',
        background: 'linear-gradient(to bottom, #00b4db, #0083b0)',
    }}>
        <Box sx={{
            display:'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'grid',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: 1,
                    m: 0,
                    letterSpacing: '1px',
                }}>
                    {data.city}
                </Typography>
                <Typography sx={{
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1,
                    m: 0,
                }}>
                    {data.weather[0].description}
                </Typography>
            </Box>
            <WbSunnyIcon sx={{
                width:'100px'
            }}/>
        </Box>

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Typography sx={{
                fontWeight: 600,
                fontSize: '70px',
                width: 'auto',
                letterSpacing: '-5px',
                m: '10px 0',
            }}>
                {Math.round(data.main.temp-273.15)}°C
            </Typography>
            <Grid sx={{
                width: '100%',
                pl: '40px',
                display: 'grid',
                justifyContent: 'space-between'
            }}>
                <Typography sx={{
                    width: '100%',
                    borderBottom: '1px solid black',
                    pt: '20px'
                }}>
                    Details
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography sx={{
                        textAlign: 'left',
                        fontWeight: 400,
                        fontSize: '12px',
                    }}>
                        Feels like
                    </Typography>
                    <Typography sx={{
                        textAlign: 'right',
                        fontWeight: 600,
                        fontSize: '12px',
                        pl: '10px'
                    }}>
                        {Math.round(data.main.feels_like-273.15)}°C
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        textAlign: 'left',
                        fontWeight: 400,
                        fontSize: '12px'
                    }}>
                        Wind
                    </Typography>
                    <Typography sx={{
                        textAlign: 'right',
                        fontWeight: 600,
                        fontSize: '12px',
                        pl: '10px'
                    }}>
                        {data.wind.speed} m/s
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        textAlign: 'left',
                        fontWeight: 400,
                        fontSize: '12px'
                    }}>
                        Humidity
                    </Typography>
                    <Typography sx={{
                        textAlign: 'right',
                        fontWeight: 600,
                        fontSize: '12px',
                        pl: '10px'
                    }}>
                        {data.main.humidity}%
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{
                        textAlign: 'left',
                        fontWeight: 400,
                        fontSize: '12px'
                    }}>
                       Pressure
                    </Typography>
                    <Typography sx={{
                        textAlign: 'right',
                        fontWeight: 600,
                        fontSize: '12px',
                        pl: '10px'
                    }}>
                        {data.main.pressure} hPa
                    </Typography>
                </Box>

            </Grid>
        </Box>

    </Box>
  )
}

export default CurrentWeather