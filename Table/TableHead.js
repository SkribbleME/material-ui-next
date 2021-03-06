'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary
    }
  };
};

var TableHead = function (_React$Component) {
  (0, _inherits3.default)(TableHead, _React$Component);

  function TableHead() {
    (0, _classCallCheck3.default)(this, TableHead);
    return (0, _possibleConstructorReturn3.default)(this, (TableHead.__proto__ || (0, _getPrototypeOf2.default)(TableHead)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableHead, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {
          head: true
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'component']);


      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
        children
      );
    }
  }]);
  return TableHead;
}(_react2.default.Component);

TableHead.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component, normally `TableRow`.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
} : {};

TableHead.defaultProps = {
  component: 'thead'
};

TableHead.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableHead' })(TableHead);