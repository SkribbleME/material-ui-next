var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// @inheritedComponent Modal

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalizeFirstLetter } from '../utils/helpers';
import Modal from '../Modal';
import Fade from '../transitions/Fade';
import { duration } from '../styles/transitions';
import Paper from '../Paper';

export const styles = theme => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    display: 'flex',
    margin: theme.spacing.unit * 4,
    flexDirection: 'column',
    flex: '0 1 auto',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto', // Fix IE11 issue, to remove at some point.
    '&:focus': {
      outline: 'none'
    }
  },
  paperWidthXs: {
    maxWidth: Math.max(theme.breakpoints.values.xs, 360)
  },
  paperWidthSm: {
    maxWidth: theme.breakpoints.values.sm
  },
  paperWidthMd: {
    maxWidth: theme.breakpoints.values.md
  },
  fullWidth: {
    width: '100%'
  },
  fullScreen: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    borderRadius: 0
  }
});

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
function Dialog(props) {
  const {
    children,
    classes,
    className,
    fullScreen,
    fullWidth,
    ignoreBackdropClick,
    ignoreEscapeKeyUp,
    maxWidth,
    onBackdropClick,
    onClose,
    onEnter,
    onEntered,
    onEntering,
    onEscapeKeyUp,
    onExit,
    onExited,
    onExiting,
    open,
    transition: TransitionProp,
    transitionDuration
  } = props,
        other = _objectWithoutProperties(props, ['children', 'classes', 'className', 'fullScreen', 'fullWidth', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'maxWidth', 'onBackdropClick', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onEscapeKeyUp', 'onExit', 'onExited', 'onExiting', 'open', 'transition', 'transitionDuration']);

  return React.createElement(
    Modal,
    _extends({
      className: classNames(classes.root, className),
      BackdropTransitionDuration: transitionDuration,
      ignoreBackdropClick: ignoreBackdropClick,
      ignoreEscapeKeyUp: ignoreEscapeKeyUp,
      onBackdropClick: onBackdropClick,
      onEscapeKeyUp: onEscapeKeyUp,
      onClose: onClose,
      show: open,
      role: 'dialog'
    }, other),
    React.createElement(
      TransitionProp,
      {
        appear: true,
        'in': open,
        timeout: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      },
      React.createElement(
        Paper,
        {
          'data-mui-test': 'Dialog',
          elevation: 24,
          className: classNames(classes.paper, classes[`paperWidth${capitalizeFirstLetter(maxWidth)}`], {
            [classes.fullScreen]: fullScreen,
            [classes.fullWidth]: fullWidth
          })
        },
        children
      )
    )
  );
}

Dialog.propTypes = {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, it will be full-screen
   */
  fullScreen: PropTypes.bool,
  /**
   * If specified, stretches dialog to max width.
   */
  fullWidth: PropTypes.bool,
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  ignoreBackdropClick: PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  ignoreEscapeKeyUp: PropTypes.bool,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md']),
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: PropTypes.func,
  /**
   * Callback fires when the escape key is released and the modal is in focus.
   */
  onEscapeKeyUp: PropTypes.func,
  /**
   * Callback fired before the dialog exits.
   */
  onExit: PropTypes.func,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited: PropTypes.func,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: PropTypes.func,
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool,
  /**
   * Transition component.
   */
  transition: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number })])
};

Dialog.defaultProps = {
  fullScreen: false,
  fullWidth: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  maxWidth: 'sm',
  open: false,
  transition: Fade,
  transitionDuration: { enter: duration.enteringScreen, exit: duration.leavingScreen }
};

export default withStyles(styles, { name: 'MuiDialog' })(Dialog);