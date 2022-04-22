import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, responsiveFontSizes } from "@mui/material";
import axios from "axios"
import { useEffect } from "react";
import {useDispatch}from"react"
import {clearLoading,setLoading} from 

const News = () => {
  const dispatch=useDispatch();

  const url=
    "https://newsapi.org/v2/everything -G"+
    "q=Apple"+
    "from=2022-04-19"+
    "sortBy=popularity"+
    "apiKey=c559cdbabb66421db78dd5e6ff037ff5";

    



    const getNews = async()=>{
      try {
        dispatch(setLoading())
        const response =await axios.get(url);
        console.log(response)
      } catch (error) {
        console.log(error)
      }finally{
        dispatch(clearLoading())
      }
     
    };

    useEffect(() => {
      getNews();
      
    }, []);
    
  return (
    <Box
      xs={{ d: "flex" }}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
    >
      {[1, 2, 3, 4].map((item, index) => (
        <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
          <CardMedia
            component="img"
            height="250"
            image={
              item?.urlToImage ??
              "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
            }
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item?.title ?? "Tesla disables gaming while driving feature"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item?.content ??
                "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" href={item?.url} target="_blank">
              Detail
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default News;
