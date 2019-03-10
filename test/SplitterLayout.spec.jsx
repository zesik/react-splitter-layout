/* eslint prefer-spread: [0], react/no-array-index-key: [0], react/no-find-dom-node: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import SplitterLayout from '../src/components/SplitterLayout';
import Pane from '../src/components/Pane';

function render(length, props = {}) {
  const children = Array.apply(null, { length }).map((_, i) => <div key={i}>Child #{i}</div>);
  const renderer = new ShallowRenderer();
  renderer.render(<SplitterLayout {...props}>{children}</SplitterLayout>);
  return renderer.getRenderOutput();
}

function renderIntoDocument(length, props) {
  const children = Array.apply(null, { length }).map((_, i) => <div key={i}>Child #{i}</div>);
  const component = ReactTestUtils.renderIntoDocument(<SplitterLayout {...props}>{children}</SplitterLayout>);
  return component;
}

describe('SplitterLayout', () => {
  describe('rendering', () => {
    it('should render correctly when 2 children provided', () => {
      const output = render(2);
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('splitter-layout');
      expect(output.props.children.length).toBe(3);
      expect(output.props.children[0].type).toBe(Pane);
      expect(output.props.children[0].props.vertical).toBe(false);
      expect(output.props.children[0].props.primary).toBe(true);
      expect(output.props.children[0].props.percentage).toBe(false);
      expect(output.props.children[1].type).toBe('div');
      expect(output.props.children[1].props.className).toBe('layout-splitter');
      expect(output.props.children[2].type).toBe(Pane);
      expect(output.props.children[2].props.vertical).toBe(false);
      expect(output.props.children[2].props.primary).toBe(false);
      expect(output.props.children[2].props.percentage).toBe(false);
    });

    it('should render properties correctly if requested', () => {
      const output = render(2, {
        customClassName: 'custom-class',
        vertical: true,
        percentage: true,
        primaryIndex: 1
      });
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('splitter-layout custom-class splitter-layout-vertical');
      expect(output.props.children.length).toBe(3);
      expect(output.props.children[0].type).toBe(Pane);
      expect(output.props.children[0].props.vertical).toBe(true);
      expect(output.props.children[0].props.primary).toBe(false);
      expect(output.props.children[0].props.percentage).toBe(true);
      expect(output.props.children[1].type).toBe('div');
      expect(output.props.children[1].props.className).toBe('layout-splitter');
      expect(output.props.children[2].type).toBe(Pane);
      expect(output.props.children[2].props.vertical).toBe(true);
      expect(output.props.children[2].props.primary).toBe(true);
      expect(output.props.children[2].props.percentage).toBe(true);
    });

    it('should set the first children as primary if invalid primary index is provided', () => {
      const output = render(2, {
        primaryIndex: 5
      });
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('splitter-layout');
      expect(output.props.children.length).toBe(3);
      expect(output.props.children[0].type).toBe(Pane);
      expect(output.props.children[0].props.vertical).toBe(false);
      expect(output.props.children[0].props.primary).toBe(true);
      expect(output.props.children[0].props.percentage).toBe(false);
      expect(output.props.children[1].type).toBe('div');
      expect(output.props.children[1].props.className).toBe('layout-splitter');
      expect(output.props.children[2].type).toBe(Pane);
      expect(output.props.children[2].props.vertical).toBe(false);
      expect(output.props.children[2].props.primary).toBe(false);
      expect(output.props.children[2].props.percentage).toBe(false);
    });

    it('should render one child when nothing provided', () => {
      const output = render(0);
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('splitter-layout');
      expect(output.props.children.length).toBe(3);
      expect(output.props.children[0].type).toBe(Pane);
      expect(output.props.children[0].props.vertical).toBe(false);
      expect(output.props.children[0].props.primary).toBe(true);
      expect(output.props.children[0].props.percentage).toBe(false);
      expect(output.props.children[1]).toBe(false);
      expect(output.props.children[2]).toBe(false);
    });

    it('should render one child when only 1 child provided', () => {
      const output = render(1);
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('splitter-layout');
      expect(output.props.children.length).toBe(3);
      expect(output.props.children[0].type).toBe(Pane);
      expect(output.props.children[0].props.vertical).toBe(false);
      expect(output.props.children[0].props.primary).toBe(true);
      expect(output.props.children[0].props.percentage).toBe(false);
      expect(output.props.children[1]).toBe(false);
      expect(output.props.children[2]).toBe(false);
    });

    it('should render 2 children when more than 2 children provided', () => {
      const output = render(5);
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('splitter-layout');
      expect(output.props.children.length).toBe(3);
      expect(output.props.children[0].type).toBe(Pane);
      expect(output.props.children[0].props.vertical).toBe(false);
      expect(output.props.children[0].props.primary).toBe(true);
      expect(output.props.children[0].props.percentage).toBe(false);
      expect(output.props.children[1].type).toBe('div');
      expect(output.props.children[1].props.className).toBe('layout-splitter');
      expect(output.props.children[2].type).toBe(Pane);
      expect(output.props.children[2].props.vertical).toBe(false);
      expect(output.props.children[2].props.primary).toBe(false);
      expect(output.props.children[2].props.percentage).toBe(false);
    });
  });

  describe('sizing', () => {
    it('should get correct secondary pane size when horizontal, pixel sizing and first child as primary', () => {
      const component = {
        props: {
          vertical: false,
          percentage: false,
          primaryIndex: 0,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 4, height: 512 };
      const position = { left: 50, top: 200 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(972);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(970);
    });

    it('should get correct secondary pane size when vertical, pixel sizing and first child as primary', () => {
      const component = {
        props: {
          vertical: true,
          percentage: false,
          primaryIndex: 0,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 40, left: 0, width: 1024, height: 4 };
      const position = { left: 50, top: 200 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(310);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(308);
    });

    it('should get correct secondary pane size when horizontal, percentage sizing and first child as primary', () => {
      const component = {
        props: {
          vertical: false,
          percentage: true,
          primaryIndex: 0,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 4, height: 512 };
      const position = { left: 512, top: 128 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(49.8046875);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(49.609375);
    });

    it('should get correct secondary pane size when vertical, percentage sizing and first child as primary', () => {
      const component = {
        props: {
          vertical: true,
          percentage: true,
          primaryIndex: 0,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 512, height: 4 };
      const position = { left: 512, top: 128 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(74.609375);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(74.21875);
    });

    it('should get correct secondary pane size when horizontal, pixel sizing and second child as primary', () => {
      const component = {
        props: {
          vertical: false,
          percentage: false,
          primaryIndex: 1,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 4, height: 512 };
      const position = { left: 50, top: 200 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(48);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(50);
    });

    it('should get correct secondary pane size when vertical, pixel sizing and second child as primary', () => {
      const component = {
        props: {
          vertical: true,
          percentage: false,
          primaryIndex: 1,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 40, left: 0, width: 1024, height: 4 };
      const position = { left: 50, top: 200 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(198);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(200);
    });

    it('should get correct secondary pane size when horizontal, percentage sizing and second child as primary', () => {
      const component = {
        props: {
          vertical: false,
          percentage: true,
          primaryIndex: 1,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 4, height: 512 };
      const position = { left: 512, top: 128 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(49.8046875);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(50);
    });

    it('should get correct secondary pane size when vertical, percentage sizing and second child as primary', () => {
      const component = {
        props: {
          vertical: true,
          percentage: true,
          primaryIndex: 1,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 512, height: 4 };
      const position = { left: 512, top: 128 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(24.609375);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(25);
    });

    it('should adjust the pane size when exceeds limit', () => {
      const component = {
        props: {
          vertical: false,
          percentage: false,
          primaryIndex: 0,
          primaryMinSize: 0,
          secondaryMinSize: 0
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 4, height: 512 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, { left: -10, top: 200 }, true)).toBe(1020);
      expect(getSecondaryPaneSize(containerRect, splitterRect, { left: -10, top: 200 }, false)).toBe(1020);
      expect(getSecondaryPaneSize(containerRect, splitterRect, { left: 1050, top: 200 }, true)).toBe(0);
      expect(getSecondaryPaneSize(containerRect, splitterRect, { left: 1050, top: 200 }, false)).toBe(0);
    });

    it('should respect user setting of secondary pane minimal size', () => {
      const component = {
        props: {
          vertical: false,
          percentage: false,
          primaryIndex: 0,
          primaryMinSize: 0,
          secondaryMinSize: 200
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 4, height: 512 };
      const position = { left: 1024, top: 200 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(200);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(200);
    });

    it('should respect primary pane minimal size over secondary pane minimal size', () => {
      const component = {
        props: {
          vertical: false,
          percentage: false,
          primaryIndex: 0,
          primaryMinSize: 600,
          secondaryMinSize: 600
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 4, height: 512 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, { left: 500, top: 200 }, true)).toBe(420);
      expect(getSecondaryPaneSize(containerRect, splitterRect, { left: 500, top: 200 }, false)).toBe(420);
      expect(getSecondaryPaneSize(containerRect, splitterRect, { left: 900, top: 200 }, true)).toBe(420);
      expect(getSecondaryPaneSize(containerRect, splitterRect, { left: 900, top: 200 }, false)).toBe(420);
    });

    it('should respect primary pane minimal size over secondary pane minimal size when width is not enough', () => {
      const component = {
        props: {
          vertical: false,
          percentage: false,
          primaryIndex: 0,
          primaryMinSize: 1200,
          secondaryMinSize: 200
        }
      };
      const getSecondaryPaneSize = SplitterLayout.prototype.getSecondaryPaneSize.bind(component);
      const containerRect = { top: 0, left: 0, width: 1024, height: 512 };
      const splitterRect = { top: 0, left: 40, width: 4, height: 512 };
      const position = { left: 200, top: 200 };
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, true)).toBe(0);
      expect(getSecondaryPaneSize(containerRect, splitterRect, position, false)).toBe(0);
    });
  });

  describe('DOM', () => {
    afterEach(() => {
      document.body.createTextRange = undefined;
      window.getSelection = undefined;
      document.selection = undefined;
    });

    it('should add DOM event listeners when mounted', () => {
      const windowSpy = jest.spyOn(window, 'addEventListener');
      const documentSpy = jest.spyOn(document, 'addEventListener');
      const component = renderIntoDocument(2);
      expect(windowSpy).toBeCalledWith('resize', component.handleResize);
      expect(documentSpy).toBeCalledWith('mouseup', component.handleMouseUp);
      expect(documentSpy).toBeCalledWith('mousemove', component.handleMouseMove);
      windowSpy.mockRestore();
      documentSpy.mockRestore();
    });

    it('should remove DOM event listeners when unmounted', () => {
      const component = renderIntoDocument(2);
      const windowSpy = jest.spyOn(window, 'removeEventListener');
      const documentSpy = jest.spyOn(document, 'removeEventListener');
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(component).parentNode);
      expect(windowSpy).toBeCalledWith('resize', component.handleResize);
      expect(documentSpy).toBeCalledWith('mouseup', component.handleMouseUp);
      expect(documentSpy).toBeCalledWith('mousemove', component.handleMouseMove);
      windowSpy.mockRestore();
      documentSpy.mockRestore();
    });

    it('should set splitter reference when it is rendered', () => {
      const component = renderIntoDocument(2);
      expect(component.container).toBeTruthy();
      expect(component.splitter).toBeTruthy();
    });

    it('should not set splitter reference when it is not rendered', () => {
      const component = renderIntoDocument(1);
      expect(component.container).toBeTruthy();
      expect(component.splitter).toBeFalsy();
    });

    it('should set resizing state when dragging splitter', () => {
      const component = renderIntoDocument(2);
      expect(component.state.resizing).toBe(false);
      ReactTestUtils.Simulate.mouseDown(component.splitter);
      expect(component.state.resizing).toBe(true);
      document.simulateMouseUp();
      expect(component.state.resizing).toBe(false);
    });

    it('should set pane size when dragging splitter', () => {
      const component = renderIntoDocument(2);
      const fn = component.container.getBoundingClientRect;
      component.container.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 300 });
      ReactTestUtils.Simulate.mouseDown(component.splitter);
      document.simulateMouseMove(25, 30);
      expect(component.state.secondaryPaneSize).toBe(175);
      component.container.getBoundingClientRect = fn;
    });

    it('should keep secondary pane size when resizing', () => {
      const component = renderIntoDocument(2);
      const containerRectFn = component.container.getBoundingClientRect;
      const splitterRectFn = component.splitter.getBoundingClientRect;
      component.container.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 300 });
      component.splitter.getBoundingClientRect = () => ({ left: 100, top: 0, width: 4, height: 300 });
      window.resizeTo(200, 300);
      expect(component.state.secondaryPaneSize).toBe(96);
      component.container.getBoundingClientRect = containerRectFn;
      component.splitter.getBoundingClientRect = splitterRectFn;
    });

    it('should choose createTextRange() if available to clear selection when dragging requested', () => {
      const component = renderIntoDocument(2);
      const collapseFn = jest.fn();
      const selectFn = jest.fn();
      const emptyFn = jest.fn();
      const removeAllRangesFn = jest.fn();
      const selectionEmptyFn = jest.fn();

      document.body.createTextRange = () => ({ collapse: collapseFn, select: selectFn });
      window.getSelection = () => ({ empty: emptyFn, removeAllRanges: removeAllRangesFn });
      document.selection = { empty: selectionEmptyFn };

      ReactTestUtils.Simulate.mouseDown(component.splitter);
      expect(collapseFn).toHaveBeenCalledTimes(1);
      expect(selectFn).toHaveBeenCalledTimes(1);
      expect(emptyFn).not.toHaveBeenCalled();
      expect(removeAllRangesFn).not.toHaveBeenCalled();
      expect(selectionEmptyFn).not.toHaveBeenCalled();
    });

    it('should choose getSelection().empty() if available to clear selection when dragging requested', () => {
      const component = renderIntoDocument(2);
      const emptyFn = jest.fn();
      const removeAllRangesFn = jest.fn();
      const selectionEmptyFn = jest.fn();

      window.getSelection = () => ({ empty: emptyFn, removeAllRanges: removeAllRangesFn });
      document.selection = { empty: selectionEmptyFn };

      ReactTestUtils.Simulate.mouseDown(component.splitter);
      expect(emptyFn).toHaveBeenCalledTimes(1);
      expect(removeAllRangesFn).not.toHaveBeenCalled();
      expect(selectionEmptyFn).not.toHaveBeenCalled();
    });

    it('should choose getSelection().removeAllRanges() if available to clear selection when dragging requested', () => {
      const component = renderIntoDocument(2);
      const removeAllRangesFn = jest.fn();
      const selectionEmptyFn = jest.fn();

      window.getSelection = () => ({ removeAllRanges: removeAllRangesFn });
      document.selection = { empty: selectionEmptyFn };

      ReactTestUtils.Simulate.mouseDown(component.splitter);
      expect(removeAllRangesFn).toHaveBeenCalledTimes(1);
      expect(selectionEmptyFn).not.toHaveBeenCalled();
    });

    it('should choose getSelection() if available to clear selection when dragging requested', () => {
      const component = renderIntoDocument(2);
      const selectionEmptyFn = jest.fn();

      window.getSelection = () => ({});
      document.selection = { empty: selectionEmptyFn };

      ReactTestUtils.Simulate.mouseDown(component.splitter);
      expect(selectionEmptyFn).not.toHaveBeenCalled();
    });

    it('should choose selection.empty() if available to clear selection when dragging requested', () => {
      const component = renderIntoDocument(2);
      const selectionEmptyFn = jest.fn();

      document.selection = { empty: selectionEmptyFn };

      ReactTestUtils.Simulate.mouseDown(component.splitter);
      expect(selectionEmptyFn).toHaveBeenCalledTimes(1);
    });

    it('should trigger drag events when dragging starts and finishes', () => {
      const startFn = jest.fn();
      const endFn = jest.fn();
      const component = renderIntoDocument(2, { onDragStart: startFn, onDragEnd: endFn });
      expect(startFn).not.toHaveBeenCalled();
      expect(endFn).not.toHaveBeenCalled();
      ReactTestUtils.Simulate.mouseDown(component.splitter);
      expect(startFn).toHaveBeenCalledTimes(1);
      expect(endFn).not.toHaveBeenCalled();
      document.simulateMouseUp();
      expect(startFn).toHaveBeenCalledTimes(1);
      expect(endFn).toHaveBeenCalledTimes(1);
    });

    it('should trigger size change events when secondary pane size has been changed', () => {
      const fn = jest.fn();
      const component = renderIntoDocument(2, { secondaryInitialSize: 20, onSecondaryPaneSizeChange: fn });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(20);
      const rectFn = component.container.getBoundingClientRect;
      component.container.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 300 });
      ReactTestUtils.Simulate.mouseDown(component.splitter);
      document.simulateMouseMove(25, 30);
      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenCalledWith(175);
      component.container.getBoundingClientRect = rectFn;
    });

    it('should trigger drag events when touching starts and finishes', () => {
      const startFn = jest.fn();
      const endFn = jest.fn();
      const component = renderIntoDocument(2, { onDragStart: startFn, onDragEnd: endFn });
      expect(startFn).not.toHaveBeenCalled();
      expect(endFn).not.toHaveBeenCalled();
      ReactTestUtils.Simulate.touchStart(component.splitter);
      expect(startFn).toHaveBeenCalledTimes(1);
      expect(endFn).not.toHaveBeenCalled();
      document.simulateTouchEnd();
      expect(startFn).toHaveBeenCalledTimes(1);
      expect(endFn).toHaveBeenCalledTimes(1);
    });

    it('should trigger size change events when touching moves', () => {
      const fn = jest.fn();
      const component = renderIntoDocument(2, { secondaryInitialSize: 20, onSecondaryPaneSizeChange: fn });
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(20);
      const rectFn = component.container.getBoundingClientRect;
      component.container.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 300 });
      ReactTestUtils.Simulate.touchStart(component.splitter);
      document.simulateTouchMove(25, 30);
      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenCalledWith(175);
      component.container.getBoundingClientRect = rectFn;
    });

    it('should initialize horizontal secondary size if requested even when splitter is not rendered', () => {
      const component = renderIntoDocument(2, { secondaryInitialSize: 20 });
      expect(component.state.secondaryPaneSize).toBe(20);
    });

    it('should initialize vertical secondary size if requested even when splitter is not rendered', () => {
      const component = renderIntoDocument(2, { secondaryInitialSize: 20, vertical: true });
      expect(component.state.secondaryPaneSize).toBe(20);
    });
  });
});
