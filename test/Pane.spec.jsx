import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Pane from '../src/components/Pane';

function setupPane(content, props) {
  props = props || {};
  const renderer = TestUtils.createRenderer();
  renderer.render(<Pane {...props}>{content}</Pane>);
  const output = renderer.getRenderOutput();
  return { props, output, renderer };
}

describe('Pane', () => {
  it('should render a Pane correctly', () => {
    const { output } = setupPane('test pane');
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('layout-pane');
    expect(output.props.style).toEqual({ width: '0px' });
    expect(output.props.children).toBe('test pane');
  });

  it('should render properties of a Pane correctly if requested', () => {
    const { output } = setupPane('test pane', { vertical: true, size: 2, percentage: true });
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('layout-pane');
    expect(output.props.style).toEqual({ height: '2%' });
    expect(output.props.children).toBe('test pane');
  });

  it('should render a primary Pane correctly if requested', () => {
    const { output } = setupPane('test pane', { primary: true, vertical: true, size: 2, percentage: true });
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('layout-pane layout-pane-primary');
    expect(output.props.style).toEqual({});
    expect(output.props.children).toBe('test pane');
  });
});
