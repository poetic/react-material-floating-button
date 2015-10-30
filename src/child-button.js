'use strict';

const React = require('react');
const classnames = require('classnames');

let ChildButton = React.createClass({
  render: function(){
    let {
      label,
      className,
      iconClassName,
      iconText,
      ...other
    } = this.props;

    let _className = classnames('mfb-component__button--child', className);
    let _iconClassName = classnames('mfb-component__child-icon', iconClassName);

    return (
      <li>
        <a {...other}
          data-mfb-label={label}
          className={_className}>
          <i className={_iconClassName}>iconText</i>
        </a>
      </li>
    );
  }
});

module.exports = ChildButton;
