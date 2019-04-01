/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
class ArrowButton extends React.Component {

  onClick = (evt) => {
    const { changeSelection } = this.props;

    const id = evt.target.getAttribute('data-parent-id');
    const list = evt.target.getAttribute('data-list');
    const selection = Number(evt.target.getAttribute('data-selection'));

    if (evt.target.id === 'up_arrow' && selection !== 0) {
      const newValue = (selection - 1);
      changeSelection(newValue, id);
    }
    else if (evt.target.id === 'down_arrow' && list > selection) {
      const newValue = (selection + 1);
      console.log(newValue);
      changeSelection(newValue, id);
    }
  }

  selectArrowToRender = () => {
    const { selectedArrowModule, data, listLength, selection } = this.props;
    if (selectedArrowModule === 'up') {
      return (<button id="up_arrow" type="button" data-parent-id={data} data-list={listLength} data-selection={selection} onClick={this.onClick}>Up</button>);
    }
    if (selectedArrowModule === 'down') {
      return (<button id="down_arrow" type="button" data-parent-id={data} data-list={listLength} data-selection={selection} onClick={this.onClick}>Down</button>);
    }
  }

  render() {
    return (
      <>
        {this.selectArrowToRender()}
      </>
    );
  }
}


/**
 * Export
 */
export default ArrowButton;
