

const Button = (props) => {
  return (
    <button style={props.style} onClick={props.handleClick} value={props.text}>
      {props.text}
    </button>
  )
}

export default Button