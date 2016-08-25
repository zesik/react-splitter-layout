import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <Link {...props} activeClassName="active" />
  );
}
