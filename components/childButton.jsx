import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '15.0.2'
}, 'poetic:meteor-react-material-floating-button');

const React = require('react');

ChildButton = React.createClass({
  render: function(){
    let {
      label,
      className,
      iconClassName,
      iconText,
      ...other
    } = this.props;

    let _className = classNames('mfb-component__button--child', className);
    let _iconClassName = classNames('mfb-component__child-icon', iconClassName);

    return (
      <li>
        <a {...other}
          data-mfb-label={label}
          className={_className}>
          <i className={_iconClassName}>{iconText}</i>
        </a>
      </li>
    );
  }
});

ReactMfb.ChildButton = ChildButton
