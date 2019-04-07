import React from 'react';
import PropTypes from 'prop-types';


const Username = ({ username }) => (
  <>
    <button id="status" className="session__info__button" type="button">{username}</button>
  </>
);

export default Username;
