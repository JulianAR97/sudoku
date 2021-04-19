import '../../styles/board.css'

const NoteTable = (props) => {
  return(
    <table className="notes"style={{border: 'none', overflow: 'hidden', width: '100%'}}>
      <tr className="notes">
        <td className="notes">1</td>
        <td className="notes">2</td>
        <td className="notes">3</td>
      </tr>
      <tr className="notes">
        <td className="notes">4</td>
        <td className="notes">5</td>
        <td className="notes">6</td>
      </tr>
      <tr className="notes">
        <td className="notes">7</td>
        <td className="notes">8</td>
        <td className="notes">9</td>
      </tr>
    </table>
  )
}

export default NoteTable