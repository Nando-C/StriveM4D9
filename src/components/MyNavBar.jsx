import {Navbar, Nav} from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'

const MyNavBar = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <Container> */}
            <Navbar.Brand href="#home">My Book Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/'>
                        <div className={props.location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</div>
                    </Link>
                    <Link to='/registration'>
                        <div className={props.location.pathname === '/registration' ? 'nav-link active' : 'nav-link'}>Registration</div>
                    </Link>
                    <Link to='/About'>
                        <div className={props.location.pathname === '/About' ? 'nav-link active' : 'nav-link'}>About</div>
                    </Link>
                    {/* <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Browse</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        {/* </Container> */}
    </Navbar>
)

export default withRouter(MyNavBar)
