import React from 'react'
import "./style.scss";

// ----HigherOrder Component --------------------------------
function ContentWrapper({children}) {
  return (
    <div className='contentWrapper'>
      {children}
    </div>
  )
}

export default ContentWrapper
