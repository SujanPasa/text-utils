import React, {useState} from 'react';


export default function TextArea(props) {

    const placeholderText = 'Enter your text';
    
    const [text, setText] = useState("");

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
   
    const toUpperCase = ()=> {
         let newText = text.toUpperCase();
         setText(newText);
    }

    const toLowerCase = ()=> {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const clearText = ()=>{
        setText("")
    }

    let word = text.split(" ").length;
    
  return (
    <>
        <div className="container input-section-wrapper">

            <h2 className='my-3' > {props.heading} </h2>
            <textarea className="form-control" rows="10" id="comment" name="text" value={text} onChange={handleOnChange} placeholder={placeholderText}></textarea>

            <button className="btn btn-primary mx-1 my-3" onClick={toUpperCase}>Change to UpperCase</button>
            <button className="btn btn-primary mx-1 my-3" onClick={toLowerCase} >Change to LowerCase</button>
            <button className="btn btn-primary mx-1 my-3" onClick={clearText} >Clear Text</button>
        </div>
        <div className="container text-details">
            <h6>{word} words and {text.length} characters</h6>
        </div>
        <div className="container preview my-3">
            <h2>Preview</h2>
            <p className="preview-text">
                {text}
            </p>
        </div>
    </>
  )
}
