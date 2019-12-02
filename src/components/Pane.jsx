import React from 'react';
import PropTypes from 'prop-types';

function Pane(props) {
  const size = props.size || 0;
  const unit = props.percentage ? '%' : 'px';
  const hidden = props.hidden || false;
  let classes = 'layout-pane';
  const style = {};
  if (!props.primary) {
    if (hidden) {
      style.display = 'none';
    } else if (props.vertical) {
      style.height = `${size}${unit}`;
    } else {
      style.width = `${size}${unit}`;
    }
  } else {
    classes += ' layout-pane-primary';
  }
  return (
    <div className={classes} style={style}>{props.children}</div>
  );
}

Pane.propTypes = {
  vertical: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.number,
  hidden: PropTypes.bool,
  percentage: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Pane.defaultProps = {
  vertical: false,
  primary: false,
  size: 0,
  hidden: false,
  percentage: false,
  children: []
};

export default Pane;
