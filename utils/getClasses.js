import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.8'
}, 'poetic:meteor-react-material-floating-button');

const React = require('react');

getClasses = function getClasses(props){
  return classNames({
    'mfb-zoomin': props.effect === 'zoomin',
    'mfb-slidein': props.effect === 'slidein',
    'mfb-slidein-spring': props.effect === 'slidein-spring',
    'mfb-fountain': props.effect === 'fountain',
    'mfb-component--tl': props.position === 'tl',
    'mfb-component--tr': props.position === 'tr',
    'mfb-component--bl': props.position === 'bl',
    'mfb-component--br': props.position === 'br'
  }, props.className);
}
