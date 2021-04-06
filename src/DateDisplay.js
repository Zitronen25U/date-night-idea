import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardDeck } from "react-bootstrap";


class DateDisplay extends React.Component {


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateItem();
    console.log('test');
  }

 
  render() {
    const datesArr = this.props.dates.sort(() => 0.5-Math.random());
    let shuffled = datesArr.slice(0, 4)

    return (
      <section id="dateCards">
        <h1>Your Date Ideas</h1>
        <CardDeck>

        {
          shuffled.map((item, idx) => 
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
                  {/* <ListGroupItem>{item.cuisines}</ListGroupItem> */}
                  </Card.Text>
                </ListGroup>
                <Button onClick={this.handleSubmit}>Save This Suggestion</Button>
              </Card>
            </div>
          )
        }
        </CardDeck>
        
      </section >
    )
  };
}

export default DateDisplay;