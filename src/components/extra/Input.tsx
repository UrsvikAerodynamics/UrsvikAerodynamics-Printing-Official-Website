import React from "react";

interface IProps{
    type:string;
    placeholder:string;
    borderColor: string;
    name: string;
    required : boolean;
    onChange: () => void;
}

export default function TextInput(props:IProps) {
  return (
    <input type={props.type} placeholder={props.placeholder} name={props.name} required={props.required} onChange={props.onChange} >

    </input>
  );
}
