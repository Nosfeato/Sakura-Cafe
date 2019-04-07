
import React from 'react';

import { withCookies } from 'react-cookie';


import './onoffswitch.scss';

class OnOffSwitch extends React.Component {

  state = {
    checked: this.props.cookies.get('animation') === 'true' ? true : false,
  }

  changeCookieValue = () => {
    const { cookies } = this.props;
    const animation = cookies.get('animation');
    console.log(animation);
    if (animation === 'true') {
      cookies.remove('animation');
      cookies.set('animation', false, { path: '/' });
      this.setState({ checked: false });
    }
    else if (animation === 'false') {
      cookies.remove('animation');
      cookies.set('animation', true, { path: '/' });
      this.setState({ checked: true });
    }
  }

  render() {
    return (
      <div className="onoffswitch">
        <input type="checkbox" name="onoffswitch" checked={this.state.checked} className="onoffswitch__checkbox" id="myonoffswitch" onChange={this.changeCookieValue} />
        <label id="animation__selector" className="onoffswitch__label" htmlFor="myonoffswitch">
          <span className="onoffswitch__inner" />
          <span className="onoffswitch__switch" />
        </label>
        <p id="animation__text">Animation</p>
      </div>
    );
  }
}


export default withCookies(OnOffSwitch);
