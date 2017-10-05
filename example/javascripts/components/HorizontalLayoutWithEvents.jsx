/* eslint no-void: [0] */
import React from 'react';
import SplitterLayout from '../../../index';

export default class HorizontalLayoutWithEvents extends React.Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onSecondaryPaneSizeChange = this.onSecondaryPaneSizeChange.bind(this);
    this.state = {
      secondaryPaneSize: -1,
      dragging: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dragging !== this.state.dragging && this.draggingEl1 && this.draggingEl2) {
      this.draggingEl1.classList.add('highlight');
      this.draggingEl2.classList.add('highlight');
      void this.draggingEl1.offsetWidth;
      void this.draggingEl2.offsetWidth;
      this.draggingEl1.classList.remove('highlight');
      this.draggingEl2.classList.remove('highlight');
    }
    if (prevState.secondaryPaneSize !== this.state.secondaryPaneSize && this.sizeEl1 && this.sizeEl2) {
      this.sizeEl1.classList.add('highlight');
      this.sizeEl2.classList.add('highlight');
      void this.sizeEl1.offsetWidth;
      void this.sizeEl2.offsetWidth;
      this.sizeEl1.classList.remove('highlight');
      this.sizeEl2.classList.remove('highlight');
    }
  }

  onDragStart() {
    this.setState({ dragging: true });
  }

  onDragEnd() {
    this.setState({ dragging: false });
  }

  onSecondaryPaneSizeChange(secondaryPaneSize) {
    this.setState({ secondaryPaneSize });
  }

  render() {
    return (
      <SplitterLayout
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onSecondaryPaneSizeChange={this.onSecondaryPaneSizeChange}
      >
        <div className="my-pane">
          <h2>1st Pane</h2>
          <p>This is the 1st pane, and this is the primary pane by default.</p>
          <p>Dragging:
            <span className="volatile" ref={(e) => { this.draggingEl1 = e; }}>
              {this.state.dragging ? 'Yes' : 'No'}
            </span>
          </p>
          <p>Size of the 2nd pane:
            <span className="volatile" ref={(e) => { this.sizeEl1 = e; }}>
              {this.state.secondaryPaneSize}
            </span>
          </p>
        </div>
        <div className="my-pane">
          <h2>2nd Pane</h2>
          <p>This is the 2nd pane, and this is the secondary pane by default.</p>
          <p>Dragging:
            <span className="volatile" ref={(e) => { this.draggingEl2 = e; }}>
              {this.state.dragging ? 'Yes' : 'No'}
            </span>
          </p>
          <p>Size of this pane:
            <span className="volatile" ref={(e) => { this.sizeEl2 = e; }}>
              {this.state.secondaryPaneSize}
            </span>
          </p>
        </div>
      </SplitterLayout>
    );
  }
}
