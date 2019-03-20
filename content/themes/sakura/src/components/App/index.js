/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import './app.scss';
// import Article from 'src/components/Article/Article';
// import News from 'src/components/News/News';
import Header from 'src/components/Header/Header';
import News from 'src/components/News/News';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <div id="nav">
    </div>
    <div id="news">
      <News />
    </div>
  </div>
);

/**
 * Export
 */
export default App;
