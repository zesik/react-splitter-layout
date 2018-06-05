import React from "react";
import PropTypes from "prop-types";
import Pane from "./Pane";
import "../stylesheets/index.css";

function clearSelection() {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    document.selection.empty();
  }
}

const DEFAULT_SPLITTER_SIZE = 6;

class SplitterLayout extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleSplitterMouseDown = this.handleSplitterMouseDown.bind(this);
    this.SplitterButton = this.SplitterButton.bind(this);
    this.state = {
      secondaryPaneSize: 0,
      resizing: false,

      cursorAllowed: true,
      SplitterHide: false,
      lastX: "",
      lastY: "",
      handleBarClonePosition: "",
      isVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    document.addEventListener("mouseup", this.handleMouseUp);
    document.addEventListener("mousemove", this.handleMouseMove);

    let secondaryPaneSize;
    if (typeof this.props.secondaryInitialSize !== "undefined") {
      secondaryPaneSize = this.props.secondaryInitialSize;
    } else {
      const containerRect = this.container.getBoundingClientRect();
      let splitterRect;

      if (this.splitter) {
        splitterRect = this.splitter.getBoundingClientRect();
      } else {
        // Simulate a splitter
        splitterRect = {
          width: DEFAULT_SPLITTER_SIZE,
          height: DEFAULT_SPLITTER_SIZE
        };
      }
      secondaryPaneSize = this.getSecondaryPaneSize(
        containerRect,
        splitterRect,
        {
          left:
            containerRect.left + (containerRect.width - splitterRect.width) / 2,
          top:
            containerRect.top + (containerRect.height - splitterRect.height) / 2
        },
        false
      );
    }

    this.setState({ secondaryPaneSize });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.secondaryPaneSize !== this.state.secondaryPaneSize &&
      this.props.onSecondaryPaneSizeChange
    ) {
      this.props.onSecondaryPaneSizeChange(this.state.secondaryPaneSize);
    }
    if (prevState.resizing !== this.state.resizing) {
      if (this.state.resizing) {
        if (this.props.onDragStart) {
          this.props.onDragStart();
        }
      } else if (this.props.onDragEnd) {
        this.props.onDragEnd();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("mouseup", this.handleMouseUp);
    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  getSecondaryPaneSize(
    containerRect,
    splitterRect,
    clientPosition,
    offsetMouse
  ) {
    let totalSize;
    let splitterSize;
    let offset;

    if (this.props.vertical) {
      totalSize = containerRect.height;
      splitterSize = splitterRect.height;
      offset = clientPosition.top - containerRect.top;
    } else {
      totalSize = containerRect.width;
      splitterSize = splitterRect.width;
      offset = clientPosition.left - containerRect.left;
    }
    if (offsetMouse) {
      offset -= splitterSize / 2;
    }
    if (offset < 0) {
      offset = 0;
    } else if (offset > totalSize - splitterSize) {
      offset = totalSize - splitterSize;
    }

    let secondaryPaneSize;
    if (this.props.primaryIndex === 1) {
      secondaryPaneSize = offset;
    } else {
      secondaryPaneSize = totalSize - splitterSize - offset;
    }
    let primaryPaneSize = totalSize - splitterSize - secondaryPaneSize;
    if (this.props.percentage) {
      secondaryPaneSize = secondaryPaneSize * 100 / totalSize;
      primaryPaneSize = primaryPaneSize * 100 / totalSize;
      splitterSize = splitterSize * 100 / totalSize;
      totalSize = 100;
    }

    if (primaryPaneSize < this.props.primaryMinSize) {
      secondaryPaneSize = Math.max(
        secondaryPaneSize - (this.props.primaryMinSize - primaryPaneSize),
        0
      );
    } else if (secondaryPaneSize < this.props.secondaryMinSize) {
      secondaryPaneSize = Math.min(
        totalSize - splitterSize - this.props.primaryMinSize,
        this.props.secondaryMinSize
      );
    }

    return secondaryPaneSize;
  }

  handleMouseMove(e) {
    if (this.state.resizing) {
      let clientX;
      let clientY;
      clearSelection();
      const containerRect = this.container.getBoundingClientRect();
      const splitterRect = this.splitter.getBoundingClientRect();
      const secondaryPaneSize = this.getSecondaryPaneSize(
        containerRect,
        splitterRect,
        {
          left: e.clientX,
          top: e.clientY
        },
        true
      );
      console.log("secondaryPaneSize: ", secondaryPaneSize);
      clientX = e.clientX;
      clientY = e.clientY;
      this.setState({ secondaryPaneSize });

      if (this.props.postPoned) {
        this.setState({
          handleBarClonePosition: secondaryPaneSize,
          lastX: clientX,
          lastY: clientY,
          isVisible: true
        });
      } else {
        this.setState({
          secondaryPaneSize,
          lastX: clientX,
          lastY: clientY
        });
      }
    }
  }

  SplitterButton(e) {
    const { SplitterHide, cursorAllowed } = this.state;
    this.setState({
      cursorAllowed: !cursorAllowed,
      SplitterHide: !SplitterHide
    });
  }

  handleSplitterMouseDown(e) {
    clearSelection();
    if (!this.state.SplitterHide) {
      this.setState({ resizing: true });
    }
  }

  handleMouseUp() {
    const { secondaryPaneSize } = this.state;
    if (this.props.postPoned) {
      this.setState({
        isVisible: false,
        secondaryPaneSize
      });
    } else {
      this.setState({
        secondaryPaneSize
      });
    }
    this.setState({ resizing: false });
  }

  render() {
    const { handleBarClonePosition, SplitterHide } = this.state;
    const { postPoned } = this.props;

    let containerClasses = "splitter-layout";
    if (this.props.customClassName) {
      containerClasses += ` ${this.props.customClassName}`;
    }
    if (this.props.vertical) {
      containerClasses += " splitter-layout-vertical";
    }
    if (this.state.resizing) {
      if (!SplitterHide) {
        containerClasses += " layout-changing";
      }
    }
    if (!this.state.cursorAllowed) {
      containerClasses += this.props.vertical
        ? " row-resize-disable"
        : " col-resize-disable";
    }

    const children = React.Children.toArray(this.props.children).slice(0, 2);

    if (children.length === 0) {
      children.push(<div />);
    }

    let handlebarClone;
    if (React.Children.count(children) > 1 && postPoned) {
      handlebarClone = {
        [this.props.vertical ? "bottom" : "right"]:
          handleBarClonePosition + "px"
      };
    }

    const wrappedChildren = [];
    const primaryIndex =
      this.props.primaryIndex !== 0 && this.props.primaryIndex !== 1
        ? 0
        : this.props.primaryIndex;

    for (let i = 0; i < children.length; ++i) {
      let primary = true;
      let size = null;
      // if two pane work
      if (children.length > 1 && i !== primaryIndex) {
        primary = false;

        // SplitterHide == false
        if (!SplitterHide && !this.state.resizing) {
          size = this.state.secondaryPaneSize;
        }
        if (SplitterHide) {
          size = 0;
        }
        if (!postPoned && !SplitterHide && this.state.resizing) {
          size = this.state.secondaryPaneSize;
        }
      }

      wrappedChildren.push(
        <Pane
          vertical={this.props.vertical}
          percentage={this.props.percentage}
          primary={primary}
          size={size}
        >
          {children[i]}
        </Pane>
      );
    }

    return (
      <div
        className={containerClasses}
        ref={c => {
          this.container = c;
        }}
      >
        {wrappedChildren[0]}

        {wrappedChildren.length > 1 && (
          <div
            role="separator"
            className="layout-splitter"
            ref={c => {
              this.splitter = c;
            }}
            onMouseDown={this.handleSplitterMouseDown}
          >
            <div className="splitterButton" onClick={this.SplitterButton} />
          </div>
        )}

        {postPoned && this.state.isVisible ? (
          <div
            className={`layout-splitter layout-splitter_clone`}
            style={handlebarClone}
          />
        ) : null}

        {wrappedChildren.length > 1 && wrappedChildren[1]}
      </div>
    );
  }
}

SplitterLayout.propTypes = {
  customClassName: PropTypes.string,
  vertical: PropTypes.bool,
  percentage: PropTypes.bool,
  primaryIndex: PropTypes.number,
  primaryMinSize: PropTypes.number,
  secondaryInitialSize: PropTypes.number,
  secondaryMinSize: PropTypes.number,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  postPoned: PropTypes.bool,
  onSecondaryPaneSizeChange: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.node)
};

SplitterLayout.defaultProps = {
  customClassName: "",
  vertical: false,
  percentage: false,
  primaryIndex: 0,
  primaryMinSize: 0,
  secondaryInitialSize: undefined,
  secondaryMinSize: 0,
  onDragStart: null,
  onDragEnd: null,
  postPoned: false,
  onSecondaryPaneSizeChange: null,
  children: []
};

export default SplitterLayout;
