import React from 'react'

 function Alert(props) {
 const Capitalize = (w)=>{
const lower = w.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1)
 }
  return (
 props.popup &&<div className={`alert alert-${props.popup.type}alert-dismissible fade show`} role="alert">
<strong>{Capitalize(props.popup.type)} </strong> : {props.popup.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert