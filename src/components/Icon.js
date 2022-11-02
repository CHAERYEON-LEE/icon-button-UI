export default function Icon(props){
  const { path, style } = props;

  const iconStlyes = {
    width: '12px',
    height: '12px',
  };
  
  return <img src={path} style={{ ...iconStlyes, ...style}}></img>;
}