import Icon from './Icon.js';

const uploadStatus = {
    idle:{
        text: "업로드",
        path: "../assets/icons/type=up-arrow.svg"
    },
    pending:{
        text: "업로드 중",
        path: "../assets/icons/type=spinner-animate.svg"
    },
    resolved:{
        text: "완료",
        path: "../assets/icons/type=check-mark.svg"
    },
    rejected:{
        text: "실패",
        path: "../assets/icons/type=cross.svg"
    },
    disabled:{
        text: "업로드",
        path: "../assets/icons/type=not-allowed.svg",
        style: {
            filter:'invert(76%) sepia(8%) saturate(202%) hue-rotate(196deg) brightness(92%) contrast(89%)'
        }
    }
}

export default function UploadButton(props){
    const {status} = props;
    const { text, path, style } = uploadStatus[status ?? 'idle'];

    const buttonStyles = {
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
      cursor: 'pointer',
    };

    const textStyles = {
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '12px',
      color: '#525577',
    };

    return (
      <button type="button" style={buttonStyles}>
        <div style={{...textStyles, ...style}}>{text}</div>
        <Icon path={path} style={style}></Icon>
      </button>
    );
}