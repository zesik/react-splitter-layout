/* eslint import/no-extraneous-dependencies: [0] */
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import StandardHorizontalLayout from './components/StandardHorizontalLayout';
import StandardVerticalLayout from './components/StandardVerticalLayout';
import LayoutWithMinimalSize from './components/LayoutWithMinimalSize';
import PercentageLayout from './components/PercentageLayout';
import NestedLayout from './components/NestedLayout';
import TogglableSidebarLayout from './components/TogglableSidebarLayout';
import HorizontalLayoutWithEvents from './components/HorizontalLayoutWithEvents';
import HorizontalLayoutWithIFrame from './components/HorizontalLayoutWithIFrame';
import '../../lib/index.css';
import '../stylesheets/index.css';

function NoMatch() {
  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <p>Please one of links on the left.</p>
    </div>
  );
}

render(
  <HashRouter>
    <App>
      <Switch>
        <Route exact path="/" />
        <Route path="/standard-horizontal" component={StandardHorizontalLayout} />
        <Route path="/standard-vertical" component={StandardVerticalLayout} />
        <Route path="/minimal-size" component={LayoutWithMinimalSize} />
        <Route path="/percentage" component={PercentageLayout} />
        <Route path="/nested" component={NestedLayout} />
        <Route path="/sidebar" component={TogglableSidebarLayout} />
        <Route path="/events" component={HorizontalLayoutWithEvents} />
        <Route path="/iframe" component={HorizontalLayoutWithIFrame} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </App>
  </HashRouter>,
  document.getElementById('root')
);
