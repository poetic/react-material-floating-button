'use strict';

const React = require('react');

const getClasses = require('./utils/get-classes');
const getChildren = require('./utils/get-children');
const childrenValidator = require('./utils/children-validator');

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

    return (
      <div>
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

module.exports = Menu;
