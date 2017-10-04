import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Pane from '../src/components/Pane';

function render(content, props = {}) {
  const renderer = new ShallowRenderer();
  renderer.render(<Pane {...props}>{content}</Pane>);
  return renderer.getRenderOutput();
}

describe('Pane', () => {
  it('should render a Pane correctly', () => {
    const output = render('test pane');
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('layout-pane');
    expect(output.props.style).toEqual({ width: '0px' });
    expect(output.props.children).toBe('test pane');
  });

  it('should render properties of a Pane correctly if requested', () => {
    const output = render('test pane', { vertical: true, size: 2, percentage: true });
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('layout-pane');
    expect(output.props.style).toEqual({ height: '2%' });
    expect(output.props.children).toBe('test pane');
  });

  it('should render a primary Pane correctly if requested', () => {
    const output = render('test pane', { primary: true, vertical: true, size: 2, percentage: true });
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('layout-pane layout-pane-primary');
    expect(output.props.style).toEqual({});
    expect(output.props.children).toBe('test pane');
  });
});
