import React from "react"
import { Link } from "react-router-dom";


function NotFound() {
  return (<div className="notfound">
    This page does not exist.
    
    <Link to="/">Go to Home</Link>
    </div>)
}
export default NotFound;