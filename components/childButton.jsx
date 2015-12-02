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
