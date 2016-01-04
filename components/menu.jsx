'use strict';

let Overlay = React.createClass({
  getDefaultProps: function () {
    return {
      isOpen: false
    }
  },
  style: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    transition: 'background-color 0.5s',
  },
  render() {
    let style = this.style

    if (this.props.isOpen) {
      style.pointerEvents = null;
      style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      style.pointerEvents = 'none';
      style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
    return (
      <div style={style}></div>
    )
  }
})

let Menu = React.createClass({
  displayName: 'reactMfb/menu',

  propTypes: {
    effect: React.PropTypes.oneOf([
      'zoomin',
      'slidein',
      'slidein-spring',
      'fountain'
    ]).isRequired,
    position: React.PropTypes.oneOf([
      'tl',
      'tr',
      'bl',
      'br'
    ]).isRequired,
    style: React.PropTypes.object,
    children: childrenValidator
  },

  getInitialState: function() {
    return {
      isOpen: false
    };
  },

  toggleMenu: function(evt) {
    evt.preventDefault();

    if(this.props.method === 'hover'){
      return;
    }
    // flip the state from open to close and viceversa
    this.setState({
      isOpen: !this.state.isOpen
    });
  },

  render: function() {
    let _className = getClasses(this.props);
    let buttons = getChildren(this.props.children);

    let main = buttons.main && React.cloneElement(buttons.main, {
      onClick: this.toggleMenu
    });

    let styles = _.extend({},this.props.styles,{position: 'absolute', zIndex: '1000', bottom: 0, right: 0})

    return (
      <div style={styles}>
        { this.props.overlay ? <Overlay isOpen={this.state.isOpen}/> : null }
        <ul className={_className}
            data-mfb-toggle={this.props.method}
            data-mfb-state={this.state.isOpen ? 'open' : 'closed'}>
          <li className="mfb-component__wrap">
            {main}
            <ul className="mfb-component__list">
              {buttons.children}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
});

ReactMfb.Menu = Menu
