import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ListItem from './ListItem';

const ListItems = ({ places }) => {
  const [favorites, setFavorites] = useState([]);
  const [active, setActive] = useState();

  const handleFavorites = (placeId) => {
    let favArray = favorites;
    const foundIndex = favArray.indexOf(placeId);

    if (foundIndex >= 0) {
      favArray.splice(foundIndex, 1);
    } else {
      favArray.push(placeId);
    }
    setFavorites([...favArray]);
    localStorage.setItem('favorites', JSON.stringify(favArray));
  };

  return (
    <Container className="lists-wrapper">
      {places.map((place) => {
        const placeId = place.place_id;
        const isFav = favorites.includes(placeId);

        return (
          <ListItem
            addFav={handleFavorites}
            isActive={active === placeId}
            key={placeId}
            onSelect={setActive}
            place={place}
            favorites={favorites}
            isFavorite={isFav}
          />
        );
      })}
    </Container>
  );
};

export default ListItems;
