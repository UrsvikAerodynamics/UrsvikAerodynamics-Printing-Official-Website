import React from "react";
import "./Input.css"

interface IProps{
    type:string;
    placeholder:string;
    color: string;
    name: string;
    required : boolean;
    onChange: () => void;
}

export default function TextInput(props:IProps) {
  return (
    <input type={props.type} placeholder={props.placeholder} name={props.name} required={props.required} onChange={props.onChange} style={{backgroundColor:props.color}}>

    </input>
  );
}
