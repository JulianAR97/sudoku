import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SudokuIcon from '../SudokuIcon.svg'

const MyNav = () => {
  return (
    <Navbar expand="sm" style={{backgroundColor: 'rgb(250, 212, 13)'}}>
        <Navbar.Brand href="/">
          <img
            src={SudokuIcon}
            width="40px"
            height="40px"
            className="d-inline-block align-top"
            alt="Sudoku Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="main-nav">
            <Nav.Link href="/play">Play</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/help"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav