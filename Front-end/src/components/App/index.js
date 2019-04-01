/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import './app.scss';
import Header from 'src/containers/Header';

import Main from 'src/components/Main';

import Footer from 'src/components/Footer';


/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
