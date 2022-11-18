import React from 'react'
import './Button.css'
interface ButtonProps {
  content: string;
  color: string;
  iconLink?: string;
  onClick: () => void;
}

let iconLink: string;
export default function Button(props: ButtonProps) {
  iconLink = props.iconLink!;
  return (
    <button
      onClick={props.onClick}

      style={{
        border:'none',
        height: '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "max-content",
        backgroundColor: props.color,
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "15px",
      }}
      className='Grow'>
      <Icon />
      <p style={{ margin: "10px", color: "black" }}>{props.content}</p>
    </button>
  )
}

function Icon() {
  if (iconLink !== undefined) {
    return (
      <div style={{ "height": "70%" }}>
        <img src={iconLink} />
      </div>
    )
  } else {
    return (<div></div>);
  }

}



