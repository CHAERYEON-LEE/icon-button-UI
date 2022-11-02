function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Icon from './Icon.js';
var uploadStatus = {
  idle: {
    text: "업로드",
    path: "../assets/icons/type=up-arrow.svg"
  },
  pending: {
    text: "업로드 중",
    path: "../assets/icons/type=spinner-animate.svg"
  },
  resolved: {
    text: "완료",
    path: "../assets/icons/type=check-mark.svg"
  },
  rejected: {
    text: "실패",
    path: "../assets/icons/type=cross.svg"
  },
  disabled: {
    text: "업로드",
    path: "../assets/icons/type=not-allowed.svg",
    style: {
      filter: 'invert(76%) sepia(8%) saturate(202%) hue-rotate(196deg) brightness(92%) contrast(89%)'
    }
  }
};
export default function UploadButton(props) {
  var status = props.status;
  var _uploadStatus = uploadStatus[status != null ? status : 'idle'],
      text = _uploadStatus.text,
      path = _uploadStatus.path,
      style = _uploadStatus.style;
  var buttonStyles = {
    width: '89px',
    height: '30px',
    padding: '9px 12px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    background: '#ffffff',
    boxShadow: '0px 4px 4px #dbddf0',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer'
  };
  var textStyles = {
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '12px',
    color: '#525577'
  };
  return React.createElement("button", {
    type: "button",
    style: buttonStyles
  }, React.createElement("div", {
    style: _extends({}, textStyles, style)
  }, text), React.createElement(Icon, {
    path: path,
    style: style
  }));
}
//# sourceMappingURL=UploadButton.js.map