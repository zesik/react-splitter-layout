import React from "react";
import SplitterLayout from "../../../index";
import Lorem from "./Lorem";

export default class TogglableSidebarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      activeIndex: 0,
      sidebarVisible: true,
    };
  }

  toggleSidebar() {
    this.setState((state) => ({ sidebarVisible: !state.sidebarVisible }));
  }

  handleSidebarItemClick(newVal) {
    this.setState((state) => ({ activeIndex: newVal }));
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          // gridTemplateAreas: "s b b b b b",
          // gridTemplateColumns: "1fr",
          // gridTemplateRows: "auto",
          height: "100%",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <div className="my-sidebar" style={{ flex: 1, height: "100%" }}>
          <ul>
            <li>
              <a onClick={this.handleSidebarItemClick.bind(this, 0)}>
                First View
              </a>
            </li>
            <li>
              <a onClick={this.handleSidebarItemClick.bind(this, 1)}>
                Second View
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: 4, height: "100%" }}>
          <SplitterLayout
            percentage
            secondaryInitialSize={this.state.activeIndex === 0 ? 25 : 75}
            vertical={true}
          >
            <div>
              <h2>1st Pane</h2>
              <p>
                This is the 1st pane, and this is the primary pane by default.
              </p>

              <pre>
                &lt;SplitterLayout primaryIndex={"{0}"}&gt;{"\n"}
                &nbsp;&nbsp;<strong>&lt;div&gt;1st&lt;/div&gt;</strong>
                {"\n"}
                {this.state.sidebarVisible && "  <div>2nd</div>\n"}
                &lt;/SplitterLayout&gt;
              </pre>
              <Lorem title="1st Pane" />
            </div>
            <div>
              <h2>2nd Pane</h2>
              <p>This is the 2nd pane, considered as a sidebar.</p>
              <pre>
                &lt;SplitterLayout primaryIndex={"{0}"}&gt;{"\n"}
                &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{"\n"}
                &nbsp;&nbsp;<strong>&lt;div&gt;2nd&lt;/div&gt;</strong>
                {"\n"}
                &lt;/SplitterLayout&gt;
              </pre>
              <Lorem title="2nd Pane" />
            </div>
          </SplitterLayout>
        </div>
      </div>
    );
  }
}
