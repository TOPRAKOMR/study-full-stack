import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductItem({ahmet}) {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140px"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image={ahmet.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ahmet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {ahmet.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {ahmet.category}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
