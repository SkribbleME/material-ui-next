'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Input = require('../Input/Input');

var _ArrowDropDown = require('../svg-icons/ArrowDropDown');

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var SelectInput = function (_React$Component) {
  (0, _inherits3.default)(SelectInput, _React$Component);

  function SelectInput() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SelectInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectInput.__proto__ || (0, _getPrototypeOf2.default)(SelectInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      open: false
    }, _this.ignoreNextBlur = false, _this.handleClick = function (event) {
      // Opening the menu is going to blur the. It will be focused back when closed.
      _this.ignoreNextBlur = true;
      _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    }, _this.handleClose = function () {
      _this.setState({
        open: false
      });
    }, _this.handleItemClick = function (child) {
      return function (event) {
        if (!_this.props.multiple) {
          _this.setState({
            open: false
          });
        }

        if (_this.props.onChange) {
          var _this$props = _this.props,
              onChange = _this$props.onChange,
              name = _this$props.name;

          var value = void 0;
          var _target = void 0;

          if (event.target) {
            _target = event.target;
          }

          if (_this.props.multiple) {
            value = Array.isArray(_this.props.value) ? [].concat((0, _toConsumableArray3.default)(_this.props.value)) : [];
            var itemIndex = value.indexOf(child.props.value);
            if (itemIndex === -1) {
              value.push(child.props.value);
            } else {
              value.splice(itemIndex, 1);
            }
          } else {
            value = child.props.value;
          }

          event.persist();
          event.target = (0, _extends3.default)({}, _target, { value: value, name: name });

          onChange(event, child);
        }
      };
    }, _this.handleBlur = function (event) {
      if (_this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        _this.ignoreNextBlur = false;
        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleKeyDown = function (event) {
      if (_this.props.readOnly) {
        return;
      }

      if (['space', 'up', 'down'].includes((0, _keycode2.default)(event))) {
        event.preventDefault();
        // Opening the menu is going to blur the. It will be focused back when closed.
        _this.ignoreNextBlur = true;
        _this.setState({
          open: true,
          anchorEl: event.currentTarget
        });
      }
    }, _this.handleSelectRef = function (node) {
      if (!_this.props.selectRef) {
        return;
      }

      _this.props.selectRef({
        node: node,
        // By pass the native input as we expose a rich object (array).
        value: _this.props.value
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SelectInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoWidth = _props.autoWidth,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          disabled = _props.disabled,
          displayEmpty = _props.displayEmpty,
          _props$MenuProps = _props.MenuProps,
          MenuProps = _props$MenuProps === undefined ? {} : _props$MenuProps,
          multiple = _props.multiple,
          name = _props.name,
          native = _props.native,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          readOnly = _props.readOnly,
          renderValue = _props.renderValue,
          selectRef = _props.selectRef,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'classes', 'className', 'disabled', 'displayEmpty', 'MenuProps', 'multiple', 'name', 'native', 'onBlur', 'onChange', 'onFocus', 'readOnly', 'renderValue', 'selectRef', 'value']);


      if (native) {
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(multiple === false, 'Material-UI: you can not use the `native` and `multiple` properties ' + 'at the same time on a `Select` component.') : void 0;
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!renderValue, 'Material-UI: the `renderValue` property is not used by the native implementation.') : void 0;
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!displayEmpty, 'Material-UI: the `displayEmpty` property is not used by the native implementation.') : void 0;

        return _react2.default.createElement(
          'div',
          { className: classes.root },
          _react2.default.createElement(
            'select',
            (0, _extends3.default)({
              className: (0, _classnames2.default)(classes.select, (0, _defineProperty3.default)({}, classes.disabled, disabled), classNameProp),
              name: name,
              disabled: disabled,
              onBlur: onBlur,
              onChange: onChange,
              onFocus: onFocus,
              value: value,
              readOnly: readOnly,
              ref: selectRef
            }, other),
            children
          ),
          _react2.default.createElement(_ArrowDropDown2.default, { className: classes.icon })
        );
      }

      if (value === undefined) {
        throw new Error('Material-UI: the `value` property is required ' + 'when using the `Select` component with `native=false`.');
      }

      var display = void 0;
      var displaySingle = '';
      var displayMultiple = [];
      var computeDisplay = false;

      // No need to display any value if the field is empty.
      if ((0, _Input.isDirty)(this.props) || displayEmpty) {
        if (renderValue) {
          display = renderValue(value);
        } else {
          computeDisplay = true;
        }
      }

      var items = _react2.default.Children.map(children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return null;
        }
        var selected = void 0;

        if (multiple) {
          if (!Array.isArray(value)) {
            throw new Error('Material-UI: the `value` property must be an array ' + 'when using the `Select` component with `multiple`.');
          }

          selected = value.indexOf(child.props.value) !== -1;
          if (selected && computeDisplay) {
            displayMultiple.push(child.props.children);
          }
        } else {
          selected = value === child.props.value;
          if (selected && computeDisplay) {
            displaySingle = child.props.children;
          }
        }

        return _react2.default.cloneElement(child, {
          role: 'option',
          selected: selected,
          onClick: _this2.handleItemClick(child)
        });
      });

      if (computeDisplay) {
        display = multiple ? displayMultiple.join(', ') : displaySingle;
      }

      var minimumMenuWidth = this.state.anchorEl != null && !autoWidth ? this.state.anchorEl.clientWidth : undefined;

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(classes.select, classes.selectMenu, (0, _defineProperty3.default)({}, classes.disabled, disabled), classNameProp),

            'aria-pressed': this.state.open ? 'true' : 'false',
            tabIndex: disabled ? null : 0,
            role: 'button',
            'aria-owns': this.state.open ? 'menu-' + (name || '') : null,
            'aria-haspopup': 'true',
            onKeyDown: this.handleKeyDown,
            onBlur: this.handleBlur,
            onClick: disabled || readOnly ? null : this.handleClick,
            onFocus: onFocus
          },
          display
        ),
        _react2.default.createElement('input', (0, _extends3.default)({
          value: Array.isArray(value) ? value.join(',') : value,
          name: name,
          readOnly: readOnly
        }, other, {
          ref: this.handleSelectRef,
          type: 'hidden'
        })),
        _react2.default.createElement(_ArrowDropDown2.default, { className: classes.icon }),
        _react2.default.createElement(
          _Menu2.default,
          (0, _extends3.default)({
            id: 'menu-' + (name || ''),
            anchorEl: this.state.anchorEl,
            open: this.state.open,
            onClose: this.handleClose
          }, MenuProps, {
            MenuListProps: (0, _extends3.default)({}, MenuProps.MenuListProps, {
              role: 'listbox'
            }),
            PaperProps: (0, _extends3.default)({}, MenuProps.PaperProps, {
              style: (0, _extends3.default)({
                minWidth: minimumMenuWidth
              }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
            })
          }),
          items
        )
      );
    }
  }]);
  return SelectInput;
}(_react2.default.Component);

SelectInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * The CSS class name of the select element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: _propTypes2.default.bool,
  /**
   * Properties applied to the `Menu` element.
   */
  MenuProps: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   * You can only use it when the `native` property is `false` (default).
   */
  multiple: _propTypes2.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: _propTypes2.default.string,
  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: _propTypes2.default.bool,
  /**
   * @ignore
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback
   * @param {object} child The react element that was selected
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onFocus: _propTypes2.default.func,
  /**
   * @ignore
   */
  readOnly: _propTypes2.default.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` property is `false` (default).
   */
  renderValue: _propTypes2.default.func,
  /**
   * Use that property to pass a ref callback to the native select element.
   */
  selectRef: _propTypes2.default.func,
  /**
   * The value of the component, required for a controlled component.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))])
} : {};

SelectInput.muiName = 'SelectInput';

exports.default = SelectInput;