module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true
  },
  'rules': {
    'comma-dangle': [2, 'never'],
    'func-names': [0],
    'max-len': [2, 120, 2, {
      'ignoreUrls': true
    }],
    'no-console': [1, { 'allow': ["warn", "error"] }],
    'no-multiple-empty-lines': [1, { 'max': 1 }],
    'no-param-reassign': [0],
    'no-plusplus': [0],
    'no-unused-vars': [1],
    'no-underscore-dangle': [0],
    'prefer-arrow-callback': [0],
    'space-before-function-paren': [2, 'never'],
    'react/prefer-stateless-function': [1],
    'react/no-did-mount-set-state': [0]
  }
};
