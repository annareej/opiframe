import React from 'react';
import { Card, Container } from 'semantic-ui-react';

export default class CardList extends React.Component {

    render() {
        let tableItems = this.props.list.map((contact) =>
        <Card key={contact.id}>
                <Card.Content>
                    <Card.Header>{contact.firstname} {contact.lastname}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <span>
                        {contact.phone}<br/>
                        {contact.email}<br />
                        {contact.webpage}<br />
                    </span>
                </Card.Content>
            </Card>

        )
        return(
            <Container>
                <Card.Group>
                    {tableItems}        
                </Card.Group>
            </Container>
        )
    }

}