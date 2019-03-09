import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-top: 20px;
    width: 100%;
    background-color: ${(this.state.response) ? 'green' : '#ffffe0'};
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23f7de7e' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    margin-bottom: 10px;
    padding-bottom: 15px;
    text-align: center;
`;

const SuccessDiv = styled.div`
   width: 100%;
   height: 200px;
   background-color: green;
   padding: 0px;
`;

const Button = styled.button`
  background-color: black; 
  border: none;
  border-width: 2px;
  color: white;
  padding: 4px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  :hover {
      background: gray;
  }
`;

const Input = styled.input`
    
    border-color: black;
    margin-right: 10px;
    :focus {
        border-style: solid;
        outline: none;
        box-shadow: none;
        border-color: darkorange;
    }
`;

const Header = styled.h2`
    text-align: center;
`;

class EmailSignup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            response: null,
            error: null
        };
        this.postRequest=this.postRequest.bind(this);
    }

    onChange = (e) => {
        // console.log(e.target.value)
        this.setState({email: e.target.value});
    }

    postRequest(e) {
        e.preventDefault();
        
        fetch('https://eie0rd08dd.execute-api.us-east-1.amazonaws.com/dev/emailSub', {
        method: "POST", 
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: this.state.email
        })
        .then(data => this.setState({ response: "success" }))
        .catch(error => this.setState({ error }));
    };
    

    render() {
        return (
            <Container>
            {this.state.response ?
            <h1>Completed!</h1>
            :
            <>
            <Header>Want emails whenever I have something cool to say?</Header>
            <form onSubmit={this.postRequest}>
                <Input type="email" name="email" autoComplete="on" value={this.state.email} onChange={this.onChange} />
                <Button disabled={!this.state.email} onClick={this.postRequest}>Yes</Button>
            </form>
            </>
            }
            </Container>
        )
    }
};

export default EmailSignup;