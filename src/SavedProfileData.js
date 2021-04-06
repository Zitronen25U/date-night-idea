import React from 'react';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class SavedProfileData extends React.Component {

  render() {
    console.log(this.props);
    return (
      <section>
        <h1>Your Saved Dates</h1>
        <CardDeck>
          {
            this.props.savedDates.map((item, idx) =>
              <div key={idx}>
                <Card className="suggestionCard">
                  <Card.Body>
                    <Card.Title>{item.restaurant_name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <Card.Text>
                      <ListGroupItem>{item.restaurant_phone}</ListGroupItem>
                      <ListGroupItem>{item.address.formatted}</ListGroupItem>
                      <ListGroupItem>{item.cuisines ? item.cuisines.join(', ') : `Not Available`}</ListGroupItem>
                    </Card.Text>
                  </ListGroup>
                  <Button></Button>
                </Card>
              </div>
            )
          }
        </CardDeck>
      </section >
    );
  }
}

export default SavedProfileData;
