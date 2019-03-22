/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
import './app.scss';
import Header from 'src/components/Header';
import News from 'src/components/News';
import Footer from 'src/components/Footer';
import Products from 'src/components/Products';
import Map from 'src/components/Map';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';


/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
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

      </Switch>
    </main>
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
