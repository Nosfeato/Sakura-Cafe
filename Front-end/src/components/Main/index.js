
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import News from 'src/containers/News';
import Products from 'src/containers/Products';
import Map from 'src/components/Main/Map';

import LegalMentions from 'src/components/Footer/LegalMentions';
import Producers from 'src/components/Footer/Producers';

import Cart from 'src/components/Header/Cart';
import SignIn from 'src/containers/SignIn';
import SignUp from 'src/containers/SignUp';

import 'src/components/Main/main.scss';

const Main = () => (
  <main>
    <Switch>

      {/* News */}
      <Route exact path="/" component={News} />

      {/* Products */}
      <Route exact path="/products" component={Products} />

      {/* Map */}
      <Route exact path="/map" component={Map} />

      {/* Sign-in */}
      <Route exact path="/sign-in" component={SignIn} />

      {/* Register */}
      <Route exact path="/sign-up" component={SignUp} />

      {/* Cart */}
      <Route exact path="/cart" component={Cart} />

      {/* LegalMentions */}
      <Route exact path="/legal-mentions" component={LegalMentions} />

      {/* Producers */}
      <Route exact path="/producers" component={Producers} />

    </Switch>
  </main>

);

/**
 * Export
 */
export default Main;
