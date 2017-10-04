module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true,
    'jest': true
  },
  'rules': {
    'comma-dangle': [2, 'never'],
    'func-names': [0],
    'max-len': [2, 120, 2, {
      'ignoreUrls': true
    }],
    'no-multiple-empty-lines': [1, { 'max': 1 }],
    'no-plusplus': [0],
    'space-before-function-paren': [2, 'never'],
    'react/no-did-mount-set-state': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0]
  }
};
