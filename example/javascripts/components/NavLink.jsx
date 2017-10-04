/* eslint import/no-extraneous-dependencies: [0] */
import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <Link {...props} activeClassName="active" />
  );
}
