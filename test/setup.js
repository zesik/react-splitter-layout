import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = jsdom.window;
global.document = window.document;

document.simulateMouseUp = () => {
  document.dispatchEvent(new MouseEvent('mouseup'));
};

document.simulateMouseMove = (clientX, clientY) => {
  document.dispatchEvent(new MouseEvent('mousemove', { clientX, clientY }));
};

window.resizeTo = (width, height) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event('resize'));
};
