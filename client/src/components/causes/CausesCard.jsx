import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CommonButton from '../general/button/CommonButton'
import { Box } from '@mui/material';
import Badge from '../badge/Badge';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: '#EC3C3B'
  },
}));

const CausesCard = (props) => {

  const { title, cardDetail, collected, goal, badgeContent, badgeBackground, onClick } = props


  return (
    <Card
      onClick={onClick}
      sx={{
        height: 550,
        maxWidth: 325,
        borderRadius: 5,
        position: 'relative',
      }}>
      <CardActionArea>
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(38,38,38,0) 80%, rgba(0,0,0,1) 100%)',
            pointerEvents: 'none', // Ensure clicks pass through the overlay
          }}></div>
          <CardMedia
            component="img"
            height="240"
            image="src/assets/istockphoto-1430371482-612x612.jpg"
            alt="green iguana"
          />
        </Box>
        <CardContent
          sx={{
            height: 180,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign='center'
            className='merriweather'
            fontWeight='bold'
            sx={{
              marginTop: 2,
              color: '#313131'
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign='center'>
            {cardDetail}
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={50}
            sx={{
              width: '90%'
            }}
          />
          <Box
            sx={{
              display: 'flex',
              gap: 3
            }}
          >
            <Typography
              className='inter'
              fontSize={14}
              fontWeight='bold'
              color='#757575'
            >
              Collected: ${collected}
            </Typography>
            <Typography
              className='inter'
              fontSize={14}
              fontWeight='bold'
              color='#757575'
            >
              Goal: ${goal}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          height: 70,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CommonButton
          content='Donate Now'
          width='80%'
          background='#F6F6F6'
          hoverBackground='#F8A504'
          hoverColor='white'
        ></CommonButton>
      </CardActions>
      <Badge
        content={badgeContent}
        backgroundColor={badgeBackground}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      ></Badge>
    </Card>
  )
}

export default CausesCard
