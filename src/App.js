import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home';
import ProductReviews from './Components/ProductReviews';

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
		<Route exact path="/product/0">
            <ProductReviews />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
