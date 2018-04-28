# react-splitter-layout

[![Travis](https://img.shields.io/travis/zesik/react-splitter-layout.svg)](https://travis-ci.org/zesik/react-splitter-layout)
[![Coveralls](https://img.shields.io/coveralls/zesik/react-splitter-layout.svg)](https://coveralls.io/github/zesik/react-splitter-layout)
[![npm](https://img.shields.io/npm/v/react-splitter-layout.svg)](https://www.npmjs.com/package/react-splitter-layout)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/zesik/react-splitter-layout/master/LICENSE)
[![David devDependencies](https://img.shields.io/david/dev/zesik/react-splitter-layout.svg)](https://david-dm.org/zesik/react-splitter-layout?type=dev)
[![David peerDependencies](https://img.shields.io/david/peer/zesik/react-splitter-layout.svg)](https://david-dm.org/zesik/react-splitter-layout?type=peer)

A simple split layout for React and modern browsers.

[Demo](https://zesik.com/react-splitter-layout/)

## Dependencies

React-splitter-layout depends on React and prop-types. See [package.json](package.json) for more details.

## Installation

```sh
$ npm install --save react-splitter-layout
```

## Testing

To run tests, execute `test` command with `npm`.

```sh
$ npm test
```

To run coverage tests, execute `coverage` script with `npm`.

```sh
$ npm run coverage
```

## Integration

1. Add `react-splitter-layout` dependency to your code.

    ```sh
    $ npm install --save react-splitter-layout
    ```

2. Include the library into your code and use it.

    ```javascript
    import React from 'react';
    import SplitterLayout from 'react-splitter-layout';

    class YourComponent extends React.Component {
      render() {
        return (
          <SplitterLayout>
            <div>Pane 1</div>
            <div>Pane 2</div>
          </SplitterLayout>
        );
      }
    }

    export default YourComponent;
    ```

## Usage

Write two parts of the layout as direct children of your `SplitterLayout` element.
`SplitterLayout` renders the first 2 direct children only if it has more than 2 direct children.
`SplitterLayout` does not render splitter when it has only 1 direct children,
and the only direct children occupies all available space.

The `SplitterLayout` component supports the following props.

* `customClassName: PropTypes.string`

    Custom CSS class name applied to the layout `div`. You can use this to customize layout style.
    Refers to the [original stylesheet](src/stylesheets/index.css) to see what you can customize.

* `vertical: PropTypes.bool`

    Determine whether the layout should be a horizontal split or a vertical split. The default value is `false`.

* `percentage: PropTypes.bool`

    Determine whether the width of each pane should be calculated in percentage or by pixels.
    The default value is `false`, which means width is calculated in pixels.

* `primaryIndex: PropTypes.number`

    Index of the *primary pane*. Since `SplitterLayout` supports at most 2 children, only `0` or `1` is allowed.
    The default value is `0`.

    A *primary pane* is used to show users primary content, while a *secondary pane* is the other pane.
    When window size changes and `percentage` is set to `false`,
    primary pane's size is flexible and secondary pane's size is kept unchanged.
    However, when the window size is not enough for showing both minimal primary pane and minimal secondary pane,
    the primary pane's size is served first.

* `primaryMinSize: PropTypes.number`

    Minimal size of primary pane. The default value is 0.

    When `percentage` is set to `false`, this value is pixel size (25 means 25px).
    When `percentage` is set to `true`, this value is percentage (25 means 25%).

* `secondaryMinSize: PropTypes.number`

    Minimal size of secondary pane.

* `secondaryInitialSize: PropTypes.number`

    Initial size of secondary pane when page loads.

    If this prop is not defined, `SplitterLayout` tries to split the layout with equal sizes.
    (Note: equal size may not apply when there are nested layouts.)

* `onDragStart: PropTypes.func`

    Called when dragging is started.

    No parameter will be passed to event handlers.

* `onDragEnd: PropTypes.func`

    Called when dragging finishes.

    No parameter will be passed to event handlers.

* `onSecondaryPaneSizeChange: PropTypes.func`

    Called when the size of secondary pane is changed.

    Event handlers will be passed with a single parameter of `number` type representing new size of secondary pane.
    When `percentage` is set to `false`, the value is in pixel size.
    When `percentage` is set to `true`, the value is in percentage.

## Release History

* 3.0.0
  * Add dragging and size change events.
  * Drop support of React earlier than 15.5.0.
  * 100% code coverage test!
* 0.2.1
  * Fix an incorrect layout when nesting a horizontal splitter inside a vertical one,
    and now root element of the splitter is absolutely positioned.
* 0.1.0
  * First proper release.

## License

[MIT](LICENSE)
