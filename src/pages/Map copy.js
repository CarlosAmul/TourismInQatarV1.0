/* eslint react/style-prop-object: 0 */

// map
import ReactMapboxGl, {
    Layer, Feature, Marker, Popup,
} from 'react-mapbox-gl'
import { useEffect, useCallback, useState, useMemo } from 'react';
import {render} from 'react-dom';
import { BsPinFill } from "react-icons/bs";
import 'mapbox-gl/dist/mapbox-gl.css';
import places from './places.json'

export default function QMap() {
    const qatar = [51.47, 25.3]
    const pearl = [51.55148, 25.36875];
    const souq = [51.53280, 25.28840]

    const [showPopup, setShowPopup] = useState(false)
    const [popupInfo, setPopupInfo] = useState(null)

    const pins = useMemo(
        () =>
            places.map((place, index) => (
                <Marker key={place.name} coordinates={place.coordinates} anchor="bottom" >
                    <BsPinFill color="red" size={23} onClick={() => setPopupInfo(place)} />
                </Marker>
            )), [])

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiY2FybG9zYW11bCIsImEiOiJjbDFuYTc2NDMwYWRlM29wZzRqbTVqaDVrIn0.7-I9jUfnZ2TagYEF491H8g'
    });
    return (<Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '50vh',
            width: '60vw'
        }}
        center={[51.52556, 25.35926]}
        zoom={[10]}
    >

        {pins}

        {popupInfo && (
            <Popup
                anchor="top"
                coordinates={popupInfo.coordinates}
                onClick={() => setPopupInfo(null)}
                // onClose={() => setPopupInfo(null)}
            >
                <div>
                    {popupInfo.name}
                </div>
                {/* <img width="100%" src={popupInfo.image} /> */}
            </Popup>
        )}
    </Map>)
}

export function renderToDom(container) {
    render(<QMap />, container);
}