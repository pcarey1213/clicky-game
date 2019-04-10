import React from "react";



function Clicky(props) {
  const clickStyle = {
    backgroundImage: `url(${props.image})`
  };

  return(
    <div role="img" id={props.id} aria-label="click item" className="click-item" alt={props.name} style={clickStyle} onClick={() => props.shuffleComposers(props.id)}></div>
  )
}

export default Clicky;