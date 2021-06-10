import { Component } from 'react'

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

    inputChange = (e) => {
        this.setState({
            registration: {
                ...this.state.registration,
                [e.target.id]: e.target.value,
            }
        })
    }

    submitUpdate = async (e) => {
        e.preventDefault() 
    }

    render() { 
        return (  
            <>
            <Form className="my-3" onSubmit={(e) => submitUpdate(e)}>
                <Form.Row>
                    <Col>
                        <Form.Control id='name' placeholder="First name" value={this.state.registration.name} onChange={e => inputChange(e)}/>
                    </Col>
                    <Col>
                        <Form.Control id='surname' placeholder="Last name" value={this.state.registration.surname} onChange={e => inputChange(e)}/>
                    </Col>
                </Form.Row>
                <Form.Group >
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control id='email' type="email" placeholder="Enter email" value={this.state.registration.email} onChange={e => inputChange(e)}/>
                </Form.Group>

                <Form.Group >
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control id='password' type="password" placeholder="Password" value={this.state.registration.password} onChange={e => inputChange(e)}/>
                </Form.Group>
                <Form.Group >
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control id='passwordConfirm' type="password" placeholder="ConfirmPassword" value={this.state.registration.passwordConfirm} onChange={e => inputChange(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </>
        );
    }
}
 
export default Registration;