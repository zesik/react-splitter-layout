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
      <div style={{display: "flex",height: "100%",width: "100%",justifyContent: "space-between"}}>
        <div className="my-sidebar" style={{ flex: 1, height: "100%" }}>
          <ul>
            {['First View', 'Second View'].map(((li, idx) => (
              <li><a onClick={this.handleSidebarItemClick.bind(this, idx)}>{li}</a></li>
            )))}
          </ul>
        </div>
        <div style={{ flex: 4, height: "100%" }}>
          <SplitterLayout percentage secondaryInitialSize={this.state.activeIndex === 0 ? 25 : 75} vertical={true}>
            <div>
              <h2>1st Pane</h2>
              <Lorem title="1st Pane" />
            </div>
            <div>
              <h2>2nd Pane</h2>
              <Lorem title="2nd Pane" />
            </div>
          </SplitterLayout>
        </div>
      </div>
    );
  }
}
