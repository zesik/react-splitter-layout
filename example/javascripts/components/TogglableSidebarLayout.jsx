import React from 'react';
import SplitterLayout from '../../../index';
import Lorem from './Lorem';

export default class TogglableSidebarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleUseSecondaryHidden = this.toggleUseSecondaryHidden.bind(this);
    this.state = {
      sidebarVisible: true,
      useSecondaryHidden: false
    };
  }

  toggleSidebar() {
    this.setState(state => ({ sidebarVisible: !state.sidebarVisible }));
  }

  toggleUseSecondaryHidden() {
    this.setState(state => ({ useSecondaryHidden: !state.useSecondaryHidden }));
  }

  render() {
    return (
      <SplitterLayout
        percentage
        secondaryInitialSize={25}
        secondaryHidden={this.state.useSecondaryHidden ? !this.state.sidebarVisible : undefined}
      >
        <div className="my-pane">
          <h2>1st Pane</h2>
          <p>This is the 1st pane, and this is the primary pane by default.</p>
          <button type="button" onClick={this.toggleSidebar}>
            {this.state.sidebarVisible && 'Hide Sidebar'}
            {!this.state.sidebarVisible && 'Show Sidebar'}
          </button>
          <button type="button" style={{ marginLeft: 16 }} onClick={this.toggleUseSecondaryHidden}>
            {this.state.useSecondaryHidden && 'Use secondaryHidden prop to hide secondary pane'}
            {!this.state.useSecondaryHidden && 'Use conditional rendering to hide secondary pane'}
          </button>
          {!this.state.useSecondaryHidden && (
            <pre>
              &lt;SplitterLayout primaryIndex={'{0}'}&gt;{'\n'}
              &nbsp;&nbsp;<strong>&lt;div&gt;1st&lt;/div&gt;</strong>{'\n'}
              {this.state.sidebarVisible && '  <div>2nd</div>\n'}
              &lt;/SplitterLayout&gt;
            </pre>
          )}
          {this.state.useSecondaryHidden && (
            <pre>
              &lt;SplitterLayout primaryIndex={'{0}'} secondaryHidden={`{${!this.state.sidebarVisible}}`}&gt;{'\n'}
              &nbsp;&nbsp;<strong>&lt;div&gt;1st&lt;/div&gt;</strong>{'\n'}
              {'  <div>2nd</div>\n'}
              &lt;/SplitterLayout&gt;
            </pre>
          )}

          <Lorem title="1st Pane" />
        </div>
        {(this.state.sidebarVisible || this.state.useSecondaryHidden) && (
          <div className="my-pane">
            <h2>2nd Pane</h2>
            <p>This is the 2nd pane, considered as a sidebar.</p>
            {!this.state.useSecondaryHidden && (
              <pre>
                &lt;SplitterLayout primaryIndex={'{0}'}&gt;{'\n'}
                &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;<strong>&lt;div&gt;2nd&lt;/div&gt;</strong>{'\n'}
                &lt;/SplitterLayout&gt;
              </pre>
            )}
            {this.state.useSecondaryHidden && (
              <pre>
                &lt;SplitterLayout primaryIndex={'{0}'} secondaryHidden={`{${!this.state.sidebarVisible}}`}&gt;{'\n'}
                &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
                &nbsp;&nbsp;<strong>&lt;div&gt;2nd&lt;/div&gt;</strong>{'\n'}
                &lt;/SplitterLayout&gt;
              </pre>
            )}
            <Lorem title="2nd Pane" />
          </div>
        )}
      </SplitterLayout>
    );
  }
}
