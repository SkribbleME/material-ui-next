'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.getScale = getScale;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _withTheme = require('../styles/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Only exported for tests.
// @inheritedComponent CSSTransition

function getScale(value) {
  return 'scale(' + value + ', ' + Math.pow(value, 2) + ')';
}

/**
 * The Grow transition is used by the Popover component.
 * It's using [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = function (_React$Component) {
  (0, _inherits3.default)(Grow, _React$Component);

  function Grow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Grow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Grow.__proto__ || (0, _getPrototypeOf2.default)(Grow)).call.apply(_ref, [this].concat(args))), _this), _this.autoTimeout = undefined, _this.handleEnter = function (node) {
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var _this$props = _this.props,
          theme = _this$props.theme,
          timeout = _this$props.timeout;

      var duration = 0;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else if (typeof timeout === 'number') {
        duration = timeout;
      } else if (timeout && typeof timeout.enter === 'number') {
        duration = timeout.enter;
      } else {
        // The propType will warn in this case.
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration
      }), theme.transitions.create('transform', {
        duration: duration * 0.666
      })].join(',');

      node.style.opacity = '1';
      node.style.transform = getScale(1);

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleExit = function (node) {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          timeout = _this$props2.timeout;

      var duration = 0;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else if (typeof timeout === 'number') {
        duration = timeout;
      } else if (timeout && typeof timeout.exit === 'number') {
        duration = timeout.exit;
      } else {
        // The propType will warn in this case.
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: duration * 0.333
      })].join(',');

      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.addEndListener = function (node, next) {
      if (_this.props.timeout === 'auto') {
        setTimeout(next, _this.autoTimeout || 0);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Grow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          appear = _props.appear,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          rootRef = _props.rootRef,
          styleProp = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          _props$transitionClas = _props.transitionClasses,
          transitionClasses = _props$transitionClas === undefined ? {} : _props$transitionClas,
          other = (0, _objectWithoutProperties3.default)(_props, ['appear', 'children', 'onEnter', 'onEntering', 'onExit', 'rootRef', 'style', 'theme', 'timeout', 'transitionClasses']);


      var style = (0, _extends3.default)({}, children.props.style, styleProp);

      // For server side rendering.
      if (!this.props.in || appear) {
        style.opacity = '0';
      }

      return _react2.default.createElement(
        _CSSTransition2.default,
        (0, _extends3.default)({
          classNames: transitionClasses,
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onExit: this.handleExit,
          addEndListener: this.addEndListener,
          appear: appear,
          style: style,
          timeout: timeout === 'auto' ? null : timeout
        }, other, {
          ref: rootRef
        }),
        children
      );
    }
  }]);
  return Grow;
}(_react2.default.Component);

Grow.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   */
  appear: _propTypes2.default.bool,
  /**
   * A single child content element.
   */
  children: _propTypes2.default.element,
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes2.default.bool,
  /**
   * @ignore
   */
  onEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntered: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntering: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExit: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExited: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExiting: _propTypes2.default.func,
  /**
   * Use that property to pass a ref callback to the root component.
   */
  rootRef: _propTypes2.default.func,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])]),
  /**
   * The animation classNames applied to the component as it enters or exits.
   * This property is a direct binding to [`CSSTransition.classNames`](https://reactcommunity.org/react-transition-group/#CSSTransition-prop-classNames).
   */
  transitionClasses: _propTypes2.default.shape({
    appear: _propTypes2.default.string,
    appearActive: _propTypes2.default.string,
    enter: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    exitActive: _propTypes2.default.string
  })
} : {};

Grow.defaultProps = {
  appear: true,
  timeout: 'auto'
};

exports.default = (0, _withTheme2.default)()(Grow);