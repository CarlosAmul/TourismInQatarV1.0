// import orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
// @mui
import { Box, Link, Card, Avatar, Typography, CardContent, Stack, Grid, Button, Container, TextField } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import Image from '../components/Image';
import SvgIconStyle from '../components/SvgIconStyle';
// utills
import { fDate } from '../utils/formatTime';
import {changeCardColor, shuffle, createPlaces, handleSearch} from './homePageFunctions'

// ----------------------------------------------------------------------

HomePage.propTypes = {
  index: PropTypes.number,
};
export default function HomePage({ index }) {
  // const { themeStretch } = useSettings();

  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [backgroundColor, setBackgroundColor]=useState(["#EBD168","#A81818"] )
  const [textColor, setTextColor]=useState(["#A81818", "#EBD168"])
  const [filters, setFilters] = useState('latest');
  const latestPostLarge = index === 0;
  const latestPostSmall = index === 1 || index === 2;
  const linkTo = '/';

  useEffect(() => {
    createPlacesLocally();

  }, []);
  const addition=()=>{
    return  true
  }
  const createPlacesLocally = () => {
  
    setPlaces(createPlaces());

  };

  const changeCardColorLocally = () => {
    const cardColors =  changeCardColor(backgroundColor[0])
    setBackgroundColor([cardColors[0], cardColors[1]])
    setTextColor([cardColors[1], cardColors[0]])

  };
  const clickButton=()=>{
    document.getElementById("changeColor").click()
  }
  const shuffleLocally=()=> {

    setPlaces(shuffle())
  }
  const handleSearchLocally=()=>{
    if(search.length>0){

    
    setPlaces(handleSearch(search))
    }
  else{
    createPlaces()
  }  }
  return (
    <Page title="Home Page">
      {/* <Container maxWidth={themeStretch ? false : 'lg'}> */}
      <Container maxWidth='lg'> 
        <TextField lable="Search" value={search} onChange={val=>setSearch(val.target.value)}/>
        <Button id="searchNow"onClick={handleSearchLocally}>search</Button>
        <Button id="changeColor" onClick={changeCardColorLocally}>change color</Button>
        <Button id="shuffle" onClick={shuffleLocally}>shuffle cards</Button>

        <Grid container spacing={3}>
          {places.map((place, index) => (
            <Grid key={place.id} item xs={12} sm={6} md={4}>
              <Card
                id={`card${place.id}`}
                sx={{
                  backgroundColor: `${backgroundColor[index%2]}`,
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Image alt="cover" src={place.img} ratio="4/3" />
                </Box>
                <CardContent
                  sx={{
                    pt: 4.5,
                    width: 1,
                    ...((latestPostLarge || latestPostSmall) && {
                      pt: 0,
                      zIndex: 9,
                      bottom: 0,
                      position: 'absolute',
                      color: 'common.white',
                    }),
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="caption"
                    component="div"
                    sx={{
                      color: `${textColor[index%2]}`,
                      fontSize: '18px',
                      ...((latestPostLarge || latestPostSmall) && {
                        opacity: 0.64,
                        color: 'common.white',
                      }),
                    }}
                  >
                    {place.placeName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
