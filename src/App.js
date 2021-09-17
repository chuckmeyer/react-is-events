import React from 'react';
import './App.css';
import SearchPage from './SearchPage';
import ProductPage from './ProductPage';
import { Switch, Route } from 'react-router-dom';
import aa from 'search-insights';

aa('init', {
  appId: 'HYDY1KWTWB',
  apiKey: '28cf6d38411215e2eef188e635216508',
});

aa('setUserToken', 'chuckmeyer');

const App = () => {
  return (
    <Switch>
      <Route path="/products/:objectID">
        <ProductPage />
      </Route>
      <Route path="/">
        <SearchPage />
      </Route>
    </Switch>
  );
}

export default App;
