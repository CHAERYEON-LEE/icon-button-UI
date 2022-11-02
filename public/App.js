import UploadButton from "./components/UploadButton.js";
export default function App() {
  var buttonContainerStyles = {
    display: "flex",
    flexFlow: "column nowrap",
    gap: "20px"
  };
  return React.createElement("div", {
    style: buttonContainerStyles
  }, React.createElement(UploadButton, {
    status: "idle"
  }), React.createElement(UploadButton, {
    status: "pending"
  }), React.createElement(UploadButton, {
    status: "resolved"
  }), React.createElement(UploadButton, {
    status: "rejected"
  }), React.createElement(UploadButton, {
    status: "disabled"
  }), React.createElement(UploadButton, null));
}
//# sourceMappingURL=App.js.map