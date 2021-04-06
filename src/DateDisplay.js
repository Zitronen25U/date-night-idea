import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardDeck } from "react-bootstrap";


class DateDisplay extends React.Component {
  render() {
    return (
      <section id="dateCards">
        <h1>Your Date Ideas</h1>
        <CardDeck>
        {
          this.props.shuffled.map((item, idx) => 
            <div key={idx}>
              <Card className="suggestionCard">
                <Card.Body>
                  <Card.Title>{item.restaurant_name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <Card.Text>
                    <ListGroupItem>{item.restaurant_phone}</ListGroupItem>
                    {/* <ListGroupItem>
                    <Card.Link href={item.restaurant_website}>Link</Card.Link>
                    </ListGroupItem> */}
                  <ListGroupItem>{item.address.formatted}</ListGroupItem>
                  <ListGroupItem>{item.cuisines?item.cuisines.join(', '):`Not Available`}</ListGroupItem>
                  </Card.Text>
                </ListGroup>
                <Button onClick={()=>this.props.addToList(item)}>Save This Suggestion</Button>
              </Card>
            </div>
          )
        }
        </CardDeck>
        <Button onClick={this.props.getRandomRest}>Shuffle</Button>
      </section >
    )
  };
}

export default DateDisplay;