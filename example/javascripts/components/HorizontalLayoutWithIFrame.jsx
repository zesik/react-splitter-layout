import React from 'react';
import SplitterLayout from '../../../index';

export default class HorizontalLayoutWithIFrame extends React.Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      dragging: false
    };
  }

  onDragStart() {
    this.setState({ dragging: true });
  }

  onDragEnd() {
    this.setState({ dragging: false });
  }

  renderDetailLinks() {
    return (
      <p>
        Refer to the following pages for details:
        <ul>
          <li>
            <a
              href="https://github.com/zesik/react-splitter-layout/blob/master/example/javascripts/components/HorizontalLayoutWithIFrame.jsx"
            >
              Source code of this page
            </a>
          </li>
          <li>
            <a href="https://github.com/zesik/react-splitter-layout/issues/7">
              Another way
            </a>
          </li>
        </ul>
      </p>
    );
  }

  render() {
    return (
      <SplitterLayout onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <div className="my-pane">
          <h2>1st Pane</h2>
          <p>
            This is the 1st pane, and this is the primary pane by default.
            The 2nd pane on the right contains an <code>iframe</code> from <code>https://example.com</code>.
            A simple hack is used so that dragging is not interfered.
          </p>
          {this.renderDetailLinks()}
        </div>
        <div className="my-iframe">
          {this.state.dragging && <div className="my-iframe-overlay" />}
          <iframe src="https://example.com" title="example-iframe" />
        </div>
      </SplitterLayout>
    );
  }
}
