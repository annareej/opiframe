import React from 'react';
import {Form,Button} from 'semantic-ui-react';

export default class CardForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            phone:"",
            email:"",
            webpage:""
        }
    }

    onChange = (e) => {
        if(e.target.name === "firstname"){
            this.setState({
                firstname:e.target.value
            })
        }
        if(e.target.name === "lastname"){
            this.setState({
                lastname:e.target.value
            })
        }
        if(e.target.name === "phone"){
            this.setState({
                phone:e.target.value
            })
        }
        if(e.target.name === "email"){
            this.setState({
                email:e.target.value
            })
        }
        if(e.target.name === "webpage"){
            this.setState({
                webpage:e.target.value
            })
        }
    }

    submit = (e) => {
        e.preventDefault();
        let contact = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            phone:this.state.phone,
            email:this.state.email,
            webpage:this.webpage
        }
        this.props.addToList(contact);
        this.setState({
            firstname:"",
            lastname:"",
            phone:"",
            email:"",
            webpage:""
        })
    }

    render(){
        return(
            <Form onSubmit={this.submit}>
                <Form.Field>
                    <label>First Name</label>
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.onChange}/>
                </Form.Field>
                <Form.Field>
                    <label>E-Mail</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.onChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Webpage</label>
                    <input type="text" name="webpage" value={this.state.webpage} onChange={this.onChange}/>
                </Form.Field>
                <Button type="submit">Add</Button>
            </Form>
        )
    }

}