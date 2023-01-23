import React, { useState, useEffect } from 'react';
import { Card, Stack } from 'react-bootstrap';

const ListItem = ({ addFav, isActive, onSelect, place, isFavorite }) => {
  const { name, vicinity, rating, place_id } = place;

  return (
    <Card
      className={`mb-2 p-2 rounded-4 ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(place_id)}
    >
      <div className="d-flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQgN4sIUWyF7P-Y9SoVAAhd0hvPT6cUUVBA&usqp=CAU"
          className="thumbnail"
        />
        <div className="full-width py-3">
          <Stack direction="horizontal" gap={3}>
            <div className="fw-bolder">{name}</div>
            <div className="ms-auto">
              <i
                role="button"
                className={
                  isFavorite
                    ? 'bi bi-bookmark-fill bookmark-icon'
                    : 'bi bi-bookmark bookmark-icon'
                }
                onClick={() => addFav(place_id)}
              />
            </div>
          </Stack>
          <div className="smaller-text">
            <i className={'bi bi-star-fill rating-star'}>
              <span className="rating">{rating?.toFixed(1)}</span>
            </i>
            <i className="bi bi-dot">
              <a href="#">(reviews)</a>
            </i>
          </div>
          <div className="smaller-text">{vicinity}</div>
        </div>
      </div>
    </Card>
  );
};

export default ListItem;
