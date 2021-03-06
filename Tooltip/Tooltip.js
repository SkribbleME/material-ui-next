'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPopper = require('react-popper');

var _helpers = require('../utils/helpers');

var _common = require('../colors/common');

var _common2 = _interopRequireDefault(_common);

var _grey = require('../colors/grey');

var _grey2 = _interopRequireDefault(_grey);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use a class component so we can get a reference.
/* eslint-disable react/no-multi-comp, no-underscore-dangle */

var TargetChildren = function (_React$Component) {
  (0, _inherits3.default)(TargetChildren, _React$Component);

  function TargetChildren() {
    (0, _classCallCheck3.default)(this, TargetChildren);
    return (0, _possibleConstructorReturn3.default)(this, (TargetChildren.__proto__ || (0, _getPrototypeOf2.default)(TargetChildren)).apply(this, arguments));
  }

  (0, _createClass3.default)(TargetChildren, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return TargetChildren;
}(_react2.default.Component);

TargetChildren.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired
} : {};

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline',
      flexDirection: 'inherit' // Makes the wrapper more transparent.
    },
    popper: {
      zIndex: theme.zIndex.tooltip
    },
    popperClose: {
      pointerEvents: 'none'
    },
    tooltip: (0, _defineProperty3.default)({
      background: _grey2.default[700],
      borderRadius: 2,
      color: _common2.default.fullWhite,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(14),
      minHeight: theme.spacing.unit * 4,
      lineHeight: '32px',
      opacity: 0,
      padding: '0 ' + theme.spacing.unit + 'px',
      transform: 'scale(0)',
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shortest
      })
    }, theme.breakpoints.up('sm'), {
      minHeight: 22,
      lineHeight: '22px',
      padding: '0 ' + theme.spacing.unit + 'px',
      fontSize: theme.typography.pxToRem(10)
    }),
    tooltipLeft: (0, _defineProperty3.default)({
      transformOrigin: 'right center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipRight: (0, _defineProperty3.default)({
      transformOrigin: 'left center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipTop: (0, _defineProperty3.default)({
      transformOrigin: 'center bottom',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipBottom: (0, _defineProperty3.default)({
      transformOrigin: 'center top',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipOpen: {
      opacity: 0.9,
      transform: 'scale(1)'
    }
  };
};

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}

var Tooltip = function (_React$Component2) {
  (0, _inherits3.default)(Tooltip, _React$Component2);

  function Tooltip() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {}, _this2.enterTimer = null, _this2.leaveTimer = null, _this2.touchTimer = null, _this2.isControlled = null, _this2.popper = null, _this2.children = null, _this2.ignoreNonTouchEvents = false, _this2.handleResize = (0, _debounce2.default)(function () {
      if (_this2.popper) {
        _this2.popper._popper.scheduleUpdate();
      }
    }, 166), _this2.handleRequestOpen = function (event) {
      var children = _this2.props.children;

      if (typeof children !== 'string') {
        var childrenProps = _react2.default.Children.only(children).props;

        if (event.type === 'focus' && childrenProps.onFocus) {
          childrenProps.onFocus(event);
        }

        if (event.type === 'mouseover' && childrenProps.onMouseOver) {
          childrenProps.onMouseOver(event);
        }
      }

      if (_this2.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(_this2.leaveTimer);
      if (_this2.props.enterDelay > 0) {
        _this2.leaveTimer = setTimeout(function () {
          _this2.requestOpen(event);
        }, _this2.props.enterDelay);
      } else {
        _this2.requestOpen(event);
      }
    }, _this2.requestOpen = function (event) {
      if (!_this2.isControlled) {
        _this2.setState({ open: true });
      }

      if (_this2.props.onOpen) {
        _this2.props.onOpen(event, true);
      }
    }, _this2.handleClose = function (event) {
      var children = _this2.props.children;

      if (typeof children !== 'string') {
        var childrenProps = _react2.default.Children.only(children).props;

        if (event.type === 'blur' && childrenProps.onBlur) {
          childrenProps.onBlur(event);
        }

        if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
          childrenProps.onMouseLeave(event);
        }
      }

      clearTimeout(_this2.leaveTimer);
      if (_this2.props.leaveDelay) {
        _this2.leaveTimer = setTimeout(function () {
          _this2.requestClose(event);
        }, _this2.props.leaveDelay);
      } else {
        _this2.requestClose(event);
      }
    }, _this2.requestClose = function (event) {
      _this2.ignoreNonTouchEvents = false;

      if (!_this2.isControlled) {
        _this2.setState({ open: false });
      }

      if (_this2.props.onClose) {
        _this2.props.onClose(event, false);
      }
    }, _this2.handleTouchStart = function (event) {
      _this2.ignoreNonTouchEvents = true;
      var children = _this2.props.children;

      if (typeof children !== 'string') {
        var childrenProps = _react2.default.Children.only(children).props;

        if (childrenProps.onTouchStart) {
          childrenProps.onTouchStart(event);
        }
      }

      clearTimeout(_this2.touchTimer);
      event.persist();
      _this2.touchTimer = setTimeout(function () {
        _this2.handleRequestOpen(event);
      }, 1e3);
    }, _this2.handleTouchEnd = function (event) {
      var children = _this2.props.children;

      if (typeof children !== 'string') {
        var childrenProps = _react2.default.Children.only(children).props;

        if (childrenProps.onTouchEnd) {
          childrenProps.onTouchEnd(event);
        }
      }

      clearTimeout(_this2.touchTimer);
      clearTimeout(_this2.leaveTimer);
      event.persist();
      _this2.leaveTimer = setTimeout(function () {
        _this2.requestClose(event);
      }, 1500 + _this2.props.leaveDelay);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var props = this.props;


      this.isControlled = props.open !== undefined;

      if (!this.isControlled) {
        // not controlled, use internal state
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled button children to the Tooltip component.', 'A disabled element do not fire events.', 'But the Tooltip needs to listen to the children element events to display the title.', '', 'Place a `div` over top of the element.'].join('\n')) : void 0;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      this.handleResize.cancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          childrenProp = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableTriggerFocus = _props.disableTriggerFocus,
          disableTriggerHover = _props.disableTriggerHover,
          disableTriggerTouch = _props.disableTriggerTouch,
          enterDelay = _props.enterDelay,
          id = _props.id,
          leaveDelay = _props.leaveDelay,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openProp = _props.open,
          rawPlacement = _props.placement,
          _props$PopperProps = _props.PopperProps;
      _props$PopperProps = _props$PopperProps === undefined ? {} : _props$PopperProps;
      var PopperClassName = _props$PopperProps.PopperClassName,
          PopperOther = (0, _objectWithoutProperties3.default)(_props$PopperProps, ['PopperClassName']),
          theme = _props.theme,
          title = _props.title,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'disableTriggerFocus', 'disableTriggerHover', 'disableTriggerTouch', 'enterDelay', 'id', 'leaveDelay', 'onClose', 'onOpen', 'open', 'placement', 'PopperProps', 'theme', 'title']);


      var themeDirection = theme && theme.direction;
      var placement = themeDirection === 'rtl' ? flipPlacement(rawPlacement) : rawPlacement;
      var open = this.isControlled ? openProp : this.state.open;
      var childrenProps = {};

      childrenProps['aria-describedby'] = id;

      if (!disableTriggerTouch) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableTriggerHover) {
        childrenProps.onMouseOver = this.handleRequestOpen;
        childrenProps.onMouseLeave = this.handleClose;
      }

      if (!disableTriggerFocus) {
        childrenProps.onFocus = this.handleRequestOpen;
        childrenProps.onBlur = this.handleClose;
      }

      if (typeof childrenProp !== 'string' && childrenProp.props) {
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!childrenProp.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', 'Remove this title property `' + childrenProp.props.title + '` or the Tooltip component.'].join('\n')) : void 0;
      }

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onResize: this.handleResize },
        _react2.default.createElement(
          _reactPopper.Manager,
          (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
          _react2.default.createElement(
            _reactPopper.Target,
            null,
            function (_ref2) {
              var targetProps = _ref2.targetProps;
              return _react2.default.createElement(
                TargetChildren,
                {
                  ref: function ref(node) {
                    _this3.children = (0, _reactDom.findDOMNode)(node);
                    targetProps.ref(_this3.children);
                  }
                },
                typeof childrenProp !== 'string' ? _react2.default.cloneElement(childrenProp, childrenProps) : childrenProp
              );
            }
          ),
          _react2.default.createElement(
            _reactPopper.Popper,
            (0, _extends3.default)({
              placement: placement,
              eventsEnabled: open,
              className: (0, _classnames2.default)(classes.popper, (0, _defineProperty3.default)({}, classes.popperClose, !open), PopperClassName)
            }, PopperOther, {
              ref: function ref(node) {
                _this3.popper = node;
              }
            }),
            function (_ref3) {
              var popperProps = _ref3.popperProps,
                  restProps = _ref3.restProps;
              return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, popperProps, restProps, {
                  style: (0, _extends3.default)({}, popperProps.style, {
                    left: popperProps.style.left || 0
                  }, restProps.style)
                }),
                _react2.default.createElement(
                  'div',
                  {
                    id: id,
                    role: 'tooltip',
                    'aria-hidden': !open,
                    className: (0, _classnames2.default)(classes.tooltip, (0, _defineProperty3.default)({}, classes.tooltipOpen, open), classes['tooltip' + (0, _helpers.capitalizeFirstLetter)(placement.split('-')[0])])
                  },
                  title
                )
              );
            }
          )
        )
      );
    }
  }]);
  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Tooltip reference node.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Do not respond to focus events.
   */
  disableTriggerFocus: _propTypes2.default.bool,
  /**
   * Do not respond to hover events.
   */
  disableTriggerHover: _propTypes2.default.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTriggerTouch: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   */
  enterDelay: _propTypes2.default.number,
  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: _propTypes2.default.string,
  /**
   * The number of milliseconds to wait before hidding the tooltip.
   */
  leaveDelay: _propTypes2.default.number,
  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes2.default.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: _propTypes2.default.bool,
  /**
   * Tooltip placement
   */
  placement: _propTypes2.default.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * Tooltip title.
   */
  title: _propTypes2.default.node.isRequired
} : {};

Tooltip.defaultProps = {
  disableTriggerFocus: false,
  disableTriggerHover: false,
  disableTriggerTouch: false,
  enterDelay: 0,
  leaveDelay: 0,
  placement: 'bottom'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTooltip', withTheme: true })(Tooltip);