import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '15.1.0'
},'poetic:meteor-react-material-floating-button');

const React = require('react');

getChildren = function getChildren(children){
  var buttons = {
    main: null,
    children: []
  };

  React.Children.forEach(children, function(child){
    if (child.type === MainButton) {
      buttons.main = child;
    } else if (child.type === ChildButton) {
      buttons.children.push(child);
    }
  });

  return buttons;
}
