import React from 'react';

function Pane(props) {
  const size = props.size || 0;
  const unit = props.percentage ? '%' : 'px';
  let classes = 'layout-pane';
  const style = {};
  if (!props.primary) {
    if (props.vertical) {
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
  vertical: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  size: React.PropTypes.number,
  percentage: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

Pane.defaultProps = {
  vertical: false,
  primary: false,
  size: 0,
  percentage: false,
  children: []
};

export default Pane;
