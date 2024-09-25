import React, {useState} from "react"
import { Link } from "react-router-dom"

export default function About(){

const [style , setColor] = useState({
  backgroundColor: "black",
  color: "white", 
  border: "1px , solid , white",
  
})

const [text , setText] = useState("Enable White mode")

let toggle = () =>{
if(style.color === "white"){
  setColor({
    color:'black',
    backgroundColor:"white",
  border: "2px solid black"

  })
setText("Enable Darkmode")

  }
  else{
    setColor({
      color: "white",
      backgroundColor: "black"
    })
    setText("Dark Mode Enabled")
  }
}


return(
  <>

<div className="container"  style={style}>
<h1 className="my-3">About Us</h1>
<div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" 
             style={style}
            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              ABOUT THIS PROJECT
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={style}>
            
              <strong>Thank you for visiting my work</strong> I am a beginner React learner and this is my first project ... Done with react...and many more to come
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" 
            style={style}
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Synopis Type Shits
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"  style={style}>
            <div className="accordion-body" >
              <strong>REACT , HTML-CSS(Bootstrap) , JS etc </strong> I
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" 
             style={style}
             type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             Contacts
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={style}>
              <strong>For further enquiries: </strong>  davidsonandthegloballistdavidy@gmail.com <br></br>
              <strong>abhiralchhetri6@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
      <button className="btn btn-primary" onClick={toggle}>
        {text}
      </button>

      </div>
      
 </div>
 </>

 
      ) 
    }
      