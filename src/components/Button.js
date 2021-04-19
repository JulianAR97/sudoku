

const Button = (props) => {
  return (
    <button id={props.id} className={props.className} style={props.style} onClick={props.handleClick} value={props.text}>
      {props.text}
    </button>
  )
}

export default Button