var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default function createMixins(breakpoints, spacing, mixins) {
  return _extends({
    gutters: styles => {
      return _extends({
        paddingLeft: spacing.unit * 2,
        paddingRight: spacing.unit * 2
      }, styles, {
        [breakpoints.up('sm')]: _extends({
          paddingLeft: spacing.unit * 3,
          paddingRight: spacing.unit * 3
        }, styles[breakpoints.up('sm')])
      });
    },
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}