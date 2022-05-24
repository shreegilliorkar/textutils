import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("UpperCase Clicked");
        setText(text.toUpperCase());
    }

    const handleDownClick = ()=>{
        //console.log("UpperCase Clicked");
        setText(text.toLowerCase());
    }

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    const[text, setText] = useState('');
    //setText("new text");
  return (
      <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className = "mb-3">
           <textarea className = "form-control" value = {text} onChange = {handleOnChange} id = "mybox" row = "8"/>
        </div>
        <button className="btn btn-primary mx-1"  onClick={handleUpClick} >Convert to UperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button> 
    </div>
    <div className="container my-3">
    <h2>Your text summary</h2>
    <p><b>{text.split(" ").length-1}</b> Words and <b>{text.length}</b> Characters</p>
    <p><b>{0.008*text.split("").length}</b> Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}