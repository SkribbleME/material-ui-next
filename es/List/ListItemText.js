var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';

export const styles = theme => ({
  root: {
    flex: '1 1 auto',
    padding: '0 16px',
    '&:first-child': {
      paddingLeft: 0
    }
  },
  inset: {
    '&:first-child': {
      paddingLeft: theme.spacing.unit * 7
    }
  },
  dense: {
    fontSize: theme.typography.pxToRem(13)
  },
  text: {}, // Present to allow external customization
  textDense: {
    fontSize: 'inherit'
  }
});

function ListItemText(props, context) {
  const {
    classes,
    className: classNameProp,
    disableTypography,
    inset,
    primary,
    secondary
  } = props,
        other = _objectWithoutProperties(props, ['classes', 'className', 'disableTypography', 'inset', 'primary', 'secondary']);
  const { dense } = context;
  const className = classNames(classes.root, {
    [classes.dense]: dense,
    [classes.inset]: inset
  }, classNameProp);

  return React.createElement(
    'div',
    _extends({ className: className }, other),
    primary && (disableTypography ? primary : React.createElement(
      Typography,
      {
        type: 'subheading',
        className: classNames(classes.text, { [classes.textDense]: dense })
      },
      primary
    )),
    secondary && (disableTypography ? secondary : React.createElement(
      Typography,
      {
        color: 'secondary',
        type: 'body1',
        className: classNames(classes.text, { [classes.textDense]: dense })
      },
      secondary
    ))
  );
}

ListItemText.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, that can be useful to can render an h4 instead of a
   */
  disableTypography: PropTypes.bool,
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,
  primary: PropTypes.node,
  secondary: PropTypes.node
};

ListItemText.defaultProps = {
  disableTypography: false,
  inset: false,
  primary: false,
  secondary: false
};

ListItemText.contextTypes = {
  dense: PropTypes.bool
};

export default withStyles(styles, { name: 'MuiListItemText' })(ListItemText);