import { useState } from "react";

const Expand = ({children,maxChars=300}) => {
    let [expanded,setExpended] = useState(true)
    if (children.length<= maxChars) return <p>{children}</p>
    let text = expanded? children.substring(0,maxChars) : children
    return ( 
        <>
         <p >{text}
         <button className="show" onClick={()=>setExpended(!expanded)}>{expanded? "... Read More" : "Show Less"}</button>
         </p>
        </>
     );
}
 
export default Expand;