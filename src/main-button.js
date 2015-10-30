'use strict';

const React = require('react');
const classnames = require('classnames');

let MainButton = React.createClass({
  getDefaultProps: function(){
    return {
      href: '#',
      onClick: function(){},
      iconRestingClass: '',
      iconActiveClass: '',
    };
  },
  render: function(){
    let {
      className,
      iconRestingClass,
      iconActiveClass,
      ...other
    } = this.props

    let _className = classnames('mfb-component__button--main', className);
    let _iconRestingClass = classnames('mfb-component__main-icon--resting', iconRestingClass);
    let _iconActiveClass = classnames('mfb-component__main-icon--active', iconActiveClass);

    <a {...other} className={_className} data-mfb-label={label}>
      <i className={_iconRestingClass}></i>
      <i className={_iconActiveClass}></i>
    </a>
  }
});

module.exports = MainButton;
