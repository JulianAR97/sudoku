import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SudokuIcon from '../SudokuIcon.svg'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
// import { ThemeProvider } from '@material-ui/core/styles'
// import {theme} from '../styles/theme'
import '../styles/general.css' 


// const theme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: '#ba7f9c'
//     }
//   }
// })

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
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="main-nav">
            <Nav.Link href="/play">Play</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/help"></Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Only set ml-auto of leftmost icon */}
        <Navbar.Brand 
          href="https://github.com/JulianAR97/sudoku"
          target="_blank"
          className="ml-auto"
        > 
          <GitHubIcon color="secondary"/>
        </Navbar.Brand>
        
        <Navbar.Brand
          href="https://linkedin.com/in/julian-a-rosenthal"
          target="_blank"
        >
          <LinkedInIcon color="secondary"/>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

    </Navbar>
  )
}

export default MyNav