/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './map.scss';

class Map extends React.Component {


  componentDidMount() {
    const button = document.getElementById('map__load__button');
    button.addEventListener('click', this.loadMap);
  }

  loadDefault = () => {

    const jsxElements = (
      <>
        <span>To get the community map </span>
        <button id="map__button" type="button" onClick={this.loadMap}> Click Here </button>
      </>
    );

    document.getElementById('map').innerHTML = jsxElements;
  }

  loadMap = () => {
    const map = (
      <iframe
        title="sakura-tea-house-map"
        src="https://www.google.com/maps/d/embed?mid=1U4ejW1tzAcMLTCkgIxwAQnDiNVpVoEIu"
        width="640"
        height="480"
        onClick={this.loadDefault}
      />
    );
    document.getElementById('map').innerHTML = map;
  }

  render() {
    return (
      <div id="map">
        <span id="map__info">To check out the community map </span>
        <button id="map__load__button" type="button"> {'>> Click Here <<'} </button>
      </div>
    );
  }
}

export default Map;
