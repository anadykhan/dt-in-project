import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CommonButton from '../general/button/CommonButton'
import { Box } from '@mui/system';
import Badge from '../badge/Badge';


const CausesCard = (props) => {

  const { title, content, collected, goal, badgeContent, badgeBackground } = props

  return (
    <Card sx={{
      maxWidth: 345,
      borderRadius: 5,
      position: 'relative'
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
          content='Donate'
          bgColor='pink'
          width={290}
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
