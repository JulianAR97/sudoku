import Button from './Button' 

const DifficultySelect = (props) => {
  const renderButtons = () => {
    return props.difficulties.map((d, i) => {
      return <Button key={i} text={d} handleClick={props.handleClick} />
    })
  }

  return (
    <>
      {renderButtons()}
    </>
  )
}

export default DifficultySelect