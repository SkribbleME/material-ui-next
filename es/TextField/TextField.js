var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// @inheritedComponent FormControl

import React from 'react';
import warning from 'warning';
import PropTypes from 'prop-types';
import Input, { InputLabel } from '../Input';
import FormControl from '../Form/FormControl';
import FormHelperText from '../Form/FormHelperText';
import Select from '../Select/Select';

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 * - [FormControl](/api/form-control)
 * - [InputLabel](/api/input-label)
 * - [Input](/api/input)
 * - [FormHelperText](/api/form-helper-text)
 *
 * If you wish to alter the properties applied to the native input, you can do as follow:
 *
 * ```jsx
 * const InputProps = {
 *   inputProps: {
 *     step: 300,
 *   },
 * };
 *
 * return <TextField id="time" type="time" InputProps={InputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField and consider either:
 * - using the upper case props for passing values direct to the components.
 * - using the underlying components directly as shown in the demos.
 */
function TextField(props) {
  const {
    autoComplete,
    autoFocus,
    children,
    className,
    defaultValue,
    disabled,
    error,
    FormHelperTextProps,
    fullWidth,
    helperText,
    helperTextClassName,
    id,
    InputLabelProps,
    InputProps,
    inputRef,
    label,
    labelClassName,
    multiline,
    name,
    onChange,
    placeholder,
    required,
    rootRef,
    rows,
    rowsMax,
    select,
    SelectProps,
    type,
    value
  } = props,
        other = _objectWithoutProperties(props, ['autoComplete', 'autoFocus', 'children', 'className', 'defaultValue', 'disabled', 'error', 'FormHelperTextProps', 'fullWidth', 'helperText', 'helperTextClassName', 'id', 'InputLabelProps', 'InputProps', 'inputRef', 'label', 'labelClassName', 'multiline', 'name', 'onChange', 'placeholder', 'required', 'rootRef', 'rows', 'rowsMax', 'select', 'SelectProps', 'type', 'value']);

  warning(!select || Boolean(children), 'Material-UI: `children` must be passed when using the `TextField` component with `select`.');

  const InputComponent = React.createElement(Input, _extends({
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: disabled,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onChange: onChange,
    placeholder: placeholder
  }, InputProps));

  return React.createElement(
    FormControl,
    _extends({
      fullWidth: fullWidth,
      className: className,
      error: error,
      required: required
    }, other, {
      ref: rootRef
    }),
    label && React.createElement(
      InputLabel,
      _extends({ htmlFor: id, className: labelClassName }, InputLabelProps),
      label
    ),
    select ? React.createElement(
      Select,
      _extends({ value: value, input: InputComponent }, SelectProps),
      children
    ) : InputComponent,
    helperText && React.createElement(
      FormHelperText,
      _extends({ className: helperTextClassName }, FormHelperTextProps),
      helperText
    )
  );
}

TextField.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusion, it's more like an autofill.
   * You can learn about it with that article
   * https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The default value of the `Input` element.
   */
  defaultValue: PropTypes.string,
  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * Properties applied to the `FormHelperText` element.
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * The CSS class name of the helper text element.
   */
  helperTextClassName: PropTypes.string,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * Properties applied to the `InputLabel` element.
   */
  InputLabelProps: PropTypes.object,
  /**
   * Properties applied to the `Input` element.
   */
  InputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.func,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * The CSS class name of the label element.
   */
  labelClassName: PropTypes.string,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback
   */
  onChange: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * If `true`, the label is displayed as required.
   */
  required: PropTypes.bool,
  /**
   * Use that property to pass a ref callback to the root component.
   */
  rootRef: PropTypes.func,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: PropTypes.bool,
  /**
   * Properties applied to the `Select` element.
   */
  SelectProps: PropTypes.object,
  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: PropTypes.string,
  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextField.defaultProps = {
  required: false,
  select: false
};

export default TextField;