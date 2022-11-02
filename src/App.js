import UploadButton from "./components/UploadButton.js";

export default function App() {
  const buttonContainerStyles = {
    display :"flex",
    flexFlow :"column nowrap",
    gap :"20px",
  }

  return (
    <div style={buttonContainerStyles}>
      <UploadButton status="idle"></UploadButton>
      <UploadButton status="pending"></UploadButton>
      <UploadButton status="resolved"></UploadButton>
      <UploadButton status="rejected"></UploadButton>
      <UploadButton status="disabled"></UploadButton>
      <UploadButton></UploadButton>
    </div>
  );
}