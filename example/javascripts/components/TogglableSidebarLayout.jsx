import React from 'react';
import SplitterLayout from '../../../index';
import Lorem from './Lorem';

export default class TogglableSidebarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      sidebarVisible: true
    };
  }

  toggleSidebar() {
    this.setState(state => ({ sidebarVisible: !state.sidebarVisible }));
  }

  render() {
    return (
      <SplitterLayout percentage secondaryInitialSize={25}>
        <div className="my-pane">
          <h2>1st Pane</h2>
          <p>This is the 1st pane, and this is the primary pane by default.</p>
          <button type="button" onClick={this.toggleSidebar}>
            {this.state.sidebarVisible && 'Hide Sidebar'}
            {!this.state.sidebarVisible && 'Show Sidebar'}
          </button>
          <pre>
            &lt;SplitterLayout primaryIndex={'{0}'}&gt;{'\n'}
            &nbsp;&nbsp;<strong>&lt;div&gt;1st&lt;/div&gt;</strong>{'\n'}
            {this.state.sidebarVisible && '  <div>2nd</div>\n'}
            &lt;/SplitterLayout&gt;
          </pre>
          <Lorem title="1st Pane" />
        </div>
        {this.state.sidebarVisible &&
          (
            <div className="my-pane">
              <h2>2nd Pane</h2>
              <p>This is the 2nd pane, considered as a sidebar.</p>
              <pre>
                &lt;SplitterLayout primaryIndex={'{0}'}&gt;{'\n'}
                &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;<strong>&lt;div&gt;2nd&lt;/div&gt;</strong>{'\n'}
                &lt;/SplitterLayout&gt;
              </pre>
              <Lorem title="2nd Pane" />
            </div>
          )
        }
      </SplitterLayout>
    );
  }
}
