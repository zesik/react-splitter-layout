# react-splitter-layout

[![Build Status](https://travis-ci.org/zesik/react-splitter-layout.svg?branch=master)](https://travis-ci.org/zesik/react-splitter-layout)
[![Coverage Status](https://coveralls.io/repos/github/zesik/react-splitter-layout/badge.svg?branch=master)](https://coveralls.io/github/zesik/react-splitter-layout?branch=master)
[![npm version](https://badge.fury.io/js/react-splitter-layout.svg)](https://badge.fury.io/js/react-splitter-layout)
[![devDependency Status](https://david-dm.org/zesik/react-splitter-layout/dev-status.svg)](https://david-dm.org/zesik/react-splitter-layout#info=devDependencies)

A simple split layout for React and modern browsers.

[Demo](https://zesik.com/react-splitter-layout/)

## Dependencies

React-splitter-layout depends on React. See [package.json](package.json) for more details.

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

* `customClassName: React.PropTypes.string`

    Custom CSS class name applied to the layout `div`. You can use this to customize layout style.
    Refers to the [original stylesheet](src/stylesheets/index.css) to see what you can customize.

* `vertical: React.PropTypes.bool`

    Determine whether the layout should be a horizontal split or a vertical split. The default value is `false`.
    
* `percentage: React.PropTypes.bool`

    Determine whether the width of each pane should be calculated in percentage or by pixels.
    The default value is `false`, which means width is calculated in pixels.
    
* `primaryIndex: React.PropTypes.number`

    Index of the *primary pane*. Since `SplitterLayout` supports at most 2 children, only `0` or `1` is allowed.
    The default value is `0`.
    
    A *primary pane* is used to show users primary content, while a *secondary pane* is the other pane.
    When window size changes and `percentage` is set to `false`,
    primary pane's size is flexible and secondary pane's size is kept unchanged.
    However, when the window size is not enough for showing both minimal primary pane and minimal secondary pane,
    the primary pane's size is served first. 

* `primaryMinSize: React.PropTypes.number`

    Minimal size of primary pane. The default value is 0.

    When `percentage` is set to `false`, this value is pixel size (25 means 25px).
    When `percentage` is set to `true`, this value is percentage (25 means 25%).
    
* `secondaryMinSize: React.PropTypes.number`

    Minimal size of secondary pane.

* `secondaryInitialSize: React.PropTypes.number`

    Initial size of secondary pane when page loads.
    
    If this prop is not defined, `SplitterLayout` tries to split the layout with equal sizes.
    (Note: equal size may not apply when there are nested layouts.)


## Release History

* 0.2.1
  * Fix an incorrect layout when nesting a horizontal splitter inside a vertical one,
    and now root element of the splitter is absolutely positioned.
* 0.1.0
  * First proper release.

## License

[MIT](LICENSE)
