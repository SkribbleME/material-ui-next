var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import keycode from 'keycode';
import warning from 'warning';
import Menu from '../Menu/Menu';
import { isDirty } from '../Input/Input';
import ArrowDropDownIcon from '../svg-icons/ArrowDropDown';

/**
 * @ignore - internal component.
 */
class SelectInput extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      anchorEl: null,
      open: false
    }, this.ignoreNextBlur = false, this.handleClick = event => {
      // Opening the menu is going to blur the. It will be focused back when closed.
      this.ignoreNextBlur = true;
      this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    }, this.handleClose = () => {
      this.setState({
        open: false
      });
    }, this.handleItemClick = child => event => {
      if (!this.props.multiple) {
        this.setState({
          open: false
        });
      }

      if (this.props.onChange) {
        const { onChange, name } = this.props;
        let value;
        let target;

        if (event.target) {
          target = event.target;
        }

        if (this.props.multiple) {
          value = Array.isArray(this.props.value) ? [...this.props.value] : [];
          const itemIndex = value.indexOf(child.props.value);
          if (itemIndex === -1) {
            value.push(child.props.value);
          } else {
            value.splice(itemIndex, 1);
          }
        } else {
          value = child.props.value;
        }

        event.persist();
        event.target = _extends({}, target, { value, name });

        onChange(event, child);
      }
    }, this.handleBlur = event => {
      if (this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        this.ignoreNextBlur = false;
        return;
      }

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }, this.handleKeyDown = event => {
      if (this.props.readOnly) {
        return;
      }

      if (['space', 'up', 'down'].includes(keycode(event))) {
        event.preventDefault();
        // Opening the menu is going to blur the. It will be focused back when closed.
        this.ignoreNextBlur = true;
        this.setState({
          open: true,
          anchorEl: event.currentTarget
        });
      }
    }, this.handleSelectRef = node => {
      if (!this.props.selectRef) {
        return;
      }

      this.props.selectRef({
        node,
        // By pass the native input as we expose a rich object (array).
        value: this.props.value
      });
    }, _temp;
  }

  render() {
    const _props = this.props,
          {
      autoWidth,
      children,
      classes,
      className: classNameProp,
      disabled,
      displayEmpty,
      MenuProps = {},
      multiple,
      name,
      native,
      onBlur,
      onChange,
      onFocus,
      readOnly,
      renderValue,
      selectRef,
      value
    } = _props,
          other = _objectWithoutProperties(_props, ['autoWidth', 'children', 'classes', 'className', 'disabled', 'displayEmpty', 'MenuProps', 'multiple', 'name', 'native', 'onBlur', 'onChange', 'onFocus', 'readOnly', 'renderValue', 'selectRef', 'value']);

    if (native) {
      warning(multiple === false, 'Material-UI: you can not use the `native` and `multiple` properties ' + 'at the same time on a `Select` component.');
      warning(!renderValue, 'Material-UI: the `renderValue` property is not used by the native implementation.');
      warning(!displayEmpty, 'Material-UI: the `displayEmpty` property is not used by the native implementation.');

      return React.createElement(
        'div',
        { className: classes.root },
        React.createElement(
          'select',
          _extends({
            className: classNames(classes.select, {
              [classes.disabled]: disabled
            }, classNameProp),
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
        React.createElement(ArrowDropDownIcon, { className: classes.icon })
      );
    }

    if (value === undefined) {
      throw new Error('Material-UI: the `value` property is required ' + 'when using the `Select` component with `native=false`.');
    }

    let display;
    let displaySingle = '';
    const displayMultiple = [];
    let computeDisplay = false;

    // No need to display any value if the field is empty.
    if (isDirty(this.props) || displayEmpty) {
      if (renderValue) {
        display = renderValue(value);
      } else {
        computeDisplay = true;
      }
    }

    const items = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null;
      }
      let selected;

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

      return React.cloneElement(child, {
        role: 'option',
        selected,
        onClick: this.handleItemClick(child)
      });
    });

    if (computeDisplay) {
      display = multiple ? displayMultiple.join(', ') : displaySingle;
    }

    const minimumMenuWidth = this.state.anchorEl != null && !autoWidth ? this.state.anchorEl.clientWidth : undefined;

    return React.createElement(
      'div',
      { className: classes.root },
      React.createElement(
        'div',
        {
          className: classNames(classes.select, classes.selectMenu, {
            [classes.disabled]: disabled
          }, classNameProp),
          'data-mui-test': 'SelectDisplay',
          'aria-pressed': this.state.open ? 'true' : 'false',
          tabIndex: disabled ? null : 0,
          role: 'button',
          'aria-owns': this.state.open ? `menu-${name || ''}` : null,
          'aria-haspopup': 'true',
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur,
          onClick: disabled || readOnly ? null : this.handleClick,
          onFocus: onFocus
        },
        display
      ),
      React.createElement('input', _extends({
        value: Array.isArray(value) ? value.join(',') : value,
        name: name,
        readOnly: readOnly
      }, other, {
        ref: this.handleSelectRef,
        type: 'hidden'
      })),
      React.createElement(ArrowDropDownIcon, { className: classes.icon }),
      React.createElement(
        Menu,
        _extends({
          id: `menu-${name || ''}`,
          anchorEl: this.state.anchorEl,
          open: this.state.open,
          onClose: this.handleClose
        }, MenuProps, {
          MenuListProps: _extends({}, MenuProps.MenuListProps, {
            role: 'listbox'
          }),
          PaperProps: _extends({}, MenuProps.PaperProps, {
            style: _extends({
              minWidth: minimumMenuWidth
            }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
          })
        }),
        items
      )
    );
  }
}

SelectInput.propTypes = {
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: PropTypes.bool,
  /**
   * Properties applied to the `Menu` element.
   */
  MenuProps: PropTypes.object,
  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   * You can only use it when the `native` property is `false` (default).
   */
  multiple: PropTypes.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,
  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: PropTypes.bool,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback
   * @param {object} child The react element that was selected
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * @ignore
   */
  readOnly: PropTypes.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` property is `false` (default).
   */
  renderValue: PropTypes.func,
  /**
   * Use that property to pass a ref callback to the native select element.
   */
  selectRef: PropTypes.func,
  /**
   * The value of the component, required for a controlled component.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))])
};

SelectInput.muiName = 'SelectInput';

export default SelectInput;