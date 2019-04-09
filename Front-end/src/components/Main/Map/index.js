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


  state = {
    defaultRender: true,
  }

  componentDidMount() {
    const button = document.getElementById('map__load__button');
    button.addEventListener('click', this.loadMap);
  }

  loadDefault = () => {
    this.setState({ defaultRender: true });
  }

  loadMap = () => {
    this.setState({ defaultRender: false });
  }

  render() {
    return (
      <div id="map">
        { this.state.defaultRender === false ? (
          <iframe
            id="sakura-map"
            title="sakura-tea-house-map"
            src="https://www.google.com/maps/d/embed?mid=1U4ejW1tzAcMLTCkgIxwAQnDiNVpVoEIu"
            onClick={this.loadDefault}
          />
        ) : (
          <>
            <span id="map__info"> To check out the community map </span>

            <button id="map__load__button" type="button" onClick={this.loadMap}> { '>>Click Here<< '} </button>
          </>
        )}
      </div>
    );
  }
}

export default Map;
