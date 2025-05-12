"use client"

import { updateContact } from "@/redux/contactSlice";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";


type inputProps = {
    for: string,
    label: string,
    name?: string
}

function InputField(props: inputProps) {

    const [isInputFocused, setIsInputFocused] = useState(false);

    const dispatch = useDispatch();


    function handleInput (e:any): void {
      //@ts-ignore
      dispatch(updateContact({type: props.for, payload: e?.target?.value}))
      if(e?.target?.value !== '') {
        setIsInputFocused(true)
        console.log(e?.target?.value)
      }
    }

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = (e: any) => {
    setIsInputFocused(false);
    if(e?.target?.value !== '') {
      setIsInputFocused(true)
      // console.log(e?.target?.value)
    }
    // //@ts-ignore
    // setIsInputFilled(!!document.getElementById('fname').value);
  };

    return ( 
        <div className="relative w-full">
            <label htmlFor={props.for} className={`font-semibold text-lg text-black left-6 absolute transition-all duration-300 ${isInputFocused ? "-translate-y-7 -translate-x-2 scale-100" : "translate-y-1 translate-x-0 scale-75"}`}>{props.label}</label>
            <input type="text" id={props.for} name={props?.name} className="primary-input mb-10 w-full" onFocus={handleFocus} onBlur={(e) => handleBlur(e)} onChange={(e) => {handleInput(e)}}/>
        </div>
     );
}

export default InputField;