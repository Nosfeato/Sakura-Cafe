/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './map.scss';
import image from 'src/img/map.gif';

/**
 * Code
 */

const Map = () => (
  <div id="map">
    <img src={image} alt="map" />
  </div>
);

export default Map;
