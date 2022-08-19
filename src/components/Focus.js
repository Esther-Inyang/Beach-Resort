import React, { useRef, useEffect} from 'react'

function Focus() {
    //NOTE: This Component is not part of the project
    //THE PURPOSE: Is To Focus at the Bottom as page renders

    const inputRef = useRef(null)

    useEffect(()=>{
    inputRef.current.focus();
    }, [])

  return (
    <div>
        <input type="text" placeholder="tadaa! Bottom" ref={inputRef} style={{marginTop: "40px"}} />
    </div>
  )
}

export default Focus