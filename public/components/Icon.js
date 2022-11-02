function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

export default function Icon(props) {
  var path = props.path,
      style = props.style;
  var iconStlyes = {
    width: '12px',
    height: '12px'
  };
  return React.createElement("img", {
    src: path,
    style: _extends({}, iconStlyes, style)
  });
}
//# sourceMappingURL=Icon.js.map