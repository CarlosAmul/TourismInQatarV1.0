/* eslint react/style-prop-object: 0 */

// map
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function QMap() {
    const qatar = [51.47, 25.3]
    const pearl = [51.55148, 25.36875];
    const souq = [51.53280, 25.28840]

    // const geojson = {
    //     type: 'FeatureCollection',
    //     features: [
    //         {
    //             type: 'Feature',
    //             geometry:
    //             {
    //                 type: 'Point',
    //                 coordinates: pearl
    //             }
    //         },
    //         {
    //             type: 'Feature',
    //             geometry:
    //             {
    //                 type: 'Point',
    //                 coordinates: souq
    //             }
    //         }
    //     ]
    // };

    // const layerStyle = {
    //     id: 'point',
    //     type: 'circle',
    //     paint: {
    //         'circle-radius': 10,
    //         'circle-color': '#007cbf'
    //     }
    // };

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiY2FybG9zYW11bCIsImEiOiJjbDFuYTc2NDMwYWRlM29wZzRqbTVqaDVrIn0.7-I9jUfnZ2TagYEF491H8g'
    });
    return (<Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '50vh',
            width: '75vw'
        }}
        center={qatar}
        zoom={7.5}
    >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
    </Map>)

    // return (<Map
    //     initialViewState={{
    //         longitude: 51.47,
    //         latitude: 25.3,
    //         zoom: 7.5
    //     }}
    //     style={{ width: 'auto', height: 400 }}
    //     mapStyle="mapbox://styles/mapbox/streets-v9?access_token=sk.eyJ1IjoiY2FybG9zYW11bCIsImEiOiJjbDFuYWJtZmQwN2U4M2xzMHZ6bWJ6NXVxIn0.Dir6AiSvYeuJjslEyCXcfQ"
    // >
    //     <Source id="my-data" type="geojson" data={geojson}>
    //         <Layer {...layerStyle} />
    //     </Source>
    // </Map>)
}