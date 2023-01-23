import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

// TODO: move this to a config/env file.
const GOOGLE_MAP_API_KEY = '';

// TODO: move the map, find new center location, instead of using currentLocation
// TODO: listener to refetch data when the map location is moved.

const Map = ({ places }) => {
  const defaultProps = {
    center: {
      lat: 37.791104400970255,
      lng: -122.4060736093017,
    },
    zoom: 16,
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {places.map((place, idx) => (
          <Marker key={idx} lat={place.lat} lng={place.lng} {...place} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
