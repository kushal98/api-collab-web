import React from 'react';

import {
  Router,
  Route,
} from "react-router-dom";
import history from "./history/history";

import Pages from './routes/Pages';

function App() {
  return (
    // <Provider store = {store}>
      <Router history={history}>
        <Route component={Pages} />
      </Router>
    // </Provider>
  );
}

export default App;
