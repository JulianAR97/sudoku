import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SudokuIcon from '../SudokuIcon.svg'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import '../styles/general.css' 


const theme =createMuiTheme({
  palette: {
    secondary: {
      main: '#ba7f9c'
    }
  }
})


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
        <Navbar.Brand className="ml-auto">
          <ThemeProvider theme={theme} >
            <GitHubIcon color="secondary"/>
          </ThemeProvider>

        </Navbar.Brand>
        
        <Navbar.Brand>
          <LinkedInIcon color="secondary"/>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

    </Navbar>
  )
}

export default MyNav