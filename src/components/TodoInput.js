import React, { useState } from 'react';
import "../App.css";

function TodoInput(props) {
    const [inputText, setInputText] = useState("");
    const hitButton = (e) => {
        if(e.keyCode===13) {
            props.addList(inputText);
            setInputText("");
        }

    }
    return (
        <div className='input-container'>
            <input
                type='text'
                className='input-box-todo'
                placeholder='Input your todo'
                value={inputText}
                onKeyDown={hitButton}
                onChange={e=>{
                    setInputText(e.target.value)
                }} />
            <button
                className='add-btn'
                onClick={() => {
                    props.addList(inputText);
                    setInputText("");
                }}>+</button>
        </div>
    );
}
export default TodoInput;