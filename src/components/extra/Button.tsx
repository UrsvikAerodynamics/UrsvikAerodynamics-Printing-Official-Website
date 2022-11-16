import React from 'react'
import './Button.css'
interface ButtonProps {
  content: string;
  color: string;
  iconLink?: string;
}

let iconLink : string;
export default function Button(props: ButtonProps) {
  iconLink = props.iconLink!;
  return (
    <div style={{
      height: '55px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: "max-content",
      backgroundColor: props.color,
      paddingLeft:"15px",
      paddingRight:"15px",
      borderRadius:"15px",
      margin:"30px"
    }}
    className='Grow'>
      <Icon/>
      <p style={{margin:"10px", color:"black"}}>{props.content}</p>
    </div>
  )
}

function Icon() {
  if (iconLink !== null) {
    return (
      <div style={{"height":"70%"}}>
        <img src={iconLink} />
      </div>
    )
  }else{
    return (<div></div>);
  }

}



