import { Component } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

class Registration extends Component {
    state = {  
       registration: { 
            name: '',
            surname: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
    }

    inputChange=(e) => {
        this.setState({
            registration: {
                ...this.state.registration,
                [e.target.id]: e.target.value,
            }
        }, () => console.log(this.state.registration)
        )
    }

    submitRegistration = async (e) => {
        e.preventDefault() 
    }

    render() { 
        return (  
            <Container>
                <Row className="justify-content-center" >
                    <Col md={7} >
                        <Form className="py-5" onSubmit={(e) => this.submitRegistration(e)}>
                            <h1 className="pt-5 text-center">Register Form</h1>
                            <Form.Group className="pt-5">
                                <Form.Row >
                                    <Col md={6}>
                                        <Form.Control className="mb-3 mb-md-0" required id='name' type="text" placeholder="Enter name" value={this.state.registration.name} onChange={e => this.inputChange(e)}/>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control required  id='surname' type="text" placeholder="Enter surname" value={this.state.registration.surname} onChange={e => this.inputChange(e)}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group >
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control required  id='email' type="email" placeholder="Enter email" value={this.state.registration.email} onChange={e => this.inputChange(e)}/>
                            </Form.Group>

                            <Form.Group >
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control required  id='password' type="password" placeholder="Password" value={this.state.registration.password} onChange={e => this.inputChange(e)}/>
                            </Form.Group>
                            <Form.Group >
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control required  id='passwordConfirm' type="password" placeholder="Confirm Password" value={this.state.registration.passwordConfirm} onChange={e => this.inputChange(e)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Registration;