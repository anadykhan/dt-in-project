import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CommonButton from '../button/CommonButton'
import { Box } from '@mui/system';


const CausesCard = (props) => {

  const {title, content, collected, goal} = props

  return (
    <Card sx={{ 
      maxWidth: 345,
      borderRadius: 5
       }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="src/assets/istockphoto-1430371482-612x612.jpg"
          alt="green iguana"
        />
        <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign='center'>
            {content}
          </Typography>
          <Box
          sx={{
            display: 'flex',
            gap: 3
          }}
          >
            <Typography>
              Collected: ${collected}
            </Typography>
            <Typography>
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
        content = 'Donate'
        bgColor = 'pink'
        width = {290}
        ></CommonButton>
      </CardActions>
    </Card>
  )
}

export default CausesCard
