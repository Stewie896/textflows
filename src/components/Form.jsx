import React, { useState } from 'react'
import pr from 'prop-types'

export default function Form(props) {

  const [text , setText] = useState("")
const handelChange = (e)=>{
setText(e.target.value)
}
let toUpper = ()=>{
let newText = text.toUpperCase();
setText(newText)
props.sa("Converted to Uppercase" , "success ")
}

let toLower = () => {
  let newText = text.toLowerCase();
  setText(newText)
  props.sa("Converted to LowerCase" , "success ")
}

let clear = () =>{
 let newText = "";
 setText(newText)
 props.sa("Cleared Text" , "success ")
}



  return (
<>

<div className='container' style={{color: props.md === 'dark' ? 'white' : 'black'}} >
  <h2>{props.heading} </h2>
  <div >
  <textarea className='form' value={text} onChange={handelChange} style={{
    backgroundColor: props.md === 'light' ? 'white': '#3C3D37',
     color: props.md === 'dark' ? 'white' : 'black'
  }} id="box" rows={15} ></textarea>
  </div>
  <button className="btn btn-primary" onClick={toUpper} >Convert to Uppercase</button>
  <button id="bt" className="btn btn-primary" onClick={toLower} >Convert to Lowercase</button>
  <button id="bt" className="btn btn-primary" onClick={clear} >Clear All</button>
  


</div>



<div className="container2 my-3" style={{color: props.md === 'dark' ? 'white' : 'black'}}>

 
<h3 className='tm' style={{marginLeft: "200px"}}>Your text summary</h3>
<p style={{marginLeft: "200px"}}> {text.split(" ").length} words , {text.length} characters</p>


<h2 className="pr">Preview</h2>
<p className='p'> {text.length>0 ? text:"Enter your text in the textbox for Priview"}</p>
</div>
</>

  )
}
