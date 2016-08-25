import React from 'react';
import NavLink from './NavLink';

export default function(props) {
  return (
    <div>
      <header>
        <h1>React Splitter Layout</h1>
        <p>A split layout for React and modern browsers.</p>
      </header>
      <div className="main">
        <nav className="navigation-bar">
          <ul className="navigation">
            <li><NavLink to="/standard-horizontal">Standard Horizontal</NavLink></li>
            <li><NavLink to="/standard-vertical">Standard Vertical</NavLink></li>
            <li><NavLink to="/minimal-size">Pane Minimal Size</NavLink></li>
            <li><NavLink to="/percentage">Width in Percentage</NavLink></li>
            <li><NavLink to="/nested">Nested Layout</NavLink></li>
            <li><NavLink to="/sidebar">Sidebar</NavLink></li>
          </ul>
        </nav>
        <div className="child-content">
          {props.children}
        </div>
      </div>
      <footer>Licensed under MIT</footer>
    </div>
  );
}
