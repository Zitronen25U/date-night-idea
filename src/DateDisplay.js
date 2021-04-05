import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardDeck } from "react-bootstrap";


// [Math.floor(Math.random()*this.props.dates.length)]
class DateDisplay extends React.Component {
 
  render() {
    const datesArr = this.props.dates.sort(() => 0.5-Math.random());
    let shuffled = datesArr.slice(0, 4)
    console.log(shuffled);
    // console.log('this is dates', this.props.dates)
    // console.log('this is after math', datesArr);
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
                <Button>Save This Suggestion</Button>
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