module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true,
    'jest': true
  },
  'rules': {
    'class-methods-use-this': [0],
    'comma-dangle': [2, 'never'],
    "function-paren-newline": [2, 'consistent'],
    'max-len': [2, 120, 2, {
      'ignoreUrls': true
    }],
    "no-confusing-arrow": [2, { "allowParens": true }],
    'no-multiple-empty-lines': [1, { 'max': 1 }],
    'no-plusplus': [0],
    'object-curly-newline': [0],
    'operator-linebreak': [2, 'after'],
    'space-before-function-paren': [2, 'never'],
    'react/destructuring-assignment': [0],
    'react/no-did-mount-set-state': [0],
    'react/jsx-one-expression-per-line': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0]
  }
};
