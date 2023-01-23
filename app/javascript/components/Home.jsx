import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from './TopHeader';
import Map from './Map';
import ListItems from './ListItems';

export default () => {
  const [places, setPlaces] = useState([]);
  const [currentLocation, setLocation] = useState({});

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    fetchPlaces();
  }, [currentLocation]);

  const handleSearchChange = (search) => {
    fetchPlaces(search);
  };

  const fetchPlaces = async (search) => {
    const url = search
      ? `api/restaurant_search?search=${search}`
      : 'api/restaurant_search';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlaces(data));
  };

  // Get current user location
  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log('Not Available');
    }
  };

  return (
    <Container>
      <TopHeader onSearchChange={handleSearchChange} />
      <Row>
        <Col md="5" sm="12" xs="12">
          <ListItems places={places} />
        </Col>
        <Col md="7" sm="12" xs="12">
          <Map curentLocation={currentLocation} places={places} />
        </Col>
      </Row>
    </Container>
  );
};
