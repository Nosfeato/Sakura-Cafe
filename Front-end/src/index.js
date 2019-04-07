/**
 * NPM import
 */

import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

/**
 * Local import
 */
import App from 'src/components/App';

import store from 'src/store';

/**
 * Render
 */
// 1. Le composant racine à rendre (le tronc de l'arbre)
const rootComponent = (
  <CookiesProvider>
    <Provider store={store}>
      <Router basename="/">
        <Route component={App} />
      </Router>
    </Provider>
  </CookiesProvider>
);
// 2. La cible dans le DOM
const target = document.getElementById('root');

// rendu de react-dom : react VERS dom
render(rootComponent, target);
