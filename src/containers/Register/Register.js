import React from 'react';
import Form from '../../components/Form/Form'
import Title from '../../components/Title/Title'

class Register extends React.Component {

    state = {
        nome: '',
        email: '',
        password: ''
    }
    
    handleSubmit = async (e) => {		
        const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
    
        e.preventDefault();
        fetch(`http://localhost:8081/EventsCentral/api/users`,{
            method: 'POST',
            headers: myHeaders,
            body:  JSON.stringify( this.state ),
        });
    }

    handleChange = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <Title title="Register"/>
                <Form onSubmit={this.handleSubmit} 
                onChange={this.handleChange}
                fieldPlaceholder1="Name"
                fieldPlaceholder2="E-mail"
                fieldPlaceholder3="Password"/>
            </div>
        )
    }
}

export default Register;