import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

function TextForm(props) {
    // Create First State
    const [Text, setText] = useState("");
    // text ="Enter Tetx"   // Wronge Way
    // setText("Enter Text Here")  // Right Way


    // Convert to UperCase Fun
    const handleUpClick = () => {
        // console.log("UperCase Clicked :" + Text);
        // setText("To uperCase")
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Covert to UperCase", "success")
        // props.showAlert("Convert to UperCase", "success")
    };

    // Convert to Uper Lower Case Fun
    const handleLowClick = () => {
        // console.log("UperCase Clicked :" + Text);
        // setText("To uperCase")
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Covert to lowerCase", "success")

    };
        // Clear input  Value func
        const handleClearClick = () => {
            let newText ='';
            setText(newText);
        props.showAlert("Clear Text", "success")

        };
             //Copy Text
        const handleCopy = () => {
            var  newText =document.getElementById("myBox");
            newText.select();
            // text.select();
            navigator.clipboard.writeText(newText.value)
            // setText(newText);
        props.showAlert("Copid Text", "success")

        };
        // Extra Removing Spacing 
        const handleExtraReomveSpace = () => {
          let newText=Text.split(/[ ]+/);
          setText(newText.join(' '))
        props.showAlert("Removed Extra Spacess", "success")

        };

    //handleChange Fun in text Area
    const handleChanger = (e) => {
        // console.log("On Change");
        setText(e.target.value);
    };
    return (
        <Fragment>
        <div className="container mt-5 " style={{color:props.mode=== 'dark'?'white':'#042743'}}>
            <h3 className="my-3 ">{props.heading}</h3>
            <div className="mb-3">
                <textarea style={{backgroundColor:props.mode=== 'dark'?'gray':'white',color:props.mode=== 'dark'?'white':'#042743'}}
                    className="form-control"
                    id="myBox"
                    rows="8"
                    value={Text}
                    onChange={handleChanger}
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert toUperCase
            </button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>
                Convert toLowerCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleExtraReomveSpace}>
                Extra Removing Spacing
            </button>
        </div>
        <div className="conainter"  style={{color:props.mode=== 'dark'?'white':'#042743'}}>
            <h2 className="my-3">Your Text Summery</h2>
            
            {/* <p>{Text.split(" ").length} Words {Text.length} Characters </p> // adding Word Conuting */}
    
               <p> {Text.length>0 ? Text.trim().split(" ").length : 0} Words {Text.length} Characters </p>             
                <p>{0.08 * Text.split(" ").length} minutes Read Word</p> {/* // adding Word Time Conut */}

            <h2>Preview Summary</h2>
            <p>{Text.length>0?Text:"Enter something in the box above to preview it here"}</p>
        </div>
        </Fragment>
    );
}

export default TextForm;
