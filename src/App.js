import React, { useEffect, useContext } from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = React.lazy(() => import("./container/Layout"));

const App = () => {
  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("isLoggedIn"))) {
      sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
    }
  }, []);

  return (
    <div className='app'>
      <HashRouter>
        <React.Suspense fallback='loading...'>
          <Switch>
            <Route path='/' name='Layout' render={() => <Layout />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </div>
  );
};

export default App;
