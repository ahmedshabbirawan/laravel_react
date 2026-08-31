import { useState } from "react"


function MessageMe(){
    const [count, setCount] = useState(0)
    return(
        <>
        <textarea value={"Message Count:"+count} />
        <button onClick={()=>setCount(count + 1)} >Send Message</button>
        </>    
    )
}

export default MessageMe