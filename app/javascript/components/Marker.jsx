import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Marker = (place) => (
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip id="button-tooltip-2">{place.name}</Tooltip>}
  >
    <i
      style={{ fontSize: '24px', color: '#656E5E' }}
      className="bi bi bi-geo-alt-fill"
    />
  </OverlayTrigger>
);

export default Marker;
