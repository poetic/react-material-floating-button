'use strict';

let MainButton = React.createClass({
  getDefaultProps: function(){
    return {
      href: '#',
      onClick: function(){},
      iconRestingClassName: '',
      iconActiveClassName: '',
    };
  },
  render: function(){
    let {
      className,
      iconRestingClassName,
      iconRestingText,
      iconActiveClassName,
      iconActiveText,
      label,
      ...other
    } = this.props;

    let _className = classnames(
      'mfb-component__button--main',
      className
    );
    let _iconRestingClassName = classnames(
      'mfb-component__main-icon--resting',
      iconRestingClassName
    );
    let _iconActiveClassName = classnames(
      'mfb-component__main-icon--active',
      iconActiveClassName
    );

    return (
      <a {...other} className={_className} data-mfb-label={label}>
        <i className={_iconRestingClassName}>{iconRestingText}</i>
        <i className={_iconActiveClassName}>{iconActiveText}</i>
      </a>
    )
  }
});

ReactMfb.MainButton = MainButton
