/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
import './app.scss';
// import Article from 'src/components/Article/Article';
// import News from 'src/components/News/News';
import Header from 'src/components/Header';
import News from 'src/components/News';
import Footer from 'src/components/Footer';
// import Products from 'src/components/Products';
// import Map from 'src/components/Map';
// import Product from 'src/components/Products/Product';


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



      </Switch>
    </main>
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
