
// token: sk.eyJ1IjoiY2FybG9zYW11bCIsImEiOiJjbDFuYWJtZmQwN2U4M2xzMHZ6bWJ6NXVxIn0.Dir6AiSvYeuJjslEyCXcfQ

// import orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
// @mui
import { Box, Link, Card, Avatar, Typography, CardContent, Stack, Grid, Button, Container } from '@mui/material';
// map
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import Image from '../components/Image';
import SvgIconStyle from '../components/SvgIconStyle';
// utills
import { fDate } from '../utils/formatTime';

// routes

// ----------------------------------------------------------------------

// const SORT_OPTIONS = [
//   { value: 'latest', label: 'Latest' },
//   { value: 'popular', label: 'Popular' },
//   { value: 'oldest', label: 'Oldest' },
// ];

// // ----------------------------------------------------------------------

// const applySort = (places, sortBy) => {
//   if (sortBy === 'latest') {
//     return orderBy(places, ['createdAt'], ['desc']);
//   }
//   if (sortBy === 'oldest') {
//     return orderBy(places, ['createdAt'], ['asc']);
//   }
//   if (sortBy === 'popular') {
//     return orderBy(places, ['view'], ['desc']);
//   }
//   return places;
// };
HomePage.propTypes = {

  index: PropTypes.number,

};
export default function HomePage({ index }) {
  const { themeStretch } = useSettings();

  const [places, setPlaces] = useState([]);

  const [filters, setFilters] = useState('latest');
  const latestPostLarge = index === 0;
  const latestPostSmall = index === 1 || index === 2;
  const linkTo = '/';


  const [viewMap, setViewMap] = useState(false)

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zYW11bCIsImEiOiJjbDFuYTc2NDMwYWRlM29wZzRqbTVqaDVrIn0.7-I9jUfnZ2TagYEF491H8g'

  useEffect(() => {
    createPlaces();
  }, []);
  const createPlaces = () => {
    const places = [
      {
        id: 0,
        placeName: 'The Pearl',
        img: 'https://thepearlqatar.com/-/media/Thepearlqatar/ExploreTheIsland2019/QQ-2.jpg',
      },
      {
        id: 1,
        placeName: 'Souq Waqif',
        img: 'http://cdn.cnn.com/cnnnext/dam/assets/180122165928-souq-waqif--by-dimitris-sideridis.jpg',
      },
      {
        id: 2,
        placeName: 'Musherib',
        img: 'https://www.myholidays.com/blog/content/images/2021/04/Why-Visit-Msheireb-Downtown-Doha.jpg',
      },
      {
        id: 3,
        placeName: 'Lusail',
        img: 'https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/Lusail-in-Qatar1.jpg',
      },
      {
        id: 4,
        placeName: 'Katara',
        img: 'https://www.accessibleqatar.com/wp-content/uploads/2016/05/katara_photo_big_2.jpg',
      },
      {
        id: 5,
        placeName: 'Cournish',
        img: 'https://lp-cms-production.imgix.net/2019-06/f868443201b1370e5faa91e332e47ef8-al-corniche.jpg',
      },
    ];
    setPlaces(places);
  };
  return (
    <Page title="Home Page">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Button onClick={() => setViewMap(!viewMap)}>View Map</Button>
        <Grid container spacing={3}>
          <Grid key="map" item hidden={!viewMap} xs={12}>
            tis i, de map
            <Map
              initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
              }}
              style={{ width: 600, height: 400 }}
              mapStyle="mapbox://styles/mapbox/streets-v9?access_token=sk.eyJ1IjoiY2FybG9zYW11bCIsImEiOiJjbDFuYWJtZmQwN2U4M2xzMHZ6bWJ6NXVxIn0.Dir6AiSvYeuJjslEyCXcfQ"
            />
          </Grid>
          {places.map((place, index) => (
            <Grid key={place.id} item xs={12} sm={6} md={4}>
              <Card>
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
                      color: 'primary',
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
