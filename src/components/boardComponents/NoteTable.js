import '../../styles/board.css'

const NoteTable = (props) => {
  const cellNotes = props.cellNotes
  console.log('cell notes:', cellNotes)
  
  const renderTD = (idx) => {
    const className = cellNotes.indexOf(idx.toString()) > -1 ? 'notes' : 'notes hidden'
    return (
      <td className={className}>{idx}</td>
    )
  }
  
  
  return(
    <table className="notes">
      <tr className="notes">
        {renderTD(1)}
        {renderTD(2)}
        {renderTD(3)}
      </tr>
      <tr className="notes">
        {renderTD(4)}
        {renderTD(5)}
        {renderTD(6)}
      </tr>
      <tr className="notes">
        {renderTD(7)}
        {renderTD(8)}
        {renderTD(9)}
      </tr>
    </table>
  )
}

export default NoteTable