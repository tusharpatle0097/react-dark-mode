// Content.js
import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function Content() {
  const { isDarkMode, colorRed } = useDarkMode();
  const [changeText, setchangeText] = useState('');
  const [myTextBold, setmyTextBold] = useState();
  const [textToggle, setTextToggle] = useState(false)


  // const topperchange = () => {
  //   if (textToggle) {
  //     setchangeText(changeText.toLowerCase());
  //   } else {
  //     setchangeText(changeText.toUpperCase());
  //   }
  //   setTextToggle(!textToggle);
  // }


  const topperchange = () => {
    if (textToggle) {
      setchangeText(changeText.toUpperCase())
    } else {
      setchangeText(changeText.toLowerCase())
    }
    setTextToggle(!textToggle)
  }

  const tolowerchange = () => {
    setchangeText(changeText.toLowerCase())
  }
  const textBold = () => {
    setmyTextBold("bold")
  }
  const CopyText = () => {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

  }
  return (
    <div className={`container content {${isDarkMode ? 'dark' : 'light'} || ${colorRed ? 'forRedDark' : 'forRedLight'}} `}>
      <h2>Text Compiler </h2>
      <div className="form-group">
        <textarea id="myInput" style={{ fontWeight: myTextBold }} value={changeText} onChange={(e) => setchangeText(e.target.value)} className={` ${isDarkMode ? 'inputDark' : 'light'}`} rows="12" ></textarea>
      </div>
      <div className='gap-3 d-flex'>
        <button onClick={topperchange} className={`btn btn-primary mt-3`} >{textToggle ? "Upper case off" : "Upper case on"}</button>
        <button onClick={tolowerchange} className='btn btn-primary mt-3'>To Lower Case</button>
        <button onClick={textBold} className='btn btn-primary mt-3'>To Bold</button>
        <button onClick={CopyText} className='btn btn-primary mt-3'>Copy Text</button>
        {/* <button className='btn btn-primary mt-3'>To Upper Case</button> */}
      </div>
    </div>
  );
}

export default Content;
