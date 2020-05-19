import React from "react";

const char = (props) => {
  const style = {
       display: "inline-block",
       padding: "16px",
       margin: "15px",
       border: "2px solid darkblue",
       textAligh: "center",
       color: "red"
  }

  return (
    <div style={style}>
      {props.character}
    </div>
  )

}

export default char;