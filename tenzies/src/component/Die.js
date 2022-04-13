import React from "react"

export default function Die (props) {
  const styles = {
    backgroundColor: props.click? "green":"white"
  }
  return(
      <div className="die" style={styles} onClick={props.hold}>
        <div className="die-number">{props.num}</div>
      </div>
  )
}
