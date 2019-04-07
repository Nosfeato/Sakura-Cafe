import React from 'react';
import PropTypes from 'prop-types';


const Status = ({ status }) => (
  <>
    <button id="status" className="session__info__button" type="button">{status}</button>
  </>
);

export default Status;
