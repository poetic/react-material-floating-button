Package.describe({
  name: 'poetic:meteor-react-material-floating-button',
  version: '0.3.19',
  // Brief, one-line summary of the package.
  summary: 'react-material-floating-button wrapped in meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'poetic/meteor-react-material-floating-button',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'ecmascript',
    'fourseven:scss@3.4.1',
    'maxharris9:classnames@0.0.1',
    'tmeasday:check-npm-versions@0.3.1',
  ],'client');

  api.addFiles(
    [
      'styles/fountain.import.scss',
      'styles/slidein-spring.import.scss',
      'styles/slidein.import.scss',
      'styles/zoomin.import.scss',

      'reactmfb.js',

      'utils/childrenValidator.js',
      'utils/getClasses.js',

      'components/childButton.jsx',
      'components/mainButton.jsx',

      /*
       * The order here is important
       */
      'utils/getChildren.js',

      'components/menu.jsx',
    ],
    'client'
  );

  api.export('ReactMfb', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
});
