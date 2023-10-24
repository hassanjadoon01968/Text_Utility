import React, { useState } from 'react'


const TextForm = (props) => {
    const [text, setText] = useState('');
    const [bold, setBold] = useState('normal');
    const [mode, setMode] = useState({ color: "black", backgroundColor: "white" })
    const [buttonText, setButtonText] = useState("Enable dark mode")
    const buttonModeClick = () => {
        if (mode.backgroundColor == "white" && mode.color == "black") {
            setMode({ color: "white", backgroundColor: "black" })
            setButtonText("Enable light mode")
        } else {
            setMode({ color: "black", backgroundColor: "white" })
            setButtonText("Enable dark mode")
        }
    }
    const buttonUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to uppercase!', 'success');
    }

    const buttonLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lowercase!', 'success');

    }
    const buttonClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared!', 'success');
    }

    const upHandler = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <div className='container my-4' style={mode}>
                <h1>{props.heading}</h1>
                <textarea className={`form-control`} style={{ ...mode, fontWeight: bold }} id="myBox" value={text} onChange={upHandler} rows="10"></textarea>
                <div className='container my-2' style={mode}>
                    <button className="btn btn primary mx-1" style={{ backgroundColor: 'skyblue' }} onClick={buttonUpClick}>Convert to Uppercase</button>
                    <button className="btn btn primary mx-1" style={{ backgroundColor: 'skyblue' }} onClick={buttonLoClick}>Convert to Lowercase</button>
                    <button className="btn btn primary mx-1" style={{ backgroundColor: 'skyblue' }} onClick={buttonClearClick}>Clear Text</button>
                    <button className="btn btn primary mx-1" style={{ backgroundColor: 'skyblue' }} onClick={() => {
                        if (bold === "normal") {
                            setBold("bold");
                            props.showAlert('Text converted to Bold!', 'success');
                        } else {
                            setBold("normal")
                        }
                    }}>{bold === "normal" ? "Bold" : "normal"} Text</button>
                    <button className="btn btn primary mx-1" style={{ backgroundColor: 'skyblue' }} onClick={buttonModeClick}>{buttonText}</button>
                </div>

                <div className='container my-4' style={mode}>
                    <h2>Text Summary</h2>
                    <p>{text.split(' ').length} words and {text.length} letters</p>
                    <p>{0.08 * text.split(' ').length} minutes to read the entire text</p>
                </div>
                <div className='container my-4' style={mode}>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default TextForm
// export default React.memo(TextForm)
