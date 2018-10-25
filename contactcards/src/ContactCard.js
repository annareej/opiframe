import React from 'react';
import {Card} from 'semantic-ui-react';

export default class ContactCard extends React.Component{
    render(){

        let contact = this.props.contact
        
        return(                
            <Card>
                <Card.Content>
                    <Card.Header>{contact.firstname}</Card.Header>
                    <Card.Meta>Softwarea Developer</Card.Meta>
                    <Card.Description>Matti on devaaja Espoosta</Card.Description>
                </Card.Content>
            </Card>
        )
    }

}